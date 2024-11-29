/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AgentPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkCloud } from "../networkCloud";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  AgentPool,
  AgentPoolsListByKubernetesClusterNextOptionalParams,
  AgentPoolsListByKubernetesClusterOptionalParams,
  AgentPoolsListByKubernetesClusterResponse,
  AgentPoolsGetOptionalParams,
  AgentPoolsGetResponse,
  AgentPoolsCreateOrUpdateOptionalParams,
  AgentPoolsCreateOrUpdateResponse,
  AgentPoolsDeleteOptionalParams,
  AgentPoolsDeleteResponse,
  AgentPoolsUpdateOptionalParams,
  AgentPoolsUpdateResponse,
  AgentPoolsListByKubernetesClusterNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AgentPools operations. */
export class AgentPoolsImpl implements AgentPools {
  private readonly client: NetworkCloud;

  /**
   * Initialize a new instance of the class AgentPools class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkCloud) {
    this.client = client;
  }

  /**
   * Get a list of agent pools for the provided Kubernetes cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param options The options parameters.
   */
  public listByKubernetesCluster(
    resourceGroupName: string,
    kubernetesClusterName: string,
    options?: AgentPoolsListByKubernetesClusterOptionalParams,
  ): PagedAsyncIterableIterator<AgentPool> {
    const iter = this.listByKubernetesClusterPagingAll(
      resourceGroupName,
      kubernetesClusterName,
      options,
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
        return this.listByKubernetesClusterPagingPage(
          resourceGroupName,
          kubernetesClusterName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByKubernetesClusterPagingPage(
    resourceGroupName: string,
    kubernetesClusterName: string,
    options?: AgentPoolsListByKubernetesClusterOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AgentPool[]> {
    let result: AgentPoolsListByKubernetesClusterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByKubernetesCluster(
        resourceGroupName,
        kubernetesClusterName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByKubernetesClusterNext(
        resourceGroupName,
        kubernetesClusterName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByKubernetesClusterPagingAll(
    resourceGroupName: string,
    kubernetesClusterName: string,
    options?: AgentPoolsListByKubernetesClusterOptionalParams,
  ): AsyncIterableIterator<AgentPool> {
    for await (const page of this.listByKubernetesClusterPagingPage(
      resourceGroupName,
      kubernetesClusterName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of agent pools for the provided Kubernetes cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param options The options parameters.
   */
  private _listByKubernetesCluster(
    resourceGroupName: string,
    kubernetesClusterName: string,
    options?: AgentPoolsListByKubernetesClusterOptionalParams,
  ): Promise<AgentPoolsListByKubernetesClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, kubernetesClusterName, options },
      listByKubernetesClusterOperationSpec,
    );
  }

  /**
   * Get properties of the provided Kubernetes cluster agent pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param agentPoolName The name of the Kubernetes cluster agent pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    kubernetesClusterName: string,
    agentPoolName: string,
    options?: AgentPoolsGetOptionalParams,
  ): Promise<AgentPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, kubernetesClusterName, agentPoolName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a new Kubernetes cluster agent pool or update the properties of the existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param agentPoolName The name of the Kubernetes cluster agent pool.
   * @param agentPoolParameters The request body.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    kubernetesClusterName: string,
    agentPoolName: string,
    agentPoolParameters: AgentPool,
    options?: AgentPoolsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AgentPoolsCreateOrUpdateResponse>,
      AgentPoolsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AgentPoolsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        kubernetesClusterName,
        agentPoolName,
        agentPoolParameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      AgentPoolsCreateOrUpdateResponse,
      OperationState<AgentPoolsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a new Kubernetes cluster agent pool or update the properties of the existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param agentPoolName The name of the Kubernetes cluster agent pool.
   * @param agentPoolParameters The request body.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    kubernetesClusterName: string,
    agentPoolName: string,
    agentPoolParameters: AgentPool,
    options?: AgentPoolsCreateOrUpdateOptionalParams,
  ): Promise<AgentPoolsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      kubernetesClusterName,
      agentPoolName,
      agentPoolParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the provided Kubernetes cluster agent pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param agentPoolName The name of the Kubernetes cluster agent pool.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    kubernetesClusterName: string,
    agentPoolName: string,
    options?: AgentPoolsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AgentPoolsDeleteResponse>,
      AgentPoolsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AgentPoolsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        kubernetesClusterName,
        agentPoolName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      AgentPoolsDeleteResponse,
      OperationState<AgentPoolsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the provided Kubernetes cluster agent pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param agentPoolName The name of the Kubernetes cluster agent pool.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    kubernetesClusterName: string,
    agentPoolName: string,
    options?: AgentPoolsDeleteOptionalParams,
  ): Promise<AgentPoolsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      kubernetesClusterName,
      agentPoolName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch the properties of the provided Kubernetes cluster agent pool, or update the tags associated
   * with the Kubernetes cluster agent pool. Properties and tag updates can be done independently.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param agentPoolName The name of the Kubernetes cluster agent pool.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    kubernetesClusterName: string,
    agentPoolName: string,
    options?: AgentPoolsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AgentPoolsUpdateResponse>,
      AgentPoolsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AgentPoolsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        kubernetesClusterName,
        agentPoolName,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      AgentPoolsUpdateResponse,
      OperationState<AgentPoolsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch the properties of the provided Kubernetes cluster agent pool, or update the tags associated
   * with the Kubernetes cluster agent pool. Properties and tag updates can be done independently.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param agentPoolName The name of the Kubernetes cluster agent pool.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    kubernetesClusterName: string,
    agentPoolName: string,
    options?: AgentPoolsUpdateOptionalParams,
  ): Promise<AgentPoolsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      kubernetesClusterName,
      agentPoolName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByKubernetesClusterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param nextLink The nextLink from the previous successful call to the ListByKubernetesCluster
   *                 method.
   * @param options The options parameters.
   */
  private _listByKubernetesClusterNext(
    resourceGroupName: string,
    kubernetesClusterName: string,
    nextLink: string,
    options?: AgentPoolsListByKubernetesClusterNextOptionalParams,
  ): Promise<AgentPoolsListByKubernetesClusterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, kubernetesClusterName, nextLink, options },
      listByKubernetesClusterNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByKubernetesClusterOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.kubernetesClusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.kubernetesClusterName,
    Parameters.agentPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool,
    },
    201: {
      bodyMapper: Mappers.AgentPool,
    },
    202: {
      bodyMapper: Mappers.AgentPool,
    },
    204: {
      bodyMapper: Mappers.AgentPool,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.agentPoolParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.kubernetesClusterName,
    Parameters.agentPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResult,
    },
    201: {
      bodyMapper: Mappers.OperationStatusResult,
    },
    202: {
      bodyMapper: Mappers.OperationStatusResult,
    },
    204: {
      bodyMapper: Mappers.OperationStatusResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.kubernetesClusterName,
    Parameters.agentPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool,
    },
    201: {
      bodyMapper: Mappers.AgentPool,
    },
    202: {
      bodyMapper: Mappers.AgentPool,
    },
    204: {
      bodyMapper: Mappers.AgentPool,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.agentPoolUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.kubernetesClusterName,
    Parameters.agentPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByKubernetesClusterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.kubernetesClusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
