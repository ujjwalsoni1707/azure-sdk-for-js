/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerAppsAPIClient } from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the diagnostics data for a Managed Environment used to host container apps.
 *
 * @summary Get the diagnostics data for a Managed Environment used to host container apps.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/ManagedEnvironmentDiagnostics_Get.json
 */
async function getDiagnosticDataForAManagedEnvironments() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "f07f3711-b45e-40fe-a941-4e6d93f851e6";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "mikono-workerapp-test-rg";
  const environmentName = "mikonokubeenv";
  const detectorName = "ManagedEnvAvailabilityMetrics";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.managedEnvironmentDiagnostics.getDetector(
    resourceGroupName,
    environmentName,
    detectorName,
  );
  console.log(result);
}

async function main() {
  getDiagnosticDataForAManagedEnvironments();
}

main().catch(console.error);
