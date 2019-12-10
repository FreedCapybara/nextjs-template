module.exports = {
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/'
  ],
  moduleNameMapper: { // https://alexjover.com/blog/enhance-jest-configuration-with-module-aliases/
    "@components(.*)$": "<rootDir>/components/$1",
    "@pages(.*)$": "<rootDir>/pages/$1",
    "@public(.*)$": "<rootDir>/public/$1",
    "@lang(.*)$": "<rootDir>/lang/$1",
    "@lib(.*)$": "<rootDir>/lib/$1",
    "@redux(?!-)(.*)$": "<rootDir>/redux/$1",
    "@test(.*)$": "<rootDir>/test/$1"
  },
  coverageThreshold: {
    global: {
      statements: -10, // maximum 10 un-covered statements
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.js',
    '<rootDir>/components/**/*.js',
    '<rootDir>/lib/**/*.js',
    '<rootDir>/redux/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/pages/_app.js',
    '<rootDir>/pages/_document.js',
    '<rootDir>/test/wrapper.js',
  ]
};
