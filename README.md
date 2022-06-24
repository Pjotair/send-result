# API  Tests (in Postman along with reporting results to TestRail).
This directory contains execute code to tools for API tests based on data from TestRail test cases and Postman tests collection.

The primary goal of this project is to automate the saving of test results, from API tests to TestRail, to increase test reporting efficiency.
The collections and test scripts have been prepared so that the tester, after mastering the basic Postman and TestRail skills, can perform API tests on his own.

## Requirements
I recommend using this tool with Postman Version 9.21.2+. We are using data files from .CSV format, downloaded from Test Run in TestRail.
The test data use JSON syntax or string.
<br><b>Expected Results</b> - includes the expected status code.
<br><b>Steps</b> - Contains JSON or string.
<br><b>Preconditions</b> - sometimes this field is used to specify query parameters.

## Set-Up Instructions
1. Copy the code to Postman cards

Pre-request card from `add_data_Pre-request.js`

Tests card from `execute_tests_and_response_result.js`

2. Create a collection of requests in Postman and adjust the environment and variables to the examples in the copied code.

## Usage

1. Prepare a Test Run, with the cases in TestRail

2. Use the Collection Runner to perform the tests. Only one Request per Runner is allowed to start. Import iterated data from .CSV files. <br>Mark `Export the following sections only:` `Title`, `Case ID`, `Expected Result`, `Preconditions`, `Run ID`, `Section`, `Steps`. <br><b>Note:</b> If you modify your tests be sure to export this section to a .CSV file from Test Run.
