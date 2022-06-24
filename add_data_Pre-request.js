// Title of test
const download_test_title = pm.iterationData.get("Title");
pm.collectionVariables.set("title_of_test", download_test_title);

// Endpoint name
const name_endpoint = pm.iterationData.get("Section");
pm.collectionVariables.set("name_endpoint", name_endpoint);
var iteration_number = (pm.info.iteration + 1);

// Test Run ID
let test_run_id = pm.iterationData.get("Run ID");
let cat_run_id = test_run_id.substr(1);
pm.collectionVariables.set("test_run_id", cat_run_id);

// Test Case ID
const test_case_id = pm.iterationData.get("Case ID");
let cat_case_id = test_case_id.substr(1);
pm.collectionVariables.set("test_case_id", cat_case_id);

// Expected Code
const expected_code = pm.iterationData.get("Expected Result");
pm.collectionVariables.set("expected_code", expected_code);

// body_text
let body_text = pm.iterationData.get("Steps");
pm.collectionVariables.set("body_text", body_text);

function print() {
    console.log("iteration: " + iteration_number + " | Expected code: " + expected_code + " | Start testing: " + name_endpoint);
}

setTimeout(print, 2000);
