

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  preset: 'ts-jest',
  rootDir: "./test",

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  // A map from regular expressions to paths to transformers
  transform: {},
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
  ],

};
