/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a Public IP Block by id in a private cloud workload network.
 *
 * @summary Create a Public IP Block by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/WorkloadNetworks_CreatePublicIPs.json
 */
async function workloadNetworksCreatePublicIP() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const publicIPId = "publicIP1";
  const workloadNetworkPublicIP = {
    displayName: "publicIP1",
    numberOfPublicIPs: 32,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginCreatePublicIPAndWait(
    resourceGroupName,
    privateCloudName,
    publicIPId,
    workloadNetworkPublicIP
  );
  console.log(result);
}

async function main() {
  workloadNetworksCreatePublicIP();
}

main().catch(console.error);
