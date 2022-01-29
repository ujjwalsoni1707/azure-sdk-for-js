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
 * This sample demonstrates how to Operation to create or update a lab resource.
 *
 * @summary Operation to create or update a lab resource.
 * x-ms-original-file: specification/labservices/resource-manager/Microsoft.LabServices/preview/2021-11-15-preview/examples/Labs/putLab.json
 */
const { LabServicesClient } = require("@azure/arm-labservices");
const { DefaultAzureCredential } = require("@azure/identity");

async function putLab() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const labName = "testlab";
  const body = {
    description: "This is a test lab.",
    autoShutdownProfile: {
      disconnectDelay: "00:05",
      idleDelay: "01:00",
      noConnectDelay: "01:00",
      shutdownOnDisconnect: "Enabled",
      shutdownOnIdle: "UserAbsence",
      shutdownWhenNotConnected: "Enabled",
    },
    connectionProfile: {
      clientRdpAccess: "Public",
      clientSshAccess: "Public",
      webRdpAccess: "None",
      webSshAccess: "None",
    },
    labPlanId:
      "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.LabServices/labPlans/testlabplan",
    location: "westus",
    networkProfile: {
      subnetId:
        "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/default",
    },
    securityProfile: { openAccess: "Disabled" },
    state: "Draft",
    title: "Test Lab",
    virtualMachineProfile: {
      additionalCapabilities: { installGpuDrivers: "Disabled" },
      adminUser: { username: "test-user" },
      createOption: "TemplateVM",
      imageReference: {
        offer: "WindowsServer",
        publisher: "Microsoft",
        sku: "2019-Datacenter",
        version: "2019.0.20190410",
      },
      sku: { name: "Medium" },
      usageQuota: "10:00",
      useSharedPassword: "Disabled",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new LabServicesClient(credential, subscriptionId);
  const result = await client.labs.beginCreateOrUpdateAndWait(resourceGroupName, labName, body);
  console.log(result);
}

putLab().catch(console.error);
