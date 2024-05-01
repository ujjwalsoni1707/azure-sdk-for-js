/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ReplicationStorageClassificationMappings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  StorageClassificationMapping,
  ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsNextOptionalParams,
  ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOptionalParams,
  ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsResponse,
  ReplicationStorageClassificationMappingsListNextOptionalParams,
  ReplicationStorageClassificationMappingsListOptionalParams,
  ReplicationStorageClassificationMappingsListResponse,
  ReplicationStorageClassificationMappingsGetOptionalParams,
  ReplicationStorageClassificationMappingsGetResponse,
  StorageClassificationMappingInput,
  ReplicationStorageClassificationMappingsCreateOptionalParams,
  ReplicationStorageClassificationMappingsCreateResponse,
  ReplicationStorageClassificationMappingsDeleteOptionalParams,
  ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsNextResponse,
  ReplicationStorageClassificationMappingsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationStorageClassificationMappings operations. */
export class ReplicationStorageClassificationMappingsImpl
  implements ReplicationStorageClassificationMappings {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationStorageClassificationMappings class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists the storage classification mappings for the fabric.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param options The options parameters.
   */
  public listByReplicationStorageClassifications(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    options?: ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOptionalParams
  ): PagedAsyncIterableIterator<StorageClassificationMapping> {
    const iter = this.listByReplicationStorageClassificationsPagingAll(
      resourceName,
      resourceGroupName,
      fabricName,
      storageClassificationName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByReplicationStorageClassificationsPagingPage(
          resourceName,
          resourceGroupName,
          fabricName,
          storageClassificationName,
          options,
          settings
        );
      }
    };
  }

  private async *listByReplicationStorageClassificationsPagingPage(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    options?: ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<StorageClassificationMapping[]> {
    let result: ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByReplicationStorageClassifications(
        resourceName,
        resourceGroupName,
        fabricName,
        storageClassificationName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByReplicationStorageClassificationsNext(
        resourceName,
        resourceGroupName,
        fabricName,
        storageClassificationName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByReplicationStorageClassificationsPagingAll(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    options?: ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOptionalParams
  ): AsyncIterableIterator<StorageClassificationMapping> {
    for await (const page of this.listByReplicationStorageClassificationsPagingPage(
      resourceName,
      resourceGroupName,
      fabricName,
      storageClassificationName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the storage classification mappings in the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  public list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationStorageClassificationMappingsListOptionalParams
  ): PagedAsyncIterableIterator<StorageClassificationMapping> {
    const iter = this.listPagingAll(resourceName, resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceName,
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationStorageClassificationMappingsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<StorageClassificationMapping[]> {
    let result: ReplicationStorageClassificationMappingsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceName, resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationStorageClassificationMappingsListOptionalParams
  ): AsyncIterableIterator<StorageClassificationMapping> {
    for await (const page of this.listPagingPage(
      resourceName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the storage classification mappings for the fabric.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param options The options parameters.
   */
  private _listByReplicationStorageClassifications(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    options?: ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOptionalParams
  ): Promise<
    ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        storageClassificationName,
        options
      },
      listByReplicationStorageClassificationsOperationSpec
    );
  }

  /**
   * Gets the details of the specified storage classification mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param storageClassificationMappingName Storage classification mapping name.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    storageClassificationMappingName: string,
    options?: ReplicationStorageClassificationMappingsGetOptionalParams
  ): Promise<ReplicationStorageClassificationMappingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        storageClassificationName,
        storageClassificationMappingName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * The operation to create a storage classification mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param storageClassificationMappingName Storage classification mapping name.
   * @param pairingInput Pairing input.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    storageClassificationMappingName: string,
    pairingInput: StorageClassificationMappingInput,
    options?: ReplicationStorageClassificationMappingsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationStorageClassificationMappingsCreateResponse>,
      ReplicationStorageClassificationMappingsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationStorageClassificationMappingsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceName,
        resourceGroupName,
        fabricName,
        storageClassificationName,
        storageClassificationMappingName,
        pairingInput,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      ReplicationStorageClassificationMappingsCreateResponse,
      OperationState<ReplicationStorageClassificationMappingsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to create a storage classification mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param storageClassificationMappingName Storage classification mapping name.
   * @param pairingInput Pairing input.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    storageClassificationMappingName: string,
    pairingInput: StorageClassificationMappingInput,
    options?: ReplicationStorageClassificationMappingsCreateOptionalParams
  ): Promise<ReplicationStorageClassificationMappingsCreateResponse> {
    const poller = await this.beginCreate(
      resourceName,
      resourceGroupName,
      fabricName,
      storageClassificationName,
      storageClassificationMappingName,
      pairingInput,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete a storage classification mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param storageClassificationMappingName Storage classification mapping name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    storageClassificationMappingName: string,
    options?: ReplicationStorageClassificationMappingsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceName,
        resourceGroupName,
        fabricName,
        storageClassificationName,
        storageClassificationMappingName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to delete a storage classification mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param storageClassificationMappingName Storage classification mapping name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    storageClassificationMappingName: string,
    options?: ReplicationStorageClassificationMappingsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceName,
      resourceGroupName,
      fabricName,
      storageClassificationName,
      storageClassificationMappingName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the storage classification mappings in the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  private _list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationStorageClassificationMappingsListOptionalParams
  ): Promise<ReplicationStorageClassificationMappingsListResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * ListByReplicationStorageClassificationsNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByReplicationStorageClassifications method.
   * @param options The options parameters.
   */
  private _listByReplicationStorageClassificationsNext(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    storageClassificationName: string,
    nextLink: string,
    options?: ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsNextOptionalParams
  ): Promise<
    ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsNextResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        storageClassificationName,
        nextLink,
        options
      },
      listByReplicationStorageClassificationsNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: ReplicationStorageClassificationMappingsListNextOptionalParams
  ): Promise<ReplicationStorageClassificationMappingsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationStorageClassificationsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.storageClassificationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings/{storageClassificationMappingName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationMapping
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.storageClassificationName,
    Parameters.storageClassificationMappingName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings/{storageClassificationMappingName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationMapping
    },
    201: {
      bodyMapper: Mappers.StorageClassificationMapping
    },
    202: {
      bodyMapper: Mappers.StorageClassificationMapping
    },
    204: {
      bodyMapper: Mappers.StorageClassificationMapping
    }
  },
  requestBody: Parameters.pairingInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.storageClassificationName,
    Parameters.storageClassificationMappingName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings/{storageClassificationMappingName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.storageClassificationName,
    Parameters.storageClassificationMappingName
  ],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationStorageClassificationMappings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReplicationStorageClassificationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationMappingCollection
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.storageClassificationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationMappingCollection
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
