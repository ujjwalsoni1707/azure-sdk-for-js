/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates a network watcher tags.
 *
 * @summary Updates a network watcher tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-06-01/examples/NetworkWatcherUpdateTags.json
 */
async function updateNetworkWatcherTags() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkWatcherName = "nw1";
  const parameters = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkWatchers.updateTags(
    resourceGroupName,
    networkWatcherName,
    parameters,
  );
  console.log(result);
}

async function main() {
  updateNetworkWatcherTags();
}

main().catch(console.error);
