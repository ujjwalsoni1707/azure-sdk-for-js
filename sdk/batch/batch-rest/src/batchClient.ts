// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { AzureNamedKeyCredential, TokenCredential, isTokenCredential } from "@azure/core-auth";
import { BatchClient } from "./clientDefinitions";
import { createBatchSharedKeyCredentialsPolicy } from "./credentials/batchSharedKeyCredentials";

/**
 * Initialize a new instance of `BatchClient`
 * @param endpoint - Batch account endpoint (for example: https://batchaccount.eastus2.batch.azure.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential | AzureNamedKeyCredential,
  options: ClientOptions = {}
): BatchClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2024-02-01.19.0";
  const userAgentInfo = `azsdk-js-batch-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
    telemetryOptions: {
      clientRequestIdHeaderName:
        options.telemetryOptions?.clientRequestIdHeaderName ?? "client-request-id",
    },
    credentials: {
      scopes: options.credentials?.scopes ?? ["https://batch.core.windows.net//.default"],
    },
  };

  if (isTokenCredential(credentials)) {
    return getClient(baseUrl, credentials, options) as BatchClient;
  }

  // Customization for BatchClient, shouldn't be overwritten codegen
  // If the credentials are not a TokenCredential, we need to add a policy to handle the shared key auth.
  const client = getClient(baseUrl, options) as BatchClient;
  const authPolicy = createBatchSharedKeyCredentialsPolicy(credentials);
  client.pipeline.addPolicy(authPolicy);
  return client;
}
