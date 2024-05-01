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
  OrganizationResourceUpdate,
  OrganizationUpdateOptionalParams,
  ConfluentManagementClient
} from "@azure/arm-confluent";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update Organization resource
 *
 * @summary Update Organization resource
 * x-ms-original-file: specification/confluent/resource-manager/Microsoft.Confluent/stable/2023-08-22/examples/Organization_Update.json
 */
async function confluentUpdate() {
  const subscriptionId =
    process.env["CONFLUENT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONFLUENT_RESOURCE_GROUP"] || "myResourceGroup";
  const organizationName = "myOrganization";
  const body: OrganizationResourceUpdate = {
    tags: { client: "dev-client", env: "dev" }
  };
  const options: OrganizationUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new ConfluentManagementClient(credential, subscriptionId);
  const result = await client.organization.update(
    resourceGroupName,
    organizationName,
    options
  );
  console.log(result);
}

async function main() {
  confluentUpdate();
}

main().catch(console.error);
