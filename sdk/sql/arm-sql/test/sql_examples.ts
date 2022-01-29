/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  record,
  RecorderEnvironmentSetup,
  Recorder,
  delay,
  isPlaybackMode
} from "@azure-tools/test-recorder";
import * as assert from "assert";
import { ClientSecretCredential } from "@azure/identity";
import { SqlManagementClient } from "../src/sqlManagementClient";

const recorderEnvSetup: RecorderEnvironmentSetup = {
  replaceableVariables: {
    AZURE_CLIENT_ID: "azure_client_id",
    AZURE_CLIENT_SECRET: "azure_client_secret",
    AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
    SUBSCRIPTION_ID: "azure_subscription_id"
  },
  customizationsOnRecordings: [
    (recording: any): any =>
      recording.replace(
        /"access_token":"[^"]*"/g,
        `"access_token":"access_token"`
      )
  ],
  queryParametersToSkip: []
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Sql test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: SqlManagementClient;
  let location: string;
  let resourceGroup: string;
  let serverName: string;
  let databaseName: string;

  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
    subscriptionId = env.SUBSCRIPTION_ID;
    // This is an example of how the environment variables are used
    const credential = new ClientSecretCredential(
      env.AZURE_TENANT_ID,
      env.AZURE_CLIENT_ID,
      env.AZURE_CLIENT_SECRET
    );
    client = new SqlManagementClient(credential, subscriptionId);
    location = "eastus";
    resourceGroup = "myjstest";
    databaseName = "mydatabasezzzz";
    serverName = "myserverppp";
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("servers create test", async function() {
    const res = await client.servers.beginCreateOrUpdateAndWait(resourceGroup,serverName,{
      location: "eastus",
      administratorLogin: "dummylogin",
      administratorLoginPassword: "p@55wOrd",
      version: "12.0"
    },testPollingOptions)
    assert.equal(res.name,serverName);
  });

  it("databases create test", async function() {
    const res = await client.databases.beginCreateOrUpdateAndWait(resourceGroup,serverName,databaseName,{
      location: "eastus",
      readScale: "Disabled"
    },testPollingOptions)
    assert.equal(res.name,databaseName);
  });

  it("servers get test", async function() {
    const res = await client.servers.get(resourceGroup,serverName);
    assert.equal(res.name,serverName);
  });

  it("databases get test", async function() {
    const res = await client.databases.get(resourceGroup,serverName,databaseName);
    assert.equal(res.name,databaseName);
  });

  it("servers list test", async function() {
    const resArray = new Array()
    for await (let item of client.servers.listByResourceGroup(resourceGroup)){
      resArray.push(item)
    }
    assert.equal(resArray.length,1);
  });

  it("databases list test", async function() {
    const resArray = new Array()
    for await (let item of client.databases.listByServer(resourceGroup,serverName)){
      resArray.push(item)
    }
    assert.equal(resArray.length,2);
  });

  it("servers update test", async function() {
    const res = await client.servers.beginUpdateAndWait(resourceGroup,serverName,{
      tags: {
        tag1: "value1"
      }
    },testPollingOptions);
    assert.equal(res.type,"Microsoft.Sql/servers")
  });

  it("databases update test", async function() {
    const res = await client.databases.beginUpdateAndWait(resourceGroup,serverName,databaseName,{
      sku: {
        name: "S1",
        tier: "Standard",
      },
      collation: "SQL_Latin1_General_CP1_CI_AS",
      maxLogSizeBytes: 1073741824
    },testPollingOptions);
    assert.equal(res.type,"Microsoft.Sql/servers/databases")
  });

  it("databases delete test", async function() {
    const res = await client.databases.beginDeleteAndWait(resourceGroup,serverName,databaseName,testPollingOptions);
    const resArray = new Array()
    for await (let item of client.databases.listByServer(resourceGroup,serverName)){
      resArray.push(item)
    }
    assert.equal(resArray.length,1);
  });

  it("servers delete test", async function() {
    const res = await client.servers.beginDeleteAndWait(resourceGroup,serverName,testPollingOptions);
    const resArray = new Array()
    for await (let item of client.servers.listByResourceGroup(resourceGroup)){
      resArray.push(item)
    }
    assert.equal(resArray.length,0);
  }); 
});
