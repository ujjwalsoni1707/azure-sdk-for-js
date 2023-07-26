/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebPubSubManagementClient } = require("@azure/arm-webpubsub");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a shared private link resource
 *
 * @summary Create or update a shared private link resource
 * x-ms-original-file: specification/webpubsub/resource-manager/Microsoft.SignalRService/preview/2023-06-01-preview/examples/WebPubSubSharedPrivateLinkResources_CreateOrUpdate.json
 */
async function webPubSubSharedPrivateLinkResourcesCreateOrUpdate() {
  const subscriptionId =
    process.env["WEB-PUBSUB_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const sharedPrivateLinkResourceName = "upstream";
  const resourceGroupName = process.env["WEB-PUBSUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "myWebPubSubService";
  const parameters = {
    groupId: "sites",
    privateLinkResourceId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.Web/sites/myWebApp",
    requestMessage: "Please approve",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebPubSubManagementClient(credential, subscriptionId);
  const result = await client.webPubSubSharedPrivateLinkResources.beginCreateOrUpdateAndWait(
    sharedPrivateLinkResourceName,
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

async function main() {
  webPubSubSharedPrivateLinkResourcesCreateOrUpdate();
}

main().catch(console.error);