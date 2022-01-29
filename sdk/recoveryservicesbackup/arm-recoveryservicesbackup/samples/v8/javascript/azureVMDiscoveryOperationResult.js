/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Provides the result of the refresh operation triggered by the BeginRefresh operation.
 *
 * @summary Provides the result of the refresh operation triggered by the BeginRefresh operation.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-10-01/examples/Common/RefreshContainers_OperationResults.json
 */
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");

async function azureVMDiscoveryOperationResult() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName = "SwaggerTestRg";
  const fabricName = "Azure";
  const operationId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionContainerRefreshOperationResults.get(
    vaultName,
    resourceGroupName,
    fabricName,
    operationId
  );
  console.log(result);
}

azureVMDiscoveryOperationResult().catch(console.error);
