/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureSphereManagementClient } = require("@azure/arm-sphere");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @summary Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 * x-ms-original-file: specification/sphere/resource-manager/Microsoft.AzureSphere/preview/2022-09-01-preview/examples/DeleteDeviceGroup.json
 */
async function deviceGroupsDelete() {
  const subscriptionId =
    process.env["SPHERE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["SPHERE_RESOURCE_GROUP"] || "MyResourceGroup1";
  const catalogName = "MyCatalog1";
  const productName = "MyProduct1";
  const deviceGroupName = "MyDeviceGroup1";
  const credential = new DefaultAzureCredential();
  const client = new AzureSphereManagementClient(credential, subscriptionId);
  const result = await client.deviceGroups.beginDeleteAndWait(
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName
  );
  console.log(result);
}

async function main() {
  deviceGroupsDelete();
}

main().catch(console.error);