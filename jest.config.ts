// jest.config.ts
import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    moduleNameMapper: {
      "\\.(scss|sass|css)$": "identity-obj-proxy",
    },
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };
};
