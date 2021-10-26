module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest/lib/setup.js'],
  verbose: false,
  roots: [
    "<rootDir>",
  ],
  modulePaths: [
    "<rootDir>/src/components",
    "<rootDir>/src",
    "<rootDir>",
  ],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/tests/jest/lib/__mocks__/fileMock.js",
    "\\.(md|html)$": "<rootDir>/src/tests/jest/lib/__mocks__/fileMock.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic|internmap|d3)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/src/tests/cypress"
  ],
  snapshotSerializers: ["@emotion/jest/serializer"],
};

