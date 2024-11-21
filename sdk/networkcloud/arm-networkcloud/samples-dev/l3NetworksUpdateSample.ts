/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  L3NetworkPatchParameters,
  L3NetworksUpdateOptionalParams,
  NetworkCloud,
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update tags associated with the provided layer 3 (L3) network.
 *
 * @summary Update tags associated with the provided layer 3 (L3) network.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/L3Networks_Patch.json
 */
async function patchL3Network() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const l3NetworkName = "l3NetworkName";
  const l3NetworkUpdateParameters: L3NetworkPatchParameters = {
    tags: { key1: "myvalue1", key2: "myvalue2" },
  };
  const options: L3NetworksUpdateOptionalParams = { l3NetworkUpdateParameters };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.l3Networks.update(
    resourceGroupName,
    l3NetworkName,
    options,
  );
  console.log(result);
}

async function main() {
  patchL3Network();
}

main().catch(console.error);
