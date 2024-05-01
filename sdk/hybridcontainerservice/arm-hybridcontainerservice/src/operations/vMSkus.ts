/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { VMSkus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridContainerServiceClient } from "../hybridContainerServiceClient";
import {
  VmSkuProfile,
  VMSkusListNextOptionalParams,
  VMSkusListOptionalParams,
  VMSkusListResponse,
  VMSkusListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VMSkus operations. */
export class VMSkusImpl implements VMSkus {
  private readonly client: HybridContainerServiceClient;

  /**
   * Initialize a new instance of the class VMSkus class.
   * @param client Reference to the service client
   */
  constructor(client: HybridContainerServiceClient) {
    this.client = client;
  }

  /**
   * Lists the supported VM SKUs from the underlying custom location
   * @param customLocationResourceUri The fully qualified Azure Resource manager identifier of the custom
   *                                  location resource.
   * @param options The options parameters.
   */
  public list(
    customLocationResourceUri: string,
    options?: VMSkusListOptionalParams
  ): PagedAsyncIterableIterator<VmSkuProfile> {
    const iter = this.listPagingAll(customLocationResourceUri, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          customLocationResourceUri,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    customLocationResourceUri: string,
    options?: VMSkusListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<VmSkuProfile[]> {
    let result: VMSkusListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(customLocationResourceUri, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        customLocationResourceUri,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    customLocationResourceUri: string,
    options?: VMSkusListOptionalParams
  ): AsyncIterableIterator<VmSkuProfile> {
    for await (const page of this.listPagingPage(
      customLocationResourceUri,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the supported VM SKUs from the underlying custom location
   * @param customLocationResourceUri The fully qualified Azure Resource manager identifier of the custom
   *                                  location resource.
   * @param options The options parameters.
   */
  private _list(
    customLocationResourceUri: string,
    options?: VMSkusListOptionalParams
  ): Promise<VMSkusListResponse> {
    return this.client.sendOperationRequest(
      { customLocationResourceUri, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param customLocationResourceUri The fully qualified Azure Resource manager identifier of the custom
   *                                  location resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    customLocationResourceUri: string,
    nextLink: string,
    options?: VMSkusListNextOptionalParams
  ): Promise<VMSkusListNextResponse> {
    return this.client.sendOperationRequest(
      { customLocationResourceUri, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VmSkuProfileList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.customLocationResourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VmSkuProfileList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.customLocationResourceUri
  ],
  headerParameters: [Parameters.accept],
  serializer
};
