/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2020-09-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2021-06-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2020-07-01-preview',
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const managementGroupId: msRest.OperationURLParameter = {
  parameterPath: "managementGroupId",
  mapper: {
    required: true,
    serializedName: "managementGroupId",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const parentResourcePath: msRest.OperationURLParameter = {
  parameterPath: "parentResourcePath",
  mapper: {
    required: true,
    serializedName: "parentResourcePath",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const policyAssignmentId: msRest.OperationURLParameter = {
  parameterPath: "policyAssignmentId",
  mapper: {
    required: true,
    serializedName: "policyAssignmentId",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const policyAssignmentName: msRest.OperationURLParameter = {
  parameterPath: "policyAssignmentName",
  mapper: {
    required: true,
    serializedName: "policyAssignmentName",
    type: {
      name: "String"
    }
  }
};
export const policyDefinitionName: msRest.OperationURLParameter = {
  parameterPath: "policyDefinitionName",
  mapper: {
    required: true,
    serializedName: "policyDefinitionName",
    type: {
      name: "String"
    }
  }
};
export const policyExemptionName: msRest.OperationURLParameter = {
  parameterPath: "policyExemptionName",
  mapper: {
    required: true,
    serializedName: "policyExemptionName",
    type: {
      name: "String"
    }
  }
};
export const policyMode: msRest.OperationURLParameter = {
  parameterPath: "policyMode",
  mapper: {
    required: true,
    serializedName: "policyMode",
    type: {
      name: "String"
    }
  }
};
export const policySetDefinitionName: msRest.OperationURLParameter = {
  parameterPath: "policySetDefinitionName",
  mapper: {
    required: true,
    serializedName: "policySetDefinitionName",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const resourceName: msRest.OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    required: true,
    serializedName: "resourceName",
    type: {
      name: "String"
    }
  }
};
export const resourceProviderNamespace: msRest.OperationURLParameter = {
  parameterPath: "resourceProviderNamespace",
  mapper: {
    required: true,
    serializedName: "resourceProviderNamespace",
    type: {
      name: "String"
    }
  }
};
export const resourceType: msRest.OperationURLParameter = {
  parameterPath: "resourceType",
  mapper: {
    required: true,
    serializedName: "resourceType",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const scope: msRest.OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    required: true,
    serializedName: "scope",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
