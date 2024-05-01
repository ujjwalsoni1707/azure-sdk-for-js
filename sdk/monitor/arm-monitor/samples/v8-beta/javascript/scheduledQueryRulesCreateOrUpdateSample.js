/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a scheduled query rule.
 *
 * @summary Creates or updates a scheduled query rule.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2022-08-01-preview/examples/createOrUpdateScheduledQueryRule.json
 */
async function createOrUpdateAScheduledQueryRuleForSingleResource() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "dd4bfc94-a096-412b-9c43-4bd13e35afbc";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "QueryResourceGroupName";
  const ruleName = "perf";
  const parameters = {
    description: "Performance rule",
    actions: {
      actionGroups: [
        "/subscriptions/1cf177ed-1330-4692-80ea-fd3d7783b147/resourcegroups/sqrapi/providers/microsoft.insights/actiongroups/myactiongroup",
      ],
      customProperties: { key11: "value11", key12: "value12" },
    },
    checkWorkspaceAlertsStorageConfigured: true,
    criteria: {
      allOf: [
        {
          dimensions: [
            {
              name: "ComputerIp",
              operator: "Exclude",
              values: ["192.168.1.1"],
            },
            { name: "OSType", operator: "Include", values: ["*"] },
          ],
          failingPeriods: {
            minFailingPeriodsToAlert: 1,
            numberOfEvaluationPeriods: 1,
          },
          metricMeasureColumn: "% Processor Time",
          operator: "GreaterThan",
          query: 'Perf | where ObjectName == "Processor"',
          resourceIdColumn: "resourceId",
          threshold: 70,
          timeAggregation: "Average",
        },
      ],
    },
    enabled: true,
    evaluationFrequency: "PT5M",
    location: "eastus",
    muteActionsDuration: "PT30M",
    ruleResolveConfiguration: { autoResolved: true, timeToResolve: "PT10M" },
    scopes: [
      "/subscriptions/aaf177ed-1330-a9f2-80ea-fd3d7783b147/resourceGroups/scopeResourceGroup1/providers/Microsoft.Compute/virtualMachines/vm1",
    ],
    severity: 4,
    skipQueryValidation: true,
    windowSize: "PT10M",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.scheduledQueryRules.createOrUpdate(
    resourceGroupName,
    ruleName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a scheduled query rule.
 *
 * @summary Creates or updates a scheduled query rule.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2022-08-01-preview/examples/createOrUpdateScheduledQueryRuleResourceGroup.json
 */
async function createOrUpdateAScheduledQueryRuleOnResourceGroupS() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "dd4bfc94-a096-412b-9c43-4bd13e35afbc";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "QueryResourceGroupName";
  const ruleName = "heartbeat";
  const parameters = {
    description: "Health check rule",
    actions: {
      actionGroups: [
        "/subscriptions/1cf177ed-1330-4692-80ea-fd3d7783b147/resourcegroups/sqrapi/providers/microsoft.insights/actiongroups/myactiongroup",
      ],
      customProperties: { key11: "value11", key12: "value12" },
    },
    checkWorkspaceAlertsStorageConfigured: true,
    criteria: {
      allOf: [
        {
          dimensions: [],
          failingPeriods: {
            minFailingPeriodsToAlert: 1,
            numberOfEvaluationPeriods: 1,
          },
          operator: "GreaterThan",
          query: "Heartbeat",
          threshold: 360,
          timeAggregation: "Count",
        },
      ],
    },
    enabled: true,
    evaluationFrequency: "PT5M",
    location: "eastus",
    muteActionsDuration: "PT30M",
    ruleResolveConfiguration: { autoResolved: true, timeToResolve: "PT10M" },
    scopes: [
      "/subscriptions/aaf177ed-1330-a9f2-80ea-fd3d7783b147/resourceGroups/scopeResourceGroup1",
    ],
    severity: 4,
    skipQueryValidation: true,
    targetResourceTypes: ["Microsoft.Compute/virtualMachines"],
    windowSize: "PT10M",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.scheduledQueryRules.createOrUpdate(
    resourceGroupName,
    ruleName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a scheduled query rule.
 *
 * @summary Creates or updates a scheduled query rule.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2022-08-01-preview/examples/createOrUpdateScheduledQueryRuleSubscription.json
 */
async function createOrUpdateAScheduledQueryRuleOnSubscription() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "dd4bfc94-a096-412b-9c43-4bd13e35afbc";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "QueryResourceGroupName";
  const ruleName = "perf";
  const parameters = {
    description: "Performance rule",
    actions: {
      actionGroups: [
        "/subscriptions/1cf177ed-1330-4692-80ea-fd3d7783b147/resourcegroups/sqrapi/providers/microsoft.insights/actiongroups/myactiongroup",
      ],
      customProperties: { key11: "value11", key12: "value12" },
    },
    checkWorkspaceAlertsStorageConfigured: true,
    criteria: {
      allOf: [
        {
          dimensions: [
            {
              name: "ComputerIp",
              operator: "Exclude",
              values: ["192.168.1.1"],
            },
            { name: "OSType", operator: "Include", values: ["*"] },
          ],
          failingPeriods: {
            minFailingPeriodsToAlert: 1,
            numberOfEvaluationPeriods: 1,
          },
          metricMeasureColumn: "% Processor Time",
          operator: "GreaterThan",
          query: 'Perf | where ObjectName == "Processor"',
          resourceIdColumn: "resourceId",
          threshold: 70,
          timeAggregation: "Average",
        },
      ],
    },
    enabled: true,
    evaluationFrequency: "PT5M",
    location: "eastus",
    muteActionsDuration: "PT30M",
    ruleResolveConfiguration: { autoResolved: true, timeToResolve: "PT10M" },
    scopes: ["/subscriptions/aaf177ed-1330-a9f2-80ea-fd3d7783b147"],
    severity: 4,
    skipQueryValidation: true,
    targetResourceTypes: ["Microsoft.Compute/virtualMachines"],
    windowSize: "PT10M",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.scheduledQueryRules.createOrUpdate(
    resourceGroupName,
    ruleName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateAScheduledQueryRuleForSingleResource();
  createOrUpdateAScheduledQueryRuleOnResourceGroupS();
  createOrUpdateAScheduledQueryRuleOnSubscription();
}

main().catch(console.error);
