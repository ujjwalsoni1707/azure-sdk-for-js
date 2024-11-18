// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates container create, read, delete and reading all containers belonging to a database.
 */

require("dotenv").config();

const { finish, handleError, logStep, logSampleHeader } = require("./Shared/handleError");
const {
  CosmosClient,
  VectorEmbeddingDataType,
  VectorEmbeddingDistanceFunction,
  VectorIndexType,
} = require("@azure/cosmos");
const key = process.env.COSMOS_KEY || "<cosmos key>";
const endpoint = process.env.COSMOS_ENDPOINT || "<cosmos endpoint>";
const databaseId = process.env.COSMOS_DATABASE || "<cosmos database>";
const containerId = process.env.COSMOS_CONTAINER || "<cosmos container>";
logSampleHeader("Container Management");

// Establish a new instance of the CosmosClient to be used throughout this demo
const client = new CosmosClient({ endpoint, key });

// ensuring a database exists for us to work with
async function run() {
  const { database } = await client.databases.createIfNotExists({ id: databaseId });

  logStep(`Create container with id : ${containerId}`);
  await database.containers.createIfNotExists({ id: containerId });

  logStep("Read all containers in database");
  const iterator = database.containers.readAll();
  const { resources: containersList } = await iterator.fetchAll();
  console.log(" --- Priting via iterator.fetchAll()");
  console.log(containersList);

  logStep("Read container definition");
  const container = database.container(containerId);
  const { resource: containerDef } = await container.read();
  console.log(
    `Container with url "${container.url}" was found its id is "${containerDef && containerDef.id}`,
  );

  logStep(`Delete container ${containerDef && containerDef.id}`);
  await container.delete();

  logStep("Create container with computed property");
  const lowerName = {
    name: "lowerLastName",
    query:
      "SELECT VALUE LOWER(IS_DEFINED(c.lastName) ? c.lastName : c.parents[0].familyName) FROM c",
  };

  const { container: containerWithComputedProperty } = await database.containers.createIfNotExists({
    id: containerId,
    computedProperties: [lowerName],
  });
  console.log("Container with computed property created");
  const andersenFamily = {
    id: "AndersenFamily",
    lastName: "Andersen",
    parents: [{ firstName: "Thomas" }, { firstName: "Mary Kay" }],
    children: [
      {
        firstName: "Henriette Thaulow",
        gender: "female",
        grade: 5,
        pets: [{ givenName: "Fluffy" }],
      },
    ],
    address: { state: "WA", county: "King", city: "seattle" },
  };
  const wakefieldFamily = {
    id: "WakefieldFamily",
    parents: [
      { familyName: "Wakefield", givenName: "Robin" },
      { familyName: "Miller", givenName: "Ben" },
    ],
    children: [
      {
        familyName: "Merriam",
        givenName: "Jesse",
        gender: "female",
        grade: 1,
        pets: [{ givenName: "Goofy" }, { givenName: "Shadow" }],
      },
      {
        familyName: "Miller",
        givenName: "Lisa",
        gender: "female",
        grade: 8,
      },
    ],
    address: { state: "NY", county: "Manhattan", city: "NY" },
  };
  await containerWithComputedProperty.items.create(andersenFamily);
  await containerWithComputedProperty.items.create(wakefieldFamily);

  const response = await containerWithComputedProperty.items
    .query(`SELECT c.${lowerName.name} FROM c`)
    .fetchAll();
  console.log("computed property query results: ", response.resources);

  logStep("Update computed properties on an existing container");
  // read current container definition
  const { resource: contDefinition } = await containerWithComputedProperty.read();
  const upperName = {
    name: "upperLastName",
    query:
      "SELECT VALUE UPPER(IS_DEFINED(c.lastName) ? c.lastName : c.parents[0].familyName) FROM c",
  };
  if (contDefinition) {
    // update computed properties
    contDefinition.computedProperties = [upperName];
    // replace container definition with updated computed properties
    await containerWithComputedProperty.replace(contDefinition);
    console.log("Computed properties updated");
  } else {
    console.log("Container definition is undefined.");
  }

  logStep("Create container with vector embedding and indexing policies");
  const vectorEmbeddingPolicy = {
    vectorEmbeddings: [
      {
        path: "/vector1",
        dataType: VectorEmbeddingDataType.UInt8,
        dimensions: 1000,
        distanceFunction: VectorEmbeddingDistanceFunction.Euclidean,
      },
      {
        path: "/vector2",
        dataType: VectorEmbeddingDataType.Int8,
        dimensions: 200,
        distanceFunction: VectorEmbeddingDistanceFunction.DotProduct,
      },
      {
        path: "/vector3",
        dataType: VectorEmbeddingDataType.UInt8,
        dimensions: 400,
        distanceFunction: VectorEmbeddingDistanceFunction.Cosine,
      },
    ],
  };

  const indexingPolicy = {
    automatic: true,
    indexingMode: "consistent",
    compositeIndexes: [
      [
        { path: "/numberField", order: "ascending" },
        { path: "/stringField", order: "descending" },
      ],
    ],
    spatialIndexes: [{ path: "/location/*", types: ["Point", "Polygon"] }],
    vectorIndexes: [
      { path: "/vector1", type: VectorIndexType.Flat },
      { path: "/vector2", type: VectorIndexType.QuantizedFlat },
      { path: "/vector3", type: VectorIndexType.DiskANN },
    ],
  };

  const containerDefinition = {
    id: "ContainerWithVectorPolicy",
    partitionKey: { paths: ["/id"] },
    indexingPolicy: indexingPolicy,
    vectorEmbeddingPolicy: vectorEmbeddingPolicy,
  };
  await database.containers.createIfNotExists(containerDefinition);
  console.log("Container with vector embedding and indexing policies created");

  logStep("Create container with full text search container policy");
  // Create a container with full text policy and full text indexes
  const indexingPolicyFTS = {
    automatic: true,
    includedPaths: [{ path: "/*" }],
    excludedPaths: [{ path: '/"_etag"/?' }],
    fullTextIndexes: [{ path: "/text1" }],
  };

  const fullTextPolicy = {
    defaultLanguage: "en-US",
    fullTextPaths: [{ path: "/text1", language: "en-US" }],
  };

  const { container: ContainerWithFTSPolicy } = await database.containers.createIfNotExists({
    id: "ContainerWithFTSPolicy",
    partitionKey: { paths: ["/id"] },
    fullTextPolicy: fullTextPolicy,
    indexingPolicy: indexingPolicyFTS,
  });
  console.log("Container with full text search policy created");

  const sample_texts = [
    "Common popular pop music artists include Taylor Swift and The Weekend.",
    "The weekend is coming up soon, do you have any plans?",
    "Depending on the artist, their music can be very different.",
    "Mozart and Beethoven are some of the most recognizable names in classical music.",
    "Taylor acts in many movies, and is considered a great artist.",
  ];

  // Create some items to use with full text search
  for (let i = 0; i < 10; i++) {
    await ContainerWithFTSPolicy.items.create({ id: "full_text_item" + i, text1: "some-text" });
  }
  for (let i = 10; i < 15; i++) {
    await ContainerWithFTSPolicy.items.create({
      id: "full_text_item" + i,
      text1: sample_texts[i - 10],
      vector: [1, 2, 3],
    });
  }

  //  Run full text search queries using full text score ranking
  let query = "SELECT TOP 3 c.text1 FROM c ORDER BY RANK FullTextScore(c.text1, ['artist'])";
  let ftsResponse = await ContainerWithFTSPolicy.items
    .query(query, { forceQueryPlan: true })
    .fetchAll();
  console.log("Response: ", ftsResponse.resources);

  //  Run full text search queries with full text contains
  query =
    "SELECT TOP 3 c.text1 FROM c WHERE FullTextContains(c.text1, 'artist') ORDER BY RANK RRF (FullTextScore(c.text1, ['movies']),FullTextScore(c.text1, ['music']))";
  ftsResponse = await ContainerWithFTSPolicy.items
    .query(query, { forceQueryPlan: true })
    .fetchAll();
  console.log("Response: ", ftsResponse.resources);

  // Run hybrid search queries using RRF ranking wth vector distances
  query =
    "SELECT TOP 3 c.text1 FROM c ORDER BY RANK RRF(FullTextScore(c.text1, ['music']), VectorDistance(c.vector, [1, 2, 3]))";
  ftsResponse = await ContainerWithFTSPolicy.items
    .query(query, { forceQueryPlan: true })
    .fetchAll();
  console.log("Response: ", ftsResponse.resources);

  await finish();
}

run().catch(handleError);
