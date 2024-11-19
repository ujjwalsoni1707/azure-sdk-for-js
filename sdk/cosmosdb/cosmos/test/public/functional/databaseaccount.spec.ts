// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import assert from "assert";
import type { Context } from "mocha";
import type { Suite } from "mocha";
import { CosmosClient, OperationType } from "../../../src";
import { endpoint } from "../common/_testConfig";
import { masterKey } from "../common/_fakeTestSecrets";
import { testForDiagnostics } from "../common/TestHelpers";

const client = new CosmosClient({
  endpoint,
  key: masterKey,
  connectionPolicy: { enableBackgroundEndpointRefreshing: false },
});

describe("NodeJS CRUD Tests", function (this: Suite) {
  this.timeout(process.env.MOCHA_TIMEOUT || 10000);
  beforeEach(async function (this: Context) {
    this.timeout(process.env.MOCHA_TIMEOUT || 10000);
  });

  describe("validate database account functionality", function () {
    it("nativeApi Should get database account successfully name based", async function () {
      const {
        resource: databaseAccount,
        headers,
        statusCode,
      } = await testForDiagnostics(
        async () => {
          return client.getDatabaseAccount();
        },
        {
          locationEndpointsContacted: 1,
          // metadataCallCount: 0,
          retryCount: 0,
          gatewayStatisticsTestSpec: [
            {
              operationType: OperationType.Read,
            },
          ],
        },
      );
      assert.equal(databaseAccount.DatabasesLink, "/dbs/");
      assert.equal(databaseAccount.MediaLink, "/media/");
      assert.equal(
        databaseAccount.MaxMediaStorageUsageInMB,
        headers["x-ms-max-media-storage-usage-mb"],
      ); // TODO: should use constants here
      assert.equal(
        databaseAccount.CurrentMediaStorageUsageInMB,
        headers["x-ms-media-storage-usage-mb"],
      );
      assert(databaseAccount.ConsistencyPolicy !== undefined);
      assert(statusCode !== undefined);
    });
  });
});
