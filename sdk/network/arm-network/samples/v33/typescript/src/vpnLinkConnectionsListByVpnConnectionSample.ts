/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
 *
 * @summary Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-06-01/examples/VpnSiteLinkConnectionList.json
 */
async function vpnSiteLinkConnectionList() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const gatewayName = "gateway1";
  const connectionName = "vpnConnection1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.vpnLinkConnections.listByVpnConnection(
    resourceGroupName,
    gatewayName,
    connectionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  vpnSiteLinkConnectionList();
}

main().catch(console.error);
