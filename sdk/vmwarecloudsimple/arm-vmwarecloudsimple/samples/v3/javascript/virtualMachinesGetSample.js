/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { VMwareCloudSimple } = require("@azure/arm-vmwarecloudsimple");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get virtual machine
 *
 * @summary Get virtual machine
 * x-ms-original-file: specification/vmwarecloudsimple/resource-manager/Microsoft.VMwareCloudSimple/stable/2019-04-01/examples/GetVirtualMachine.json
 */
async function getVirtualMachine() {
  const subscriptionId = process.env["VMWARECLOUDSIMPLE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["VMWARECLOUDSIMPLE_RESOURCE_GROUP"] || "myResourceGroup";
  const virtualMachineName = "myVirtualMachine";
  const credential = new DefaultAzureCredential();
  const client = new VMwareCloudSimple(credential, subscriptionId);
  const result = await client.virtualMachines.get(resourceGroupName, virtualMachineName);
  console.log(result);
}

async function main() {
  getVirtualMachine();
}

main().catch(console.error);
