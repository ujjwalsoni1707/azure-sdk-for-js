/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ChapSettingsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClient } from "../storSimpleManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ChapSettings,
  ChapSettingsListByDeviceOptionalParams,
  ChapSettingsListByDeviceResponse,
  ChapSettingsGetOptionalParams,
  ChapSettingsGetResponse,
  ChapSettingsCreateOrUpdateOptionalParams,
  ChapSettingsCreateOrUpdateResponse,
  ChapSettingsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ChapSettingsOperations operations. */
export class ChapSettingsOperationsImpl implements ChapSettingsOperations {
  private readonly client: StorSimpleManagementClient;

  /**
   * Initialize a new instance of the class ChapSettingsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimpleManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all the chap settings in a device.
   * @param deviceName The name of the device.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<ChapSettings> {
    const iter = this.listByDevicePagingAll(
      deviceName,
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
        return this.listByDevicePagingPage(
          deviceName,
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listByDevicePagingPage(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsListByDeviceOptionalParams
  ): AsyncIterableIterator<ChapSettings[]> {
    let result = await this._listByDevice(
      deviceName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listByDevicePagingAll(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsListByDeviceOptionalParams
  ): AsyncIterableIterator<ChapSettings> {
    for await (const page of this.listByDevicePagingPage(
      deviceName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the chap settings in a device.
   * @param deviceName The name of the device.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsListByDeviceOptionalParams
  ): Promise<ChapSettingsListByDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, managerName, options },
      listByDeviceOperationSpec
    );
  }

  /**
   * Returns the properties of the specified chap setting name.
   * @param deviceName The device name.
   * @param chapUserName The user name of chap to be fetched.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    chapUserName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsGetOptionalParams
  ): Promise<ChapSettingsGetResponse> {
    return this.client.sendOperationRequest(
      { deviceName, chapUserName, resourceGroupName, managerName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the chap setting.
   * @param deviceName The device name.
   * @param chapUserName The chap user name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param chapSetting The chap setting to be added or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    chapUserName: string,
    resourceGroupName: string,
    managerName: string,
    chapSetting: ChapSettings,
    options?: ChapSettingsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ChapSettingsCreateOrUpdateResponse>,
      ChapSettingsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ChapSettingsCreateOrUpdateResponse> => {
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
        deviceName,
        chapUserName,
        resourceGroupName,
        managerName,
        chapSetting,
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
   * Creates or updates the chap setting.
   * @param deviceName The device name.
   * @param chapUserName The chap user name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param chapSetting The chap setting to be added or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    chapUserName: string,
    resourceGroupName: string,
    managerName: string,
    chapSetting: ChapSettings,
    options?: ChapSettingsCreateOrUpdateOptionalParams
  ): Promise<ChapSettingsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      chapUserName,
      resourceGroupName,
      managerName,
      chapSetting,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the chap setting.
   * @param deviceName The device name.
   * @param chapUserName The chap user name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    chapUserName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsDeleteOptionalParams
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
      { deviceName, chapUserName, resourceGroupName, managerName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the chap setting.
   * @param deviceName The device name.
   * @param chapUserName The chap user name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    chapUserName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      chapUserName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/chapSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChapSettingsList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/chapSettings/{chapUserName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChapSettings
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.chapUserName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/chapSettings/{chapUserName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ChapSettings
    },
    201: {
      bodyMapper: Mappers.ChapSettings
    },
    202: {
      bodyMapper: Mappers.ChapSettings
    },
    204: {
      bodyMapper: Mappers.ChapSettings
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.chapSetting,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.chapUserName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/chapSettings/{chapUserName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.chapUserName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
