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
  ExperimentsListOptionalParams,
  ChaosManagementClient
} from "@azure/arm-chaos";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a list of Experiment resources in a resource group.
 *
 * @summary Get a list of Experiment resources in a resource group.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/stable/2023-11-01/examples/ListExperimentsInAResourceGroup.json
 */
async function listAllExperimentsInAResourceGroup() {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] ||
    "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const resourceGroupName = process.env["CHAOS_RESOURCE_GROUP"] || "exampleRG";
  const continuationToken = undefined;
  const options: ExperimentsListOptionalParams = { continuationToken };
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.experiments.list(resourceGroupName, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllExperimentsInAResourceGroup();
}

main().catch(console.error);
