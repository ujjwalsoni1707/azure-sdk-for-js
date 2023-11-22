/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Description for Get available SKUs for scaling a multi-role pool.
 *
 * @summary Description for Get available SKUs for scaling a multi-role pool.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-01-01/examples/AppServiceEnvironments_ListMultiRolePoolSkus.json
 */
async function getAvailableSkUsForScalingAMultiRolePool() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "test-rg";
  const name = "test-ase";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.appServiceEnvironments.listMultiRolePoolSkus(
    resourceGroupName,
    name
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getAvailableSkUsForScalingAMultiRolePool();
}

main().catch(console.error);
