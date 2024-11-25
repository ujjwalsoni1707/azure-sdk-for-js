/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type {
  IntegrationRuntimesListOptionalParams,
  IntegrationRuntimesListResponse,
  IntegrationRuntimesGetOptionalParams,
  IntegrationRuntimesGetResponse,
} from "../models/index.js";

/** Interface representing a IntegrationRuntimes. */
export interface IntegrationRuntimes {
  /**
   * List Integration Runtimes
   * @param options - The options parameters.
   */
  list(options?: IntegrationRuntimesListOptionalParams): Promise<IntegrationRuntimesListResponse>;
  /**
   * Get Integration Runtime
   * @param integrationRuntimeName - The Integration Runtime name
   * @param options - The options parameters.
   */
  get(
    integrationRuntimeName: string,
    options?: IntegrationRuntimesGetOptionalParams,
  ): Promise<IntegrationRuntimesGetResponse>;
}
