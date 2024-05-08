// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.shared.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 20000,
      include: ["test/**/*.spec.ts"],
      exclude: ["test/**/browser/*.spec.ts"],
    },
  }),
);
