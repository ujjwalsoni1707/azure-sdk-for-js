/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DataProtectionClient } = require("@azure/arm-dataprotection");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @summary Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/preview/2022-11-01-preview/examples/ResourceGuardCRUD/GetDefaultUpdateProtectedItemRequests.json
 */
async function getDefaultOperationsRequestObject() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] || "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const resourceGroupName = process.env["DATAPROTECTION_RESOURCE_GROUP"] || "SampleResourceGroup";
  const resourceGuardsName = "swaggerExample";
  const requestName = "default";
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.resourceGuards.getDefaultUpdateProtectedItemRequestsObject(
    resourceGroupName,
    resourceGuardsName,
    requestName
  );
  console.log(result);
}

async function main() {
  getDefaultOperationsRequestObject();
}

main().catch(console.error);
