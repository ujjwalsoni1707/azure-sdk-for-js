/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  KeyValue as KeyValueMapper,
  ConfigurationSnapshot as ConfigurationSnapshotMapper,
  SnapshotUpdateParameters as SnapshotUpdateParametersMapper,
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.keyset+json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const name: OperationQueryParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    type: {
      name: "String",
    },
  },
};

export const syncToken: OperationParameter = {
  parameterPath: "syncToken",
  mapper: {
    serializedName: "Sync-Token",
    type: {
      name: "String",
    },
  },
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    serializedName: "api-version",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const after: OperationQueryParameter = {
  parameterPath: ["options", "after"],
  mapper: {
    serializedName: "After",
    type: {
      name: "String",
    },
  },
};

export const acceptDatetime: OperationParameter = {
  parameterPath: ["options", "acceptDatetime"],
  mapper: {
    serializedName: "Accept-Datetime",
    type: {
      name: "String",
    },
  },
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.kvset+json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const key: OperationQueryParameter = {
  parameterPath: ["options", "key"],
  mapper: {
    serializedName: "key",
    type: {
      name: "String",
    },
  },
};

export const label: OperationQueryParameter = {
  parameterPath: ["options", "label"],
  mapper: {
    serializedName: "label",
    type: {
      name: "String",
    },
  },
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const snapshot: OperationQueryParameter = {
  parameterPath: ["options", "snapshot"],
  mapper: {
    serializedName: "snapshot",
    type: {
      name: "String",
    },
  },
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String",
    },
  },
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String",
    },
  },
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.kv+json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const key1: OperationURLParameter = {
  parameterPath: "key",
  mapper: {
    serializedName: "key",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/vnd.microsoft.appconfig.kv+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const entity: OperationParameter = {
  parameterPath: ["options", "entity"],
  mapper: KeyValueMapper,
};

export const accept3: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.snapshotset+json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const select1: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const status: OperationQueryParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    serializedName: "status",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const accept4: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.snapshot+json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const name1: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/vnd.microsoft.appconfig.snapshot+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const entity1: OperationParameter = {
  parameterPath: "entity",
  mapper: ConfigurationSnapshotMapper,
};

export const name2: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    constraints: {
      MaxLength: 256,
    },
    serializedName: "name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType2: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const entity2: OperationParameter = {
  parameterPath: "entity",
  mapper: SnapshotUpdateParametersMapper,
};

export const accept5: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.labelset+json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const select2: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const accept6: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const snapshot1: OperationQueryParameter = {
  parameterPath: "snapshot",
  mapper: {
    serializedName: "snapshot",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};
