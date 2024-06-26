/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ScVmm } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Implements VirtualMachineTemplate GET method.
 *
 * @summary Implements VirtualMachineTemplate GET method.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualMachineTemplates_Get_MaximumSet_Gen.json
 */
async function virtualMachineTemplatesGetMaximumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] || "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const virtualMachineTemplateName = "4";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.virtualMachineTemplates.get(
    resourceGroupName,
    virtualMachineTemplateName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Implements VirtualMachineTemplate GET method.
 *
 * @summary Implements VirtualMachineTemplate GET method.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualMachineTemplates_Get_MinimumSet_Gen.json
 */
async function virtualMachineTemplatesGetMinimumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] || "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const virtualMachineTemplateName = "m";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.virtualMachineTemplates.get(
    resourceGroupName,
    virtualMachineTemplateName,
  );
  console.log(result);
}

async function main() {
  virtualMachineTemplatesGetMaximumSet();
  virtualMachineTemplatesGetMinimumSet();
}

main().catch(console.error);
