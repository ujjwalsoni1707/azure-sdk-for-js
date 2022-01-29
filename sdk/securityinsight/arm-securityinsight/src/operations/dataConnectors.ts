/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DataConnectors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  DataConnectorUnion,
  DataConnectorsListNextOptionalParams,
  DataConnectorsListOptionalParams,
  DataConnectorsListResponse,
  DataConnectorsGetOptionalParams,
  DataConnectorsGetResponse,
  DataConnectorsCreateOrUpdateOptionalParams,
  DataConnectorsCreateOrUpdateResponse,
  DataConnectorsDeleteOptionalParams,
  DataConnectorConnectBody,
  DataConnectorsConnectOptionalParams,
  DataConnectorsDisconnectOptionalParams,
  DataConnectorsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataConnectors operations. */
export class DataConnectorsImpl implements DataConnectors {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class DataConnectors class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Gets all data connectors.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: DataConnectorsListOptionalParams
  ): PagedAsyncIterableIterator<DataConnectorUnion> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, workspaceName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: DataConnectorsListOptionalParams
  ): AsyncIterableIterator<DataConnectorUnion[]> {
    let result = await this._list(resourceGroupName, workspaceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: DataConnectorsListOptionalParams
  ): AsyncIterableIterator<DataConnectorUnion> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all data connectors.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: DataConnectorsListOptionalParams
  ): Promise<DataConnectorsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a data connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    dataConnectorId: string,
    options?: DataConnectorsGetOptionalParams
  ): Promise<DataConnectorsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dataConnectorId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the data connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param dataConnector The data connector
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    dataConnectorId: string,
    dataConnector: DataConnectorUnion,
    options?: DataConnectorsCreateOrUpdateOptionalParams
  ): Promise<DataConnectorsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        dataConnectorId,
        dataConnector,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete the data connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    dataConnectorId: string,
    options?: DataConnectorsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dataConnectorId, options },
      deleteOperationSpec
    );
  }

  /**
   * Connects a data connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param connectBody The data connector
   * @param options The options parameters.
   */
  connect(
    resourceGroupName: string,
    workspaceName: string,
    dataConnectorId: string,
    connectBody: DataConnectorConnectBody,
    options?: DataConnectorsConnectOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        dataConnectorId,
        connectBody,
        options
      },
      connectOperationSpec
    );
  }

  /**
   * Disconnect a data connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param options The options parameters.
   */
  disconnect(
    resourceGroupName: string,
    workspaceName: string,
    dataConnectorId: string,
    options?: DataConnectorsDisconnectOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dataConnectorId, options },
      disconnectOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: DataConnectorsListNextOptionalParams
  ): Promise<DataConnectorsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectorList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnector
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataConnectorId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnector
    },
    201: {
      bodyMapper: Mappers.DataConnector
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.dataConnector,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataConnectorId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataConnectorId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const connectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}/connect",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.connectBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataConnectorId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const disconnectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}/disconnect",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataConnectorId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectorList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
