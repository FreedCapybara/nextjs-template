module.exports = {
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/'
  ],
  moduleNameMapper: {
    "@components(.*)$": "<rootDir>/components/$1",
    "@pages(.*)$": "<rootDir>/pages/$1",
    "@public(.*)$": "<rootDir>/public/$1"
  },
  coverageThreshold: {
    global: {
      statements: -10, // can have a maximum of 10 un-covered statements
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
};
