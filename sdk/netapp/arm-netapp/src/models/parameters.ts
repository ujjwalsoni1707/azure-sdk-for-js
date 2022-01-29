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
  OperationQueryParameter
} from "@azure/core-client";
import {
  ResourceNameAvailabilityRequest as ResourceNameAvailabilityRequestMapper,
  FilePathAvailabilityRequest as FilePathAvailabilityRequestMapper,
  QuotaAvailabilityRequest as QuotaAvailabilityRequestMapper,
  NetAppAccount as NetAppAccountMapper,
  NetAppAccountPatch as NetAppAccountPatchMapper,
  CapacityPool as CapacityPoolMapper,
  CapacityPoolPatch as CapacityPoolPatchMapper,
  Volume as VolumeMapper,
  VolumePatch as VolumePatchMapper,
  VolumeRevert as VolumeRevertMapper,
  BreakReplicationRequest as BreakReplicationRequestMapper,
  AuthorizeRequest as AuthorizeRequestMapper,
  PoolChangeRequest as PoolChangeRequestMapper,
  Snapshot as SnapshotMapper,
  SnapshotPolicy as SnapshotPolicyMapper,
  SnapshotPolicyPatch as SnapshotPolicyPatchMapper,
  Backup as BackupMapper,
  BackupPatch as BackupPatchMapper,
  BackupPolicy as BackupPolicyMapper,
  BackupPolicyPatch as BackupPolicyPatchMapper,
  VolumeGroupDetails as VolumeGroupDetailsMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-08-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const name: OperationParameter = {
  parameterPath: "name",
  mapper: ResourceNameAvailabilityRequestMapper
};

export const typeParam: OperationParameter = {
  parameterPath: "typeParam",
  mapper: ResourceNameAvailabilityRequestMapper
};

export const resourceGroup: OperationParameter = {
  parameterPath: "resourceGroup",
  mapper: ResourceNameAvailabilityRequestMapper
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const name1: OperationParameter = {
  parameterPath: "name",
  mapper: FilePathAvailabilityRequestMapper
};

export const subnetId: OperationParameter = {
  parameterPath: "subnetId",
  mapper: FilePathAvailabilityRequestMapper
};

export const name2: OperationParameter = {
  parameterPath: "name",
  mapper: QuotaAvailabilityRequestMapper
};

export const typeParam1: OperationParameter = {
  parameterPath: "typeParam",
  mapper: QuotaAvailabilityRequestMapper
};

export const resourceGroup1: OperationParameter = {
  parameterPath: "resourceGroup",
  mapper: QuotaAvailabilityRequestMapper
};

export const quotaLimitName: OperationURLParameter = {
  parameterPath: "quotaLimitName",
  mapper: {
    serializedName: "quotaLimitName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accountName: OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    serializedName: "accountName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: NetAppAccountMapper
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: NetAppAccountPatchMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const poolName: OperationURLParameter = {
  parameterPath: "poolName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9\\-_]{0,63}$"),
      MaxLength: 64,
      MinLength: 1
    },
    serializedName: "poolName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: CapacityPoolMapper
};

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: CapacityPoolPatchMapper
};

export const volumeName: OperationURLParameter = {
  parameterPath: "volumeName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z][a-zA-Z0-9\\-_]{0,63}$"),
      MaxLength: 64,
      MinLength: 1
    },
    serializedName: "volumeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body7: OperationParameter = {
  parameterPath: "body",
  mapper: VolumeMapper
};

export const body8: OperationParameter = {
  parameterPath: "body",
  mapper: VolumePatchMapper
};

export const body9: OperationParameter = {
  parameterPath: "body",
  mapper: VolumeRevertMapper
};

export const body10: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: BreakReplicationRequestMapper
};

export const body11: OperationParameter = {
  parameterPath: "body",
  mapper: AuthorizeRequestMapper
};

export const body12: OperationParameter = {
  parameterPath: "body",
  mapper: PoolChangeRequestMapper
};

export const snapshotName: OperationURLParameter = {
  parameterPath: "snapshotName",
  mapper: {
    serializedName: "snapshotName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body13: OperationParameter = {
  parameterPath: "body",
  mapper: SnapshotMapper
};

export const body14: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } }
    }
  }
};

export const snapshotPolicyName: OperationURLParameter = {
  parameterPath: "snapshotPolicyName",
  mapper: {
    serializedName: "snapshotPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body15: OperationParameter = {
  parameterPath: "body",
  mapper: SnapshotPolicyMapper
};

export const body16: OperationParameter = {
  parameterPath: "body",
  mapper: SnapshotPolicyPatchMapper
};

export const backupName: OperationURLParameter = {
  parameterPath: "backupName",
  mapper: {
    serializedName: "backupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body17: OperationParameter = {
  parameterPath: "body",
  mapper: BackupMapper
};

export const body18: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: BackupPatchMapper
};

export const backupPolicyName: OperationURLParameter = {
  parameterPath: "backupPolicyName",
  mapper: {
    serializedName: "backupPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body19: OperationParameter = {
  parameterPath: "body",
  mapper: BackupPolicyMapper
};

export const body20: OperationParameter = {
  parameterPath: "body",
  mapper: BackupPolicyPatchMapper
};

export const volumeGroupName: OperationURLParameter = {
  parameterPath: "volumeGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9\\-_]{0,63}$"),
      MaxLength: 64,
      MinLength: 1
    },
    serializedName: "volumeGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body21: OperationParameter = {
  parameterPath: "body",
  mapper: VolumeGroupDetailsMapper
};
