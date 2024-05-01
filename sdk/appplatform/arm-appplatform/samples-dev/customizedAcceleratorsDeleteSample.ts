/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppPlatformManagementClient } from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete the customized accelerator.
 *
 * @summary Delete the customized accelerator.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2023-03-01-preview/examples/CustomizedAccelerators_Delete.json
 */
async function customizedAcceleratorsDelete() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const applicationAcceleratorName = "default";
  const customizedAcceleratorName = "acc-name";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.customizedAccelerators.beginDeleteAndWait(
    resourceGroupName,
    serviceName,
    applicationAcceleratorName,
    customizedAcceleratorName
  );
  console.log(result);
}

async function main() {
  customizedAcceleratorsDelete();
}

main().catch(console.error);
