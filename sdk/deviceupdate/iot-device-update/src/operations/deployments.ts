/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SpanStatusCode } from "@azure/core-tracing";
import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeviceUpdateClientContext } from "../deviceUpdateClientContext";
import {
  Deployment,
  DeploymentsGetAllDeploymentsNextOptionalParams,
  DeploymentsGetAllDeploymentsOptionalParams,
  DeploymentDeviceState,
  DeploymentsGetDeploymentDevicesNextOptionalParams,
  DeploymentsGetDeploymentDevicesOptionalParams,
  DeploymentsGetAllDeploymentsResponse,
  DeploymentsGetDeploymentResponse,
  DeploymentsCreateOrUpdateDeploymentResponse,
  DeploymentsGetDeploymentStatusResponse,
  DeploymentsGetDeploymentDevicesResponse,
  DeploymentsCancelDeploymentResponse,
  DeploymentsRetryDeploymentResponse,
  DeploymentsGetAllDeploymentsNextResponse,
  DeploymentsGetDeploymentDevicesNextResponse,
} from "../models";

/** Class representing a Deployments. */
export class Deployments {
  private readonly client: DeviceUpdateClientContext;

  /**
   * Initialize a new instance of the class Deployments class.
   * @param client Reference to the service client
   */
  constructor(client: DeviceUpdateClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of deployments.
   * @param options The options parameters.
   */
  public listAllDeployments(
    options?: DeploymentsGetAllDeploymentsOptionalParams
  ): PagedAsyncIterableIterator<Deployment> {
    const iter = this.getAllDeploymentsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getAllDeploymentsPagingPage(options);
      },
    };
  }

  private async *getAllDeploymentsPagingPage(
    options?: DeploymentsGetAllDeploymentsOptionalParams
  ): AsyncIterableIterator<Deployment[]> {
    let result = await this._getAllDeployments(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getAllDeploymentsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getAllDeploymentsPagingAll(
    options?: DeploymentsGetAllDeploymentsOptionalParams
  ): AsyncIterableIterator<Deployment> {
    for await (const page of this.getAllDeploymentsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of devices in a deployment along with their state. Useful for getting a list of failed
   * devices.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  public listDeploymentDevices(
    deploymentId: string,
    options?: DeploymentsGetDeploymentDevicesOptionalParams
  ): PagedAsyncIterableIterator<DeploymentDeviceState> {
    const iter = this.getDeploymentDevicesPagingAll(deploymentId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getDeploymentDevicesPagingPage(deploymentId, options);
      },
    };
  }

  private async *getDeploymentDevicesPagingPage(
    deploymentId: string,
    options?: DeploymentsGetDeploymentDevicesOptionalParams
  ): AsyncIterableIterator<DeploymentDeviceState[]> {
    let result = await this._getDeploymentDevices(deploymentId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getDeploymentDevicesNext(deploymentId, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getDeploymentDevicesPagingAll(
    deploymentId: string,
    options?: DeploymentsGetDeploymentDevicesOptionalParams
  ): AsyncIterableIterator<DeploymentDeviceState> {
    for await (const page of this.getDeploymentDevicesPagingPage(deploymentId, options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of deployments.
   * @param options The options parameters.
   */
  private async _getAllDeployments(
    options?: DeploymentsGetAllDeploymentsOptionalParams
  ): Promise<DeploymentsGetAllDeploymentsResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getAllDeployments",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getAllDeploymentsOperationSpec
      );
      return result as DeploymentsGetAllDeploymentsResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Gets the properties of a deployment.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  async getDeployment(
    deploymentId: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentsGetDeploymentResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-getDeployment",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      deploymentId,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getDeploymentOperationSpec
      );
      return result as DeploymentsGetDeploymentResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a deployment.
   * @param deploymentId Deployment identifier.
   * @param deployment The deployment properties.
   * @param options The options parameters.
   */
  async createOrUpdateDeployment(
    deploymentId: string,
    deployment: Deployment,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentsCreateOrUpdateDeploymentResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-createOrUpdateDeployment",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      deploymentId,
      deployment,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        createOrUpdateDeploymentOperationSpec
      );
      return result as DeploymentsCreateOrUpdateDeploymentResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a deployment.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  async deleteDeployment(
    deploymentId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-deleteDeployment",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      deploymentId,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        deleteDeploymentOperationSpec
      );
      return result as coreHttp.RestResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Gets the status of a deployment including a breakdown of how many devices in the deployment are in
   * progress, completed, or failed.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  async getDeploymentStatus(
    deploymentId: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentsGetDeploymentStatusResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-getDeploymentStatus",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      deploymentId,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getDeploymentStatusOperationSpec
      );
      return result as DeploymentsGetDeploymentStatusResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Gets a list of devices in a deployment along with their state. Useful for getting a list of failed
   * devices.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  private async _getDeploymentDevices(
    deploymentId: string,
    options?: DeploymentsGetDeploymentDevicesOptionalParams
  ): Promise<DeploymentsGetDeploymentDevicesResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getDeploymentDevices",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      deploymentId,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getDeploymentDevicesOperationSpec
      );
      return result as DeploymentsGetDeploymentDevicesResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Cancels a deployment.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  async cancelDeployment(
    deploymentId: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentsCancelDeploymentResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-cancelDeployment",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      deploymentId,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        cancelDeploymentOperationSpec
      );
      return result as DeploymentsCancelDeploymentResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Retries a deployment with failed devices.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  async retryDeployment(
    deploymentId: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentsRetryDeploymentResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-retryDeployment",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      deploymentId,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        retryDeploymentOperationSpec
      );
      return result as DeploymentsRetryDeploymentResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetAllDeploymentsNext
   * @param nextLink The nextLink from the previous successful call to the GetAllDeployments method.
   * @param options The options parameters.
   */
  private async _getAllDeploymentsNext(
    nextLink: string,
    options?: DeploymentsGetAllDeploymentsNextOptionalParams
  ): Promise<DeploymentsGetAllDeploymentsNextResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getAllDeploymentsNext",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getAllDeploymentsNextOperationSpec
      );
      return result as DeploymentsGetAllDeploymentsNextResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetDeploymentDevicesNext
   * @param deploymentId Deployment identifier.
   * @param nextLink The nextLink from the previous successful call to the GetDeploymentDevices method.
   * @param options The options parameters.
   */
  private async _getDeploymentDevicesNext(
    deploymentId: string,
    nextLink: string,
    options?: DeploymentsGetDeploymentDevicesNextOptionalParams
  ): Promise<DeploymentsGetDeploymentDevicesNextResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getDeploymentDevicesNext",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      deploymentId,
      nextLink,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getDeploymentDevicesNextOperationSpec
      );
      return result as DeploymentsGetDeploymentDevicesNextResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getAllDeploymentsOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/management/deployments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfDeployments,
    },
  },
  queryParameters: [Parameters.filter],
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getDeploymentOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment,
    },
    404: {
      isError: true,
    },
  },
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.deploymentId],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateDeploymentOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment,
    },
    404: {
      isError: true,
    },
  },
  requestBody: Parameters.deployment,
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.deploymentId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteDeploymentOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    404: {
      isError: true,
    },
  },
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.deploymentId],
  serializer,
};
const getDeploymentStatusOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}/status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentStatus,
    },
    404: {
      isError: true,
    },
  },
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.deploymentId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getDeploymentDevicesOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}/devicestates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfDeploymentDeviceStates,
    },
    404: {
      isError: true,
    },
  },
  queryParameters: [Parameters.filter],
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.deploymentId],
  headerParameters: [Parameters.accept],
  serializer,
};
const cancelDeploymentOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment,
    },
    404: {
      isError: true,
    },
  },
  queryParameters: [Parameters.action1],
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.deploymentId],
  headerParameters: [Parameters.accept],
  serializer,
};
const retryDeploymentOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/management/deployments/{deploymentId}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment,
    },
    404: {
      isError: true,
    },
  },
  queryParameters: [Parameters.action2],
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.deploymentId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllDeploymentsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfDeployments,
    },
  },
  queryParameters: [Parameters.filter],
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
const getDeploymentDevicesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfDeploymentDeviceStates,
    },
    404: {
      isError: true,
    },
  },
  queryParameters: [Parameters.filter],
  urlParameters: [
    Parameters.accountEndpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.deploymentId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
