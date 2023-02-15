/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get an integration runtime stop operation status
 *
 * @summary Get an integration runtime stop operation status
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/IntegrationRuntimes_Stop_OperationStatus.json
 */
async function getIntegrationRuntimeOperationStatus() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "2d03866b-587b-4e1f-a2fe-0a55958c655e";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "drage-felles-prod-rg";
  const workspaceName = "felles-prod-synapse-workspace";
  const integrationRuntimeName = "SSIS-intergrationRuntime-Drage";
  const integrationRuntimeOperationId = "5752dcdf918e4aecb941245ddf6ebb83";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.get.integrationRuntimeStop(
    resourceGroupName,
    workspaceName,
    integrationRuntimeName,
    integrationRuntimeOperationId
  );
  console.log(result);
}

async function main() {
  getIntegrationRuntimeOperationStatus();
}

main().catch(console.error);
