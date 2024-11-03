/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ContainerAppsBuildsGetOptionalParams,
  ContainerAppsBuildsGetResponse,
  ContainerAppsBuildsDeleteOptionalParams,
  ContainerAppsBuildsDeleteResponse,
} from "../models";

/** Interface representing a ContainerAppsBuilds. */
export interface ContainerAppsBuilds {
  /**
   * Get a Container Apps Build resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App the Build is associated.
   * @param buildName The name of a build.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    containerAppName: string,
    buildName: string,
    options?: ContainerAppsBuildsGetOptionalParams,
  ): Promise<ContainerAppsBuildsGetResponse>;
  /**
   * Delete a Container Apps Build resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App the Build is associated.
   * @param buildName The name of a build.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    containerAppName: string,
    buildName: string,
    options?: ContainerAppsBuildsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerAppsBuildsDeleteResponse>,
      ContainerAppsBuildsDeleteResponse
    >
  >;
  /**
   * Delete a Container Apps Build resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App the Build is associated.
   * @param buildName The name of a build.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    containerAppName: string,
    buildName: string,
    options?: ContainerAppsBuildsDeleteOptionalParams,
  ): Promise<ContainerAppsBuildsDeleteResponse>;
}
