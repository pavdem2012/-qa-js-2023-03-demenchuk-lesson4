module.exports =  {
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js', 'specs/**/*.js'],
    reporters: ['default',
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Отчет о прохождении тестов",
            "includeFailureMsg": true,

        }]
    ],
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
