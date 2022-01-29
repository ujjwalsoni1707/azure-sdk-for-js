/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ChapSettings,
  ChapSettingsListByDeviceOptionalParams,
  ChapSettingsGetOptionalParams,
  ChapSettingsGetResponse,
  ChapSettingsCreateOrUpdateOptionalParams,
  ChapSettingsCreateOrUpdateResponse,
  ChapSettingsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ChapSettingsOperations. */
export interface ChapSettingsOperations {
  /**
   * Retrieves all the chap settings in a device.
   * @param deviceName The name of the device.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<ChapSettings>;
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
  ): Promise<ChapSettingsGetResponse>;
  /**
   * Creates or updates the chap setting.
   * @param deviceName The device name.
   * @param chapUserName The chap user name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param chapSetting The chap setting to be added or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
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
  >;
  /**
   * Creates or updates the chap setting.
   * @param deviceName The device name.
   * @param chapUserName The chap user name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param chapSetting The chap setting to be added or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    deviceName: string,
    chapUserName: string,
    resourceGroupName: string,
    managerName: string,
    chapSetting: ChapSettings,
    options?: ChapSettingsCreateOrUpdateOptionalParams
  ): Promise<ChapSettingsCreateOrUpdateResponse>;
  /**
   * Deletes the chap setting.
   * @param deviceName The device name.
   * @param chapUserName The chap user name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDelete(
    deviceName: string,
    chapUserName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the chap setting.
   * @param deviceName The device name.
   * @param chapUserName The chap user name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    deviceName: string,
    chapUserName: string,
    resourceGroupName: string,
    managerName: string,
    options?: ChapSettingsDeleteOptionalParams
  ): Promise<void>;
}
