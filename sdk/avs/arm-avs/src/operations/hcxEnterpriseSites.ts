/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { HcxEnterpriseSites } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureVMwareSolutionAPI } from "../azureVMwareSolutionAPI";
import {
  HcxEnterpriseSite,
  HcxEnterpriseSitesListNextOptionalParams,
  HcxEnterpriseSitesListOptionalParams,
  HcxEnterpriseSitesListResponse,
  HcxEnterpriseSitesGetOptionalParams,
  HcxEnterpriseSitesGetResponse,
  HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  HcxEnterpriseSitesCreateOrUpdateResponse,
  HcxEnterpriseSitesDeleteOptionalParams,
  HcxEnterpriseSitesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing HcxEnterpriseSites operations. */
export class HcxEnterpriseSitesImpl implements HcxEnterpriseSites {
  private readonly client: AzureVMwareSolutionAPI;

  /**
   * Initialize a new instance of the class HcxEnterpriseSites class.
   * @param client Reference to the service client
   */
  constructor(client: AzureVMwareSolutionAPI) {
    this.client = client;
  }

  /**
   * List HCX Enterprise Sites in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    privateCloudName: string,
    options?: HcxEnterpriseSitesListOptionalParams
  ): PagedAsyncIterableIterator<HcxEnterpriseSite> {
    const iter = this.listPagingAll(
      resourceGroupName,
      privateCloudName,
      options
    );
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
          resourceGroupName,
          privateCloudName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    privateCloudName: string,
    options?: HcxEnterpriseSitesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<HcxEnterpriseSite[]> {
    let result: HcxEnterpriseSitesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, privateCloudName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        privateCloudName,
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
    resourceGroupName: string,
    privateCloudName: string,
    options?: HcxEnterpriseSitesListOptionalParams
  ): AsyncIterableIterator<HcxEnterpriseSite> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      privateCloudName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List HCX Enterprise Sites in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    privateCloudName: string,
    options?: HcxEnterpriseSitesListOptionalParams
  ): Promise<HcxEnterpriseSitesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, options },
      listOperationSpec
    );
  }

  /**
   * Get an HCX Enterprise Site by name in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesGetOptionalParams
  ): Promise<HcxEnterpriseSitesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update an HCX Enterprise Site in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param hcxEnterpriseSite The HCX Enterprise Site
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    hcxEnterpriseSite: HcxEnterpriseSite,
    options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams
  ): Promise<HcxEnterpriseSitesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        hcxEnterpriseSiteName,
        hcxEnterpriseSite,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete an HCX Enterprise Site in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param hcxEnterpriseSiteName Name of the HCX Enterprise Site in the private cloud
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    privateCloudName: string,
    hcxEnterpriseSiteName: string,
    options?: HcxEnterpriseSitesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    privateCloudName: string,
    nextLink: string,
    options?: HcxEnterpriseSitesListNextOptionalParams
  ): Promise<HcxEnterpriseSitesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HcxEnterpriseSiteList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HcxEnterpriseSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.hcxEnterpriseSiteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.HcxEnterpriseSite
    },
    201: {
      bodyMapper: Mappers.HcxEnterpriseSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.hcxEnterpriseSite,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.hcxEnterpriseSiteName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.hcxEnterpriseSiteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HcxEnterpriseSiteList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
