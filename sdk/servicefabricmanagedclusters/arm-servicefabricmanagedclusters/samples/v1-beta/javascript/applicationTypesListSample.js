/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const {
  ServiceFabricManagedClustersManagementClient,
} = require("@azure/arm-servicefabricmanagedclusters");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets all application type name resources created or in the process of being created in the Service Fabric managed cluster resource.
 *
 * @summary Gets all application type name resources created or in the process of being created in the Service Fabric managed cluster resource.
 * x-ms-original-file: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/preview/2024-06-01-preview/examples/ApplicationTypeNameListOperation_example.json
 */
async function getAListOfApplicationTypeNameResources() {
  const subscriptionId =
    process.env["SERVICEFABRICMANAGEDCLUSTERS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["SERVICEFABRICMANAGEDCLUSTERS_RESOURCE_GROUP"] || "resRg";
  const clusterName = "myCluster";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagedClustersManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.applicationTypes.list(resourceGroupName, clusterName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getAListOfApplicationTypeNameResources();
}

main().catch(console.error);
