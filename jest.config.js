module.exports =  {
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js', 'specs/**/*.js'],
    // reporters: ['default',
    //     ["./node_modules/jest-html-reporter", {
    //         "pageTitle": "Отчет о прохождении тестов",
    //         "includeFailureMsg": true,

    //     }]
    // ],
    reporters: ['default',
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Отчет о прохождении тестов",
            "includeFailureMsg": true,
            }],
            'jest-allure'
        ],
    testRunner: 'jest-jasmine2',
    setupFilesAfterEnv: [
        'jest-extended',
        'jest-allure/dist/setup'
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
