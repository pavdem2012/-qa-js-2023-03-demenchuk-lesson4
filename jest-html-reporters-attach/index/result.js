window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":1,"numPassedTestSuites":1,"numPassedTests":43,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":2,"numTotalTests":44,"startTime":1685350912375,"success":false,"testResults":[{"numFailingTests":1,"numPassingTests":20,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1685350923252,"runtime":10825,"slow":true,"start":1685350912427},"testFilePath":"/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/specs/api.test.js","failureMessage":"  ● API tests with books › should can put book\n\n    expect(received).toEqual(expected) // deep equality\n\n    Expected: \"9781449325862\"\n    Received: \"9781449331818\"\n\n      279 |         expect(response.data.userId).toEqual(UUID);\n      280 |         expect(response.data.username).toEqual(validRequestData.userName);\n    > 281 |         expect(response.data.books[0].isbn).toEqual(ISBN0);\n          |                                             ^\n      282 |         expect(response.data.books[0].title).toEqual(expect.any(String));\n      283 |         expect(response.data.books[0].subTitle).toEqual(expect.any(String));\n      284 |         expect(response.data.books[0].author).toEqual(expect.any(String));\n\n      at toEqual (specs/api.test.js:281:45)\n      at call (specs/api.test.js:2:1)\n      at Generator.tryCatch (specs/api.test.js:2:1)\n      at Generator._invoke [as next] (specs/api.test.js:2:1)\n      at asyncGeneratorStep (specs/api.test.js:2:1)\n      at asyncGeneratorStep (specs/api.test.js:2:1)\n","testResults":[{"ancestorTitles":["API tests create user"],"duration":528,"failureMessages":[],"fullName":"API tests create user error message when sending  no valid password","status":"passed","title":"error message when sending  no valid password"},{"ancestorTitles":["API tests create user"],"duration":442,"failureMessages":[],"fullName":"API tests create user should create a new user","status":"passed","title":"should create a new user"},{"ancestorTitles":["API tests create user"],"duration":362,"failureMessages":[],"fullName":"API tests create user should return error message when sending existing userName","status":"passed","title":"should return error message when sending existing userName"},{"ancestorTitles":["API tests generate token"],"duration":356,"failureMessages":[],"fullName":"API tests generate token returns an error message when body are not provided","status":"passed","title":"returns an error message when body are not provided"},{"ancestorTitles":["API tests generate token"],"duration":528,"failureMessages":[],"fullName":"API tests generate token Should generate token for valid user","status":"passed","title":"Should generate token for valid user"},{"ancestorTitles":["API tests with books"],"duration":353,"failureMessages":[],"fullName":"API tests with books should get a book list","status":"passed","title":"should get a book list"},{"ancestorTitles":["API tests with books"],"duration":369,"failureMessages":[],"fullName":"API tests with books should can post book","status":"passed","title":"should can post book"},{"ancestorTitles":["API tests with books"],"duration":373,"failureMessages":[],"fullName":"API tests with books should can post book with 400 status code","status":"passed","title":"should can post book with 400 status code"},{"ancestorTitles":["API tests with books"],"duration":361,"failureMessages":[],"fullName":"API tests with books should can post book with 401 status code","status":"passed","title":"should can post book with 401 status code"},{"ancestorTitles":["API tests with books"],"duration":425,"failureMessages":["Error: expect(received).toEqual(expected) // deep equality\n\nExpected: \"9781449325862\"\nReceived: \"9781449331818\"\n    at toEqual (/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/specs/api.test.js:281:45)\n    at call (/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/specs/api.test.js:2:1)\n    at Generator.tryCatch (/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/specs/api.test.js:2:1)\n    at Generator._invoke [as next] (/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/specs/api.test.js:2:1)\n    at asyncGeneratorStep (/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/specs/api.test.js:2:1)\n    at asyncGeneratorStep (/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/specs/api.test.js:2:1)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"API tests with books should can put book","status":"failed","title":"should can put book"},{"ancestorTitles":["API tests with books"],"duration":407,"failureMessages":[],"fullName":"API tests with books should can put book with 400 status code","status":"passed","title":"should can put book with 400 status code"},{"ancestorTitles":["API tests with books"],"duration":370,"failureMessages":[],"fullName":"API tests with books should can put book with 401 status code","status":"passed","title":"should can put book with 401 status code"},{"ancestorTitles":["API tests with books"],"duration":340,"failureMessages":[],"fullName":"API tests with books shoud can get book by isbn","status":"passed","title":"shoud can get book by isbn"},{"ancestorTitles":["API tests with books"],"duration":340,"failureMessages":[],"fullName":"API tests with books shoud can get book by isbn  with 400 status code","status":"passed","title":"shoud can get book by isbn  with 400 status code"},{"ancestorTitles":["API tests with books"],"duration":424,"failureMessages":[],"fullName":"API tests with books should can delete book","status":"passed","title":"should can delete book"},{"ancestorTitles":["API tests with books"],"duration":402,"failureMessages":[],"fullName":"API tests with books should can delete book with 400 status code","status":"passed","title":"should can delete book with 400 status code"},{"ancestorTitles":["API tests with books"],"duration":356,"failureMessages":[],"fullName":"API tests with books should can delete book with 401 status code","status":"passed","title":"should can delete book with 401 status code"},{"ancestorTitles":["API tests clearing user data"],"duration":361,"failureMessages":[],"fullName":"API tests clearing user data is the user authorized","status":"passed","title":"is the user authorized"},{"ancestorTitles":["API tests clearing user data"],"duration":358,"failureMessages":[],"fullName":"API tests clearing user data should get a info about user by UUID","status":"passed","title":"should get a info about user by UUID"},{"ancestorTitles":["API tests clearing user data"],"duration":413,"failureMessages":[],"fullName":"API tests clearing user data clearing user data","status":"passed","title":"clearing user data"},{"ancestorTitles":["API tests clearing user data"],"duration":353,"failureMessages":[],"fullName":"API tests clearing user data delete check user by UUID","status":"passed","title":"delete check user by UUID"}]},{"numFailingTests":0,"numPassingTests":23,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1685350923770,"runtime":509,"slow":false,"start":1685350923261},"testFilePath":"/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/specs/app.spec.js","failureMessage":null,"testResults":[{"ancestorTitles":["nameIsValid unit tests coverage"],"duration":3,"failureMessages":[],"fullName":"nameIsValid unit tests coverage test loads without error","status":"passed","title":"test loads without error"},{"ancestorTitles":["nameIsValid unit tests coverage"],"duration":0,"failureMessages":[],"fullName":"nameIsValid unit tests coverage correct operand input","status":"passed","title":"correct operand input"},{"ancestorTitles":["nameIsValid unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"nameIsValid unit tests coverage throw error when operand lenth < 2","status":"passed","title":"throw error when operand lenth < 2"},{"ancestorTitles":["nameIsValid unit tests coverage"],"duration":9,"failureMessages":[],"fullName":"nameIsValid unit tests coverage throw error when operand includes space character","status":"passed","title":"throw error when operand includes space character"},{"ancestorTitles":["nameIsValid unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"nameIsValid unit tests coverage should throw an error if the operand is not a string","status":"passed","title":"should throw an error if the operand is not a string"},{"ancestorTitles":["fullTrim unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"fullTrim unit tests coverage test loads without error","status":"passed","title":"test loads without error"},{"ancestorTitles":["fullTrim unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"fullTrim unit tests coverage correct operand including space characters","status":"passed","title":"correct operand including space characters"},{"ancestorTitles":["fullTrim unit tests coverage"],"duration":0,"failureMessages":[],"fullName":"fullTrim unit tests coverage correct operand without space character","status":"passed","title":"correct operand without space character"},{"ancestorTitles":["fullTrim unit tests coverage"],"duration":2,"failureMessages":[],"fullName":"fullTrim unit tests coverage correct operand if input contaihs empty string, null or undefined","status":"passed","title":"correct operand if input contaihs empty string, null or undefined"},{"ancestorTitles":["fullTrim unit tests coverage"],"duration":3,"failureMessages":[],"fullName":"fullTrim unit tests coverage should throw an error if the operand is not a string","status":"passed","title":"should throw an error if the operand is not a string"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"getTotal function unit tests coverage test loads without error","status":"passed","title":"test loads without error"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":0,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns 100 when given items =  [[Object]] and discount = 0","status":"passed","title":"returns 100 when given items =  [[Object]] and discount = 0"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns 10 when given items =  [[Object]] and discount = 0","status":"passed","title":"returns 10 when given items =  [[Object]] and discount = 0"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":0,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns 100 when given items =  [[Object], [Object]] and discount = 0","status":"passed","title":"returns 100 when given items =  [[Object], [Object]] and discount = 0"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns 0 when given items =  [[Object]] and discount = 0","status":"passed","title":"returns 0 when given items =  [[Object]] and discount = 0"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":0,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns 90 when given items =  [[Object]] and discount = 10","status":"passed","title":"returns 90 when given items =  [[Object]] and discount = 10"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":0,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns 0 when given items =  [[Object]] and discount = 100","status":"passed","title":"returns 0 when given items =  [[Object]] and discount = 100"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"getTotal function unit tests coverage throws an error when discount is not a number","status":"passed","title":"throws an error when discount is not a number"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"getTotal function unit tests coverage throws an error when discount is negative","status":"passed","title":"throws an error when discount is negative"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns 0 when discount is  equal to 100","status":"passed","title":"returns 0 when discount is  equal to 100"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":0,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns the total without discount when items have 0 quantity","status":"passed","title":"returns the total without discount when items have 0 quantity"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":0,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns the total without discount when discount is 0","status":"passed","title":"returns the total without discount when discount is 0"},{"ancestorTitles":["getTotal function unit tests coverage"],"duration":1,"failureMessages":[],"fullName":"getTotal function unit tests coverage returns the total with discount when items have quantity greater than 0 and discount is between 0 and 100","status":"passed","title":"returns the total with discount when items have quantity greater than 0 and discount is between 0 and 100"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":true,"collectCoverage":true,"collectCoverageFrom":["./src/**"],"coverageDirectory":"/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":1,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/node_modules/jest-html-reporters/index.js",{"publicPath":"./jest-html-report","filename":"index.html"}],["/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/node_modules/jest-html-reporter/dist/index.js",{"pageTitle":"Отчет о прохождении тестов","includeFailureMsg":true}],["/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/node_modules/jest-allure/dist/index.js",{}]],"rootDir":"/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4","runTestsByPath":false,"seed":610109533,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/home/runner/work/qa-js-2023-03-demenchuk-lesson4/qa-js-2023-03-demenchuk-lesson4/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"none","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false,"coverageLinkPath":"../coverage/lcov-report/index.html"},"endTime":1685350923775,"_reporterOptions":{"publicPath":"./jest-html-report","filename":"index.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false},"logInfoMapping":{},"attachInfos":{}})