/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ManagementAssociations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationsManagementClient } from "../operationsManagementClient";
import {
  ManagementAssociationsListBySubscriptionOptionalParams,
  ManagementAssociationsListBySubscriptionResponse,
  ManagementAssociation,
  ManagementAssociationsCreateOrUpdateOptionalParams,
  ManagementAssociationsCreateOrUpdateResponse,
  ManagementAssociationsDeleteOptionalParams,
  ManagementAssociationsGetOptionalParams,
  ManagementAssociationsGetResponse
} from "../models";

/** Class containing ManagementAssociations operations. */
export class ManagementAssociationsImpl implements ManagementAssociations {
  private readonly client: OperationsManagementClient;

  /**
   * Initialize a new instance of the class ManagementAssociations class.
   * @param client Reference to the service client
   */
  constructor(client: OperationsManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the ManagementAssociations list.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ManagementAssociationsListBySubscriptionOptionalParams
  ): Promise<ManagementAssociationsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Creates or updates the ManagementAssociation.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param managementAssociationName User ManagementAssociation Name.
   * @param parameters The parameters required to create ManagementAssociation extension.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managementAssociationName: string,
    parameters: ManagementAssociation,
    options?: ManagementAssociationsCreateOrUpdateOptionalParams
  ): Promise<ManagementAssociationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managementAssociationName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the ManagementAssociation in the subscription.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param managementAssociationName User ManagementAssociation Name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    managementAssociationName: string,
    options?: ManagementAssociationsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managementAssociationName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves the user ManagementAssociation.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param managementAssociationName User ManagementAssociation Name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managementAssociationName: string,
    options?: ManagementAssociationsGetOptionalParams
  ): Promise<ManagementAssociationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managementAssociationName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.OperationsManagement/ManagementAssociations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementAssociationPropertiesList
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.OperationsManagement/ManagementAssociations/{managementAssociationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementAssociation
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.providerName,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.managementAssociationName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.OperationsManagement/ManagementAssociations/{managementAssociationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.providerName,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.managementAssociationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.OperationsManagement/ManagementAssociations/{managementAssociationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementAssociation
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.providerName,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.managementAssociationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
