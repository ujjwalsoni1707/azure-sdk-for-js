/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DnsResolverManagementClient } from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a DNS forwarding ruleset. WARNING: This operation cannot be undone. All forwarding rules within the ruleset will be deleted.
 *
 * @summary Deletes a DNS forwarding ruleset. WARNING: This operation cannot be undone. All forwarding rules within the ruleset will be deleted.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2023-07-01-preview/examples/DnsForwardingRuleset_Delete.json
 */
async function deleteDnsForwardingRuleset() {
  const subscriptionId =
    process.env["DNSRESOLVER_SUBSCRIPTION_ID"] ||
    "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName =
    process.env["DNSRESOLVER_RESOURCE_GROUP"] || "sampleResourceGroup";
  const dnsForwardingRulesetName = "samplednsForwardingRulesetName";
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.dnsForwardingRulesets.beginDeleteAndWait(
    resourceGroupName,
    dnsForwardingRulesetName,
  );
  console.log(result);
}

async function main() {
  deleteDnsForwardingRuleset();
}

main().catch(console.error);
