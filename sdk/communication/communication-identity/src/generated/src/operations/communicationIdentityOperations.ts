/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing.js";
import { CommunicationIdentityOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { IdentityRestClient } from "../identityRestClient.js";
import {
  CommunicationIdentityCreateOptionalParams,
  CommunicationIdentityCreateResponse,
  CommunicationIdentityDeleteOptionalParams,
  CommunicationIdentityRevokeAccessTokensOptionalParams,
  CommunicationIdentityExchangeTeamsUserAccessTokenOptionalParams,
  CommunicationIdentityExchangeTeamsUserAccessTokenResponse,
  CommunicationIdentityTokenScope,
  CommunicationIdentityIssueAccessTokenOptionalParams,
  CommunicationIdentityIssueAccessTokenResponse
} from "../models/index.js";

/** Class containing CommunicationIdentityOperations operations. */
export class CommunicationIdentityOperationsImpl
  implements CommunicationIdentityOperations {
  private readonly client: IdentityRestClient;

  /**
   * Initialize a new instance of the class CommunicationIdentityOperations class.
   * @param client Reference to the service client
   */
  constructor(client: IdentityRestClient) {
    this.client = client;
  }

  /**
   * Create a new identity, and optionally, an access token.
   * @param options The options parameters.
   */
  async create(
    options?: CommunicationIdentityCreateOptionalParams
  ): Promise<CommunicationIdentityCreateResponse> {
    return tracingClient.withSpan(
      "IdentityRestClient.create",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          createOperationSpec
        ) as Promise<CommunicationIdentityCreateResponse>;
      }
    );
  }

  /**
   * Delete the identity, revoke all tokens for the identity and delete all associated data.
   * @param id Identifier of the identity to be deleted.
   * @param options The options parameters.
   */
  async delete(
    id: string,
    options?: CommunicationIdentityDeleteOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "IdentityRestClient.delete",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, options },
          deleteOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Revoke all access tokens for the specific identity.
   * @param id Identifier of the identity.
   * @param options The options parameters.
   */
  async revokeAccessTokens(
    id: string,
    options?: CommunicationIdentityRevokeAccessTokensOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "IdentityRestClient.revokeAccessTokens",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, options },
          revokeAccessTokensOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Exchange an Azure Active Directory (Azure AD) access token of a Teams user for a new Communication
   * Identity access token with a matching expiration time.
   * @param token Azure AD access token of a Teams User to acquire a new Communication Identity access
   *              token.
   * @param appId Client ID of an Azure AD application to be verified against the appid claim in the
   *              Azure AD access token.
   * @param userId Object ID of an Azure AD user (Teams User) to be verified against the oid claim in the
   *               Azure AD access token.
   * @param options The options parameters.
   */
  async exchangeTeamsUserAccessToken(
    token: string,
    appId: string,
    userId: string,
    options?: CommunicationIdentityExchangeTeamsUserAccessTokenOptionalParams
  ): Promise<CommunicationIdentityExchangeTeamsUserAccessTokenResponse> {
    return tracingClient.withSpan(
      "IdentityRestClient.exchangeTeamsUserAccessToken",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { token, appId, userId, options },
          exchangeTeamsUserAccessTokenOperationSpec
        ) as Promise<CommunicationIdentityExchangeTeamsUserAccessTokenResponse>;
      }
    );
  }

  /**
   * Issue a new token for an identity.
   * @param id Identifier of the identity to issue token for.
   * @param scopes List of scopes attached to the token.
   * @param options The options parameters.
   */
  async issueAccessToken(
    id: string,
    scopes: CommunicationIdentityTokenScope[],
    options?: CommunicationIdentityIssueAccessTokenOptionalParams
  ): Promise<CommunicationIdentityIssueAccessTokenResponse> {
    return tracingClient.withSpan(
      "IdentityRestClient.issueAccessToken",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { id, scopes, options },
          issueAccessTokenOperationSpec
        ) as Promise<CommunicationIdentityIssueAccessTokenResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/identities",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.CommunicationIdentityAccessTokenResult
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      createTokenWithScopes: ["options", "createTokenWithScopes"],
      expiresInMinutes: ["options", "expiresInMinutes"]
    },
    mapper: Mappers.CommunicationIdentityCreateRequest
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/identities/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const revokeAccessTokensOperationSpec: coreClient.OperationSpec = {
  path: "/identities/{id}/:revokeAccessTokens",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const exchangeTeamsUserAccessTokenOperationSpec: coreClient.OperationSpec = {
  path: "/teamsUser/:exchangeAccessToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationIdentityAccessToken
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: { token: ["token"], appId: ["appId"], userId: ["userId"] },
    mapper: { ...Mappers.TeamsUserExchangeTokenRequest, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const issueAccessTokenOperationSpec: coreClient.OperationSpec = {
  path: "/identities/{id}/:issueAccessToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationIdentityAccessToken
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      scopes: ["scopes"],
      expiresInMinutes: ["options", "expiresInMinutes"]
    },
    mapper: {
      ...Mappers.CommunicationIdentityAccessTokenRequest,
      required: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
