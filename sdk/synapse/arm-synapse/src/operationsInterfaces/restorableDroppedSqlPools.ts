/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RestorableDroppedSqlPool,
  RestorableDroppedSqlPoolsListByWorkspaceOptionalParams,
  RestorableDroppedSqlPoolsGetOptionalParams,
  RestorableDroppedSqlPoolsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RestorableDroppedSqlPools. */
export interface RestorableDroppedSqlPools {
  /**
   * Gets a list of deleted Sql pools that can be restored
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: RestorableDroppedSqlPoolsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<RestorableDroppedSqlPool>;
  /**
   * Gets a deleted sql pool that can be restored
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param restorableDroppedSqlPoolId The id of the deleted Sql Pool in the form of
   *                                   sqlPoolName,deletionTimeInFileTimeFormat
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    restorableDroppedSqlPoolId: string,
    options?: RestorableDroppedSqlPoolsGetOptionalParams
  ): Promise<RestorableDroppedSqlPoolsGetResponse>;
}
