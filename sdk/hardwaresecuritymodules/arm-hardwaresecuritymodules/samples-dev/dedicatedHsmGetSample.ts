/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureHSMResourceProvider } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the specified Azure dedicated HSM.
 *
 * @summary Gets the specified Azure dedicated HSM.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/preview/2024-06-30-preview/examples/DedicatedHsm_Get.json
 */
async function getADedicatedHsm() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "hsm-group";
  const name = "hsm1";
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.dedicatedHsmOperations.get(
    resourceGroupName,
    name,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets the specified Azure dedicated HSM.
 *
 * @summary Gets the specified Azure dedicated HSM.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/preview/2024-06-30-preview/examples/PaymentHsm_Get.json
 */
async function getAPaymentHsm() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "hsm-group";
  const name = "hsm1";
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.dedicatedHsmOperations.get(
    resourceGroupName,
    name,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets the specified Azure dedicated HSM.
 *
 * @summary Gets the specified Azure dedicated HSM.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/preview/2024-06-30-preview/examples/PaymentHsm_Get_With_2018-10-31Preview_Version.json
 */
async function getAPaymentHsmWith20181031PreviewApiVersion() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "hsm-group";
  const name = "hsm1";
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.dedicatedHsmOperations.get(
    resourceGroupName,
    name,
  );
  console.log(result);
}

async function main() {
  getADedicatedHsm();
  getAPaymentHsm();
  getAPaymentHsmWith20181031PreviewApiVersion();
}

main().catch(console.error);
