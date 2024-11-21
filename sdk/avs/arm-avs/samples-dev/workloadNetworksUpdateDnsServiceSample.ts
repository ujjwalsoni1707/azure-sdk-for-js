/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  WorkloadNetworkDnsService,
  AzureVMwareSolutionAPI,
} from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a WorkloadNetworkDnsService
 *
 * @summary Update a WorkloadNetworkDnsService
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/WorkloadNetworks_UpdateDnsService.json
 */
async function workloadNetworksUpdateDnsService() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const dnsServiceId = "dnsService1";
  const workloadNetworkDnsService: WorkloadNetworkDnsService = {
    defaultDnsZone: "defaultDnsZone1",
    displayName: "dnsService1",
    dnsServiceIp: "5.5.5.5",
    fqdnZones: ["fqdnZone1"],
    logLevel: "INFO",
    revision: 1,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginUpdateDnsServiceAndWait(
    resourceGroupName,
    privateCloudName,
    dnsServiceId,
    workloadNetworkDnsService,
  );
  console.log(result);
}

async function main() {
  workloadNetworksUpdateDnsService();
}

main().catch(console.error);
