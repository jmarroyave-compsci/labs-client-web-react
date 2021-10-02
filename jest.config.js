module.exports = {
  "verbose": false,
  "roots": [
    "<rootDir>",
  ],
  "modulePaths": [
    "<rootDir>/src/framework/",
    "<rootDir>/src/project/",
    "<rootDir>/src/",
  ],
  "moduleDirectories": [
    "node_modules",
    "utlis"
  ],
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!d3|(?!deck.gl)|ng-dynamic)"
  ],
  "testEnvironment": 'jest-environment-jsdom',
}
