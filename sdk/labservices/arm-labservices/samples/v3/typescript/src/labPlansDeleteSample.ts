/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { LabServicesClient } from "@azure/arm-labservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Operation to delete a Lab Plan resource. Deleting a lab plan does not delete labs associated with a lab plan, nor does it delete shared images added to a gallery via the lab plan permission container.
 *
 * @summary Operation to delete a Lab Plan resource. Deleting a lab plan does not delete labs associated with a lab plan, nor does it delete shared images added to a gallery via the lab plan permission container.
 * x-ms-original-file: specification/labservices/resource-manager/Microsoft.LabServices/stable/2022-08-01/examples/LabPlans/deleteLabPlan.json
 */
async function deleteLabPlan() {
  const subscriptionId =
    process.env["LABSERVICES_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["LABSERVICES_RESOURCE_GROUP"] || "testrg123";
  const labPlanName = "testlabplan";
  const credential = new DefaultAzureCredential();
  const client = new LabServicesClient(credential, subscriptionId);
  const result = await client.labPlans.beginDeleteAndWait(
    resourceGroupName,
    labPlanName
  );
  console.log(result);
}

async function main() {
  deleteLabPlan();
}

main().catch(console.error);
