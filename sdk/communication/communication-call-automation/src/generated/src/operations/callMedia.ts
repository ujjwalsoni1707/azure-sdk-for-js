/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CallMedia } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CallAutomationApiClient } from "../callAutomationApiClient";
import {
  PlayRequest,
  CallMediaPlayOptionalParams,
  CallMediaCancelAllMediaOperationsOptionalParams,
  RecognizeRequest,
  CallMediaRecognizeOptionalParams,
  ContinuousDtmfRecognitionRequest,
  CallMediaStartContinuousDtmfRecognitionOptionalParams,
  CallMediaStopContinuousDtmfRecognitionOptionalParams,
  SendDtmfTonesRequest,
  CallMediaSendDtmfTonesOptionalParams,
  CallMediaSendDtmfTonesResponse,
} from "../models";

/** Class containing CallMedia operations. */
export class CallMediaImpl implements CallMedia {
  private readonly client: CallAutomationApiClient;

  /**
   * Initialize a new instance of the class CallMedia class.
   * @param client Reference to the service client
   */
  constructor(client: CallAutomationApiClient) {
    this.client = client;
  }

  /**
   * Plays audio to participants in the call.
   * @param callConnectionId The call connection id.
   * @param playRequest play request payload.
   * @param options The options parameters.
   */
  play(
    callConnectionId: string,
    playRequest: PlayRequest,
    options?: CallMediaPlayOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { callConnectionId, playRequest, options },
      playOperationSpec,
    );
  }

  /**
   * Cancel all media operations in a call.
   * @param callConnectionId The call connection id
   * @param options The options parameters.
   */
  cancelAllMediaOperations(
    callConnectionId: string,
    options?: CallMediaCancelAllMediaOperationsOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { callConnectionId, options },
      cancelAllMediaOperationsOperationSpec,
    );
  }

  /**
   * Recognize media from call.
   * @param callConnectionId The call connection id
   * @param recognizeRequest The media recognize request
   * @param options The options parameters.
   */
  recognize(
    callConnectionId: string,
    recognizeRequest: RecognizeRequest,
    options?: CallMediaRecognizeOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { callConnectionId, recognizeRequest, options },
      recognizeOperationSpec,
    );
  }

  /**
   * Start continuous Dtmf recognition by subscribing to tones.
   * @param callConnectionId The call connection id
   * @param continuousDtmfRecognitionRequest The continuous recognize request
   * @param options The options parameters.
   */
  startContinuousDtmfRecognition(
    callConnectionId: string,
    continuousDtmfRecognitionRequest: ContinuousDtmfRecognitionRequest,
    options?: CallMediaStartContinuousDtmfRecognitionOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { callConnectionId, continuousDtmfRecognitionRequest, options },
      startContinuousDtmfRecognitionOperationSpec,
    );
  }

  /**
   * Stop continuous Dtmf recognition by unsubscribing to tones.
   * @param callConnectionId The call connection id
   * @param continuousDtmfRecognitionRequest The continuous recognize request
   * @param options The options parameters.
   */
  stopContinuousDtmfRecognition(
    callConnectionId: string,
    continuousDtmfRecognitionRequest: ContinuousDtmfRecognitionRequest,
    options?: CallMediaStopContinuousDtmfRecognitionOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { callConnectionId, continuousDtmfRecognitionRequest, options },
      stopContinuousDtmfRecognitionOperationSpec,
    );
  }

  /**
   * Send dtmf tones.
   * @param callConnectionId The call connection id
   * @param sendDtmfTonesRequest The send dtmf tones request
   * @param options The options parameters.
   */
  sendDtmfTones(
    callConnectionId: string,
    sendDtmfTonesRequest: SendDtmfTonesRequest,
    options?: CallMediaSendDtmfTonesOptionalParams,
  ): Promise<CallMediaSendDtmfTonesResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, sendDtmfTonesRequest, options },
      sendDtmfTonesOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const playOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}:play",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.playRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const cancelAllMediaOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}:cancelAllMediaOperations",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const recognizeOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}:recognize",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.recognizeRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const startContinuousDtmfRecognitionOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}:startContinuousDtmfRecognition",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.continuousDtmfRecognitionRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const stopContinuousDtmfRecognitionOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}:stopContinuousDtmfRecognition",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.continuousDtmfRecognitionRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const sendDtmfTonesOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}:sendDtmfTones",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.SendDtmfTonesResult,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.sendDtmfTonesRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent,
  ],
  mediaType: "json",
  serializer,
};
