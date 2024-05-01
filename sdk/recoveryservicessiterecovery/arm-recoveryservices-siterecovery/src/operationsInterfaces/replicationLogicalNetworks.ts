/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  LogicalNetwork,
  ReplicationLogicalNetworksListByReplicationFabricsOptionalParams,
  ReplicationLogicalNetworksGetOptionalParams,
  ReplicationLogicalNetworksGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReplicationLogicalNetworks. */
export interface ReplicationLogicalNetworks {
  /**
   * Lists all the logical networks of the Azure Site Recovery fabric.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Server Id.
   * @param options The options parameters.
   */
  listByReplicationFabrics(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationLogicalNetworksListByReplicationFabricsOptionalParams
  ): PagedAsyncIterableIterator<LogicalNetwork>;
  /**
   * Gets the details of a logical network.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Server Id.
   * @param logicalNetworkName Logical network name.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    logicalNetworkName: string,
    options?: ReplicationLogicalNetworksGetOptionalParams
  ): Promise<ReplicationLogicalNetworksGetResponse>;
}
