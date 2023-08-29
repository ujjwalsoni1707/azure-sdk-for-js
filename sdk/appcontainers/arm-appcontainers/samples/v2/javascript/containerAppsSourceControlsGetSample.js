/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a SourceControl of a Container App.
 *
 * @summary Get a SourceControl of a Container App.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/stable/2023-05-01/examples/SourceControls_Get.json
 */
async function getContainerAppSourceControl() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] || "651f8027-33e8-4ec4-97b4-f6e9f3dc8744";
  const resourceGroupName = process.env["APPCONTAINERS_RESOURCE_GROUP"] || "workerapps-rg-xj";
  const containerAppName = "testcanadacentral";
  const sourceControlName = "current";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerAppsSourceControls.get(
    resourceGroupName,
    containerAppName,
    sourceControlName
  );
  console.log(result);
}

async function main() {
  getContainerAppSourceControl();
}

main().catch(console.error);