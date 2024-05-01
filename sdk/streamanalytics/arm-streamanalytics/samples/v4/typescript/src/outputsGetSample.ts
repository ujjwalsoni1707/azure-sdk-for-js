/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StreamAnalyticsManagementClient } from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_DocumentDB.json
 */
async function getADocumentDbOutput() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg7983";
  const jobName = "sj2331";
  const outputName = "output3022";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getADocumentDbOutput().catch(console.error);

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_PowerBI.json
 */
async function getAPowerBiOutput() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg7983";
  const jobName = "sj2331";
  const outputName = "output3022";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getAPowerBiOutput().catch(console.error);

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_ServiceBusQueue_Avro.json
 */
async function getAServiceBusQueueOutputWithAvroSerialization() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg3410";
  const jobName = "sj5095";
  const outputName = "output3456";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getAServiceBusQueueOutputWithAvroSerialization().catch(console.error);

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_ServiceBusTopic_CSV.json
 */
async function getAServiceBusTopicOutputWithCsvSerialization() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg6450";
  const jobName = "sj7094";
  const outputName = "output7886";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getAServiceBusTopicOutputWithCsvSerialization().catch(console.error);

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_Blob_CSV.json
 */
async function getABlobOutputWithCsvSerialization() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg5023";
  const jobName = "sj900";
  const outputName = "output1623";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getABlobOutputWithCsvSerialization().catch(console.error);

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_AzureDataLakeStore_JSON.json
 */
async function getAnAzureDataLakeStoreOutputWithJsonSerialization() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg6912";
  const jobName = "sj3310";
  const outputName = "output5195";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getAnAzureDataLakeStoreOutputWithJsonSerialization().catch(console.error);

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_DataWarehouse.json
 */
async function getAnAzureDataWarehouseOutput() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg";
  const jobName = "sjName";
  const outputName = "output958";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getAnAzureDataWarehouseOutput().catch(console.error);

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_AzureSQL.json
 */
async function getAnAzureSqlDatabaseOutput() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg2157";
  const jobName = "sj6458";
  const outputName = "output1755";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getAnAzureSqlDatabaseOutput().catch(console.error);

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_AzureTable.json
 */
async function getAnAzureTableOutput() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg5176";
  const jobName = "sj2790";
  const outputName = "output958";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getAnAzureTableOutput().catch(console.error);

/**
 * This sample demonstrates how to Gets details about the specified output.
 *
 * @summary Gets details about the specified output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_Get_EventHub_JSON.json
 */
async function getAnEventHubOutputWithJsonSerialization() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg6912";
  const jobName = "sj3310";
  const outputName = "output5195";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.outputs.get(
    resourceGroupName,
    jobName,
    outputName
  );
  console.log(result);
}

getAnEventHubOutputWithJsonSerialization().catch(console.error);
