/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PercentileMetric,
  PercentileListMetricsOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Percentile. */
export interface Percentile {
  /**
   * Retrieves the metrics determined by the given filter for the given database account. This url is
   * only for PBS and Replication Latency data
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  listMetrics(
    resourceGroupName: string,
    accountName: string,
    filter: string,
    options?: PercentileListMetricsOptionalParams
  ): PagedAsyncIterableIterator<PercentileMetric>;
}
