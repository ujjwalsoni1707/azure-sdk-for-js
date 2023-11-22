/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the status of async operations of tiering cost
 *
 * @summary Gets the status of async operations of tiering cost
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-06-01/examples/TieringCost/GetTieringCostOperationStatus.json
 */
async function fetchTieringCostOperationStatus() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] || "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName = process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "gaallaRG";
  const vaultName = "gaallavaultbvtd2msi";
  const operationId = "0f48183b-0a44-4dca-aec1-bba5daab888a";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.tieringCostOperationStatus.get(
    resourceGroupName,
    vaultName,
    operationId
  );
  console.log(result);
}

async function main() {
  fetchTieringCostOperationStatus();
}

main().catch(console.error);
