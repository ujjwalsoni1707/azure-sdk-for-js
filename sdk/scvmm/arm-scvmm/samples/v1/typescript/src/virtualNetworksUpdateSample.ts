/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VirtualNetworkTagsUpdate, ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates the VirtualNetworks resource.
 *
 * @summary Updates the VirtualNetworks resource.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualNetworks_Update_MaximumSet_Gen.json
 */
async function virtualNetworksUpdateMaximumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] ||
    "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const virtualNetworkName = "S";
  const properties: VirtualNetworkTagsUpdate = { tags: { key9516: "oxduo" } };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.virtualNetworks.beginUpdateAndWait(
    resourceGroupName,
    virtualNetworkName,
    properties,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates the VirtualNetworks resource.
 *
 * @summary Updates the VirtualNetworks resource.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualNetworks_Update_MinimumSet_Gen.json
 */
async function virtualNetworksUpdateMinimumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] ||
    "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const virtualNetworkName = "-";
  const properties: VirtualNetworkTagsUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.virtualNetworks.beginUpdateAndWait(
    resourceGroupName,
    virtualNetworkName,
    properties,
  );
  console.log(result);
}

async function main() {
  virtualNetworksUpdateMaximumSet();
  virtualNetworksUpdateMinimumSet();
}

main().catch(console.error);
