module.exports =  {
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js', 'specs/**/*.js'],
    reporters: ['default'],
    moduleFileExtensions: ['js', 'json'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/specs/**/*.spec.*', '**/specs/**/*.test.*'],
    globals: {
        testTimeout: 50000,
      },
      verbose: true,
}
