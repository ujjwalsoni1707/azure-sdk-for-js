/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AccessControlRecords } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorSimple8000SeriesManagementClient } from "../storSimple8000SeriesManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AccessControlRecord,
  AccessControlRecordsListByManagerOptionalParams,
  AccessControlRecordsListByManagerResponse,
  AccessControlRecordsGetOptionalParams,
  AccessControlRecordsGetResponse,
  AccessControlRecordsCreateOrUpdateOptionalParams,
  AccessControlRecordsCreateOrUpdateResponse,
  AccessControlRecordsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessControlRecords operations. */
export class AccessControlRecordsImpl implements AccessControlRecords {
  private readonly client: StorSimple8000SeriesManagementClient;

  /**
   * Initialize a new instance of the class AccessControlRecords class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimple8000SeriesManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all the access control records in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsListByManagerOptionalParams
  ): PagedAsyncIterableIterator<AccessControlRecord> {
    const iter = this.listByManagerPagingAll(
      resourceGroupName,
      managerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByManagerPagingPage(
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listByManagerPagingPage(
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsListByManagerOptionalParams
  ): AsyncIterableIterator<AccessControlRecord[]> {
    let result = await this._listByManager(
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listByManagerPagingAll(
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsListByManagerOptionalParams
  ): AsyncIterableIterator<AccessControlRecord> {
    for await (const page of this.listByManagerPagingPage(
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the access control records in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsListByManagerOptionalParams
  ): Promise<AccessControlRecordsListByManagerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managerName, options },
      listByManagerOperationSpec
    );
  }

  /**
   * Returns the properties of the specified access control record name.
   * @param accessControlRecordName Name of access control record to be fetched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsGetOptionalParams
  ): Promise<AccessControlRecordsGetResponse> {
    return this.client.sendOperationRequest(
      { accessControlRecordName, resourceGroupName, managerName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or Updates an access control record.
   * @param accessControlRecordName The name of the access control record.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The access control record to be added or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: AccessControlRecord,
    options?: AccessControlRecordsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccessControlRecordsCreateOrUpdateResponse>,
      AccessControlRecordsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccessControlRecordsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      {
        accessControlRecordName,
        resourceGroupName,
        managerName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or Updates an access control record.
   * @param accessControlRecordName The name of the access control record.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The access control record to be added or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: AccessControlRecord,
    options?: AccessControlRecordsCreateOrUpdateOptionalParams
  ): Promise<AccessControlRecordsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      accessControlRecordName,
      resourceGroupName,
      managerName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the access control record.
   * @param accessControlRecordName The name of the access control record to delete.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDelete(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { accessControlRecordName, resourceGroupName, managerName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the access control record.
   * @param accessControlRecordName The name of the access control record to delete.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    accessControlRecordName: string,
    resourceGroupName: string,
    managerName: string,
    options?: AccessControlRecordsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      accessControlRecordName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByManagerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlRecordList
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords/{accessControlRecordName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlRecord
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.accessControlRecordName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords/{accessControlRecordName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccessControlRecord
    },
    201: {
      bodyMapper: Mappers.AccessControlRecord
    },
    202: {
      bodyMapper: Mappers.AccessControlRecord
    },
    204: {
      bodyMapper: Mappers.AccessControlRecord
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.accessControlRecordName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/accessControlRecords/{accessControlRecordName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.accessControlRecordName
  ],
  serializer
};
