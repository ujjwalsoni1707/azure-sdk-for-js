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
 * This sample demonstrates how to Returns one or more `Reservations` in exchange for one or more `Reservation` purchases.

 *
 * @summary Returns one or more `Reservations` in exchange for one or more `Reservation` purchases.

 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2021-07-01/examples/Exchange.json
 */
const { AzureReservationAPI } = require("@azure/arm-reservations");
const { DefaultAzureCredential } = require("@azure/identity");

async function exchange() {
  const body = {
    properties: { sessionId: "66e2ac8f-439e-4345-8235-6fef07608081" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.exchange.beginPostAndWait(body);
  console.log(result);
}

exchange().catch(console.error);
