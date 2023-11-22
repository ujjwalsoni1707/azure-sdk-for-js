/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Returns the details of a linked backend linked to a static site build by name
 *
 * @summary Returns the details of a linked backend linked to a static site build by name
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-01-01/examples/GetLinkedBackendForStaticSiteBuild.json
 */
async function getDetailsOfTheLinkedBackendRegisteredWithAStaticSiteBuildByName() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const environmentName = "default";
  const linkedBackendName = "testBackend";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.getLinkedBackendForBuild(
    resourceGroupName,
    name,
    environmentName,
    linkedBackendName
  );
  console.log(result);
}

async function main() {
  getDetailsOfTheLinkedBackendRegisteredWithAStaticSiteBuildByName();
}

main().catch(console.error);
