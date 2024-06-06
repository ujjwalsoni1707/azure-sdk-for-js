// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * This sample demonstrates how the sendBroadcastNotification() method can be used to send a broadcast
 * notification using APNs.  This sends a JSON message to an APNs given device token and returns
 * a Tracking ID which can be used for troubleshooting with the Azure Notification Hubs team.
 *
 * See https://docs.microsoft.com/rest/api/notificationhubs/send-apns-native-notification
 * to learn about sending a notification to an Apple device.
 *
 *
 * @summary Demonstrates how to send tag expression notifications using Azure Notification Hubs
 * @azsdk-weight 100
 */

import * as dotenv from "dotenv";
import {
  beginGetNotificationDetails,
  createClientContext,
  sendNotification,
} from "@azure/notification-hubs/api";
import { createAppleNotification } from "@azure/notification-hubs/models";

// Load the .env file if it exists
dotenv.config();

// Define connection string and hub name
const connectionString = process.env.NOTIFICATIONHUBS_CONNECTION_STRING || "<connection string>";
const hubName = process.env.NOTIFICATION_HUB_NAME || "<hub name>";

async function main(): Promise<void> {
  const context = createClientContext(connectionString, hubName);

  const messageBody = `{ "aps" : { "alert" : "Hello" } }`;

  const notification = createAppleNotification({
    body: messageBody,
    headers: {
      "apns-priority": "10",
      "apns-push-type": "alert",
    },
  });

  // Can set enableTestSend to true for debugging purposes
  const result = await sendNotification(context, notification, { enableTestSend: false });

  console.log(`Tag List send Tracking ID: ${result.trackingId}`);
  console.log(`Tag List Correlation ID: ${result.correlationId}`);

  // Only available in Standard SKU and above
  if (result.notificationId) {
    console.log(`Tag List send Notification ID: ${result.notificationId}`);

    const poller = await beginGetNotificationDetails(context, result.notificationId);
    const results = await poller.pollUntilDone();
    if (results) {
      console.log(JSON.stringify(results, null, 2));
    }
  }
}

main().catch((err) => {
  console.log("sendTagsList Sample: Error occurred: ", err);
  process.exit(1);
});
