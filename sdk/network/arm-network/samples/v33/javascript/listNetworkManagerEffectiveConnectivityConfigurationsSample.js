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
 * This sample demonstrates how to List all effective connectivity configurations applied on a virtual network.
 *
 * @summary List all effective connectivity configurations applied on a virtual network.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-06-01/examples/NetworkManagerEffectiveConnectivityConfigurationsList.json
 */
async function listEffectiveConnectivityConfiguration() {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "myResourceGroup";
  const virtualNetworkName = "testVirtualNetwork";
  const parameters = { skipToken: "FakeSkipTokenCode" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.listNetworkManagerEffectiveConnectivityConfigurations(
    resourceGroupName,
    virtualNetworkName,
    parameters,
  );
  console.log(result);
}

async function main() {
  listEffectiveConnectivityConfiguration();
}

main().catch(console.error);
