/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  EncryptionScope,
  EncryptionScopesListOptionalParams,
  EncryptionScopesPutOptionalParams,
  EncryptionScopesPutResponse,
  EncryptionScopesPatchOptionalParams,
  EncryptionScopesPatchResponse,
  EncryptionScopesGetOptionalParams,
  EncryptionScopesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EncryptionScopes. */
export interface EncryptionScopes {
  /**
   * Lists all the encryption scopes available under the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: EncryptionScopesListOptionalParams
  ): PagedAsyncIterableIterator<EncryptionScope>;
  /**
   * Synchronously creates or updates an encryption scope under the specified storage account. If an
   * encryption scope is already created and a subsequent request is issued with different properties,
   * the encryption scope properties will be updated per the specified request.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage account.
   *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
   *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
   *                            letter or number.
   * @param encryptionScope Encryption scope properties to be used for the create or update.
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    encryptionScope: EncryptionScope,
    options?: EncryptionScopesPutOptionalParams
  ): Promise<EncryptionScopesPutResponse>;
  /**
   * Update encryption scope properties as specified in the request body. Update fails if the specified
   * encryption scope does not already exist.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage account.
   *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
   *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
   *                            letter or number.
   * @param encryptionScope Encryption scope properties to be used for the update.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    encryptionScope: EncryptionScope,
    options?: EncryptionScopesPatchOptionalParams
  ): Promise<EncryptionScopesPatchResponse>;
  /**
   * Returns the properties for the specified encryption scope.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage account.
   *                            Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case
   *                            letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a
   *                            letter or number.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    options?: EncryptionScopesGetOptionalParams
  ): Promise<EncryptionScopesGetResponse>;
}
