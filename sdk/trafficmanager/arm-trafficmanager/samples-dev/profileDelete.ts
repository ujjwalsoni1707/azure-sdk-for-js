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
 * This sample demonstrates how to Deletes a Traffic Manager profile.
 *
 * @summary Deletes a Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2018-08-01/examples/Profile-DELETE.json
 */
import { TrafficManagerManagementClient } from "@azure/arm-trafficmanager";
import { DefaultAzureCredential } from "@azure/identity";

async function profileDelete() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "azuresdkfornetautoresttrafficmanager1323";
  const profileName = "azuresdkfornetautoresttrafficmanager3880";
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.delete(resourceGroupName, profileName);
  console.log(result);
}

profileDelete().catch(console.error);
