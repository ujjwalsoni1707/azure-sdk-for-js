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
  ServerForCreate as ServerForCreateMapper,
  ServerUpdateParameters as ServerUpdateParametersMapper,
  FirewallRule as FirewallRuleMapper,
  VirtualNetworkRule as VirtualNetworkRuleMapper,
  Database as DatabaseMapper,
  Configuration as ConfigurationMapper,
  ConfigurationListResult as ConfigurationListResultMapper,
  NameAvailabilityRequest as NameAvailabilityRequestMapper,
  TopQueryStatisticsInput as TopQueryStatisticsInputMapper,
  WaitStatisticsInput as WaitStatisticsInputMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  TagsObject as TagsObjectMapper,
  ServerSecurityAlertPolicy as ServerSecurityAlertPolicyMapper
} from "../models/mappers";

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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerForCreateMapper
};

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
    defaultValue: "2018-06-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
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

export const serverName: OperationURLParameter = {
  parameterPath: "serverName",
  mapper: {
    serializedName: "serverName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerUpdateParametersMapper
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: FirewallRuleMapper
};

export const firewallRuleName: OperationURLParameter = {
  parameterPath: "firewallRuleName",
  mapper: {
    serializedName: "firewallRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualNetworkRuleName: OperationURLParameter = {
  parameterPath: "virtualNetworkRuleName",
  mapper: {
    serializedName: "virtualNetworkRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualNetworkRuleMapper
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

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: DatabaseMapper
};

export const databaseName: OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    serializedName: "databaseName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConfigurationMapper
};

export const configurationName: OperationURLParameter = {
  parameterPath: "configurationName",
  mapper: {
    serializedName: "configurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const value: OperationParameter = {
  parameterPath: "value",
  mapper: ConfigurationListResultMapper
};

export const locationName: OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    serializedName: "locationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nameAvailabilityRequest: OperationParameter = {
  parameterPath: "nameAvailabilityRequest",
  mapper: NameAvailabilityRequestMapper
};

export const queryId: OperationURLParameter = {
  parameterPath: "queryId",
  mapper: {
    serializedName: "queryId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const queryIds: OperationQueryParameter = {
  parameterPath: "queryIds",
  mapper: {
    serializedName: "queryIds",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const queryStatisticId: OperationURLParameter = {
  parameterPath: "queryStatisticId",
  mapper: {
    serializedName: "queryStatisticId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: TopQueryStatisticsInputMapper
};

export const waitStatisticsId: OperationURLParameter = {
  parameterPath: "waitStatisticsId",
  mapper: {
    serializedName: "waitStatisticsId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: WaitStatisticsInputMapper
};

export const advisorName: OperationURLParameter = {
  parameterPath: "advisorName",
  mapper: {
    serializedName: "advisorName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const databaseName1: OperationQueryParameter = {
  parameterPath: "databaseName",
  mapper: {
    serializedName: "databaseName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const recommendedActionName: OperationURLParameter = {
  parameterPath: "recommendedActionName",
  mapper: {
    serializedName: "recommendedActionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const sessionId: OperationQueryParameter = {
  parameterPath: ["options", "sessionId"],
  mapper: {
    serializedName: "sessionId",
    type: {
      name: "String"
    }
  }
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: TagsObjectMapper
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const securityAlertPolicyName: OperationURLParameter = {
  parameterPath: "securityAlertPolicyName",
  mapper: {
    serializedName: "securityAlertPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerSecurityAlertPolicyMapper
};
