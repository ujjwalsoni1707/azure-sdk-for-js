/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Deletes an existing connection monitor test with the specified name under the given subscription, resource group and peering service.
 *
 * @summary Deletes an existing connection monitor test with the specified name under the given subscription, resource group and peering service.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/DeleteConnectionMonitorTest.json
 */
const { PeeringManagementClient } = require("@azure/arm-peering");
const { DefaultAzureCredential } = require("@azure/identity");

async function deleteConnectionMonitorTest() {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringServiceName = "peeringServiceName";
  const connectionMonitorTestName = "connectionMonitorTestName";
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.connectionMonitorTests.delete(
    resourceGroupName,
    peeringServiceName,
    connectionMonitorTestName
  );
  console.log(result);
}

deleteConnectionMonitorTest().catch(console.error);
