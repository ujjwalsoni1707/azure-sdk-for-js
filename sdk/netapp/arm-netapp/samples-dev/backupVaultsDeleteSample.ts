/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete the specified Backup Vault
 *
 * @summary Delete the specified Backup Vault
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/BackupVaults_Delete.json
 */
async function backupVaultsDelete() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName =
    process.env["NETAPP_RESOURCE_GROUP"] || "resourceGroup";
  const accountName = "account1";
  const backupVaultName = "backupVault1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.backupVaults.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    backupVaultName,
  );
  console.log(result);
}

async function main() {
  backupVaultsDelete();
}

main().catch(console.error);
