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
 * This sample demonstrates how to Lists all available response headers.
 *
 * @summary Lists all available response headers.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-03-01/examples/ApplicationGatewayAvailableResponseHeadersGet.json
 */
async function getAvailableResponseHeaders() {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] || "72f988bf-86f1-41af-91ab-2d7cd0dddd4";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.applicationGateways.listAvailableResponseHeaders();
  console.log(result);
}

async function main() {
  getAvailableResponseHeaders();
}

main().catch(console.error);
