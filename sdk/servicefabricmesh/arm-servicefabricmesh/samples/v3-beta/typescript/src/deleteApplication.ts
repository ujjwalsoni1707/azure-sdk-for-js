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
 * This sample demonstrates how to Deletes the application resource identified by the name.
 *
 * @summary Deletes the application resource identified by the name.
 * x-ms-original-file: specification/servicefabricmesh/resource-manager/Microsoft.ServiceFabricMesh/preview/2018-09-01-preview/examples/applications/delete.json
 */
import { ServiceFabricMeshManagementClient } from "@azure/arm-servicefabricmesh";
import { DefaultAzureCredential } from "@azure/identity";

async function deleteApplication() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "sbz_demo";
  const applicationResourceName = "sampleApplication";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricMeshManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.application.delete(
    resourceGroupName,
    applicationResourceName
  );
  console.log(result);
}

deleteApplication().catch(console.error);
