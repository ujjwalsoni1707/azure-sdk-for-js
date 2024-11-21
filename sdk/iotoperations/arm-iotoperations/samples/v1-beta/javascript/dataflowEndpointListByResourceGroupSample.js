// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { IoTOperationsClient } = require("@azure/arm-iotoperations");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list DataflowEndpointResource resources by InstanceResource
 *
 * @summary list DataflowEndpointResource resources by InstanceResource
 * x-ms-original-file: 2024-09-15-preview/DataflowEndpoint_ListByResourceGroup_MaximumSet_Gen.json
 */
async function dataflowEndpointListByResourceGroup() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "F8C729F9-DF9C-4743-848F-96EE433D8E53";
  const client = new IoTOperationsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dataflowEndpoint.listByResourceGroup(
    "rgiotoperations",
    "resource-name123",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  dataflowEndpointListByResourceGroup();
}

main().catch(console.error);
