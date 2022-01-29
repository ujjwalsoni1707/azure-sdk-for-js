/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { BackupPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  ProtectionPolicyResource,
  BackupPoliciesListNextOptionalParams,
  BackupPoliciesListOptionalParams,
  BackupPoliciesListResponse,
  BackupPoliciesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BackupPolicies operations. */
export class BackupPoliciesImpl implements BackupPolicies {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class BackupPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters
   * to fetch
   * scoped results.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  public list(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<ProtectionPolicyResource> {
    const iter = this.listPagingAll(vaultName, resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(vaultName, resourceGroupName, options);
      }
    };
  }

  private async *listPagingPage(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupPoliciesListOptionalParams
  ): AsyncIterableIterator<ProtectionPolicyResource[]> {
    let result = await this._list(vaultName, resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        vaultName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupPoliciesListOptionalParams
  ): AsyncIterableIterator<ProtectionPolicyResource> {
    for await (const page of this.listPagingPage(
      vaultName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters
   * to fetch
   * scoped results.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  private _list(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupPoliciesListOptionalParams
  ): Promise<BackupPoliciesListResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    vaultName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: BackupPoliciesListNextOptionalParams
  ): Promise<BackupPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionPolicyResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionPolicyResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
