/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  MetricDefinition,
  MetricDefinitionsListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MetricDefinitions. */
export interface MetricDefinitions {
  /**
   * Lists the metric definitions for the resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: MetricDefinitionsListOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition>;
}
