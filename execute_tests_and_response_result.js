var test_title = pm.collectionVariables.replaceIn("{{title_of_test}}");
var wersja_mastera = pm.collectionVariables.replaceIn("{{STG_version}}");
var TestRail_url = pm.collectionVariables.replaceIn("{{tr_url}}?/api/v2/add_result_for_case/{{test_run_id}}/{{test_case_id}}");
var status_code = pm.response.code;
var expected_code = pm.collectionVariables.replaceIn("{{expected_code}}");
var tr_session = pm.environment.replaceIn("{{tr_session}}");

pm.test(test_title + " and Verify status code: " + status_code, () => {
    pm.expect(pm.response.code).to.eql(parseInt(expected_code));
})

function ExecuteResult() {
    if (status_code == expected_code) {
    var wynik = 1;
    var message = "Test passed";
    }
    else {
    pm.expect(responseBody);
    console.log(responseBody);
    let odp = responseBody;
    var wynik = 5;
    var message = ("Test failed, expected code: " + expected_code + "," + "\n" + "but got status code: " + status_code + "." + "\n" + "Response Body:" + "\n" + String(odp));
    }

    const result = {
        url: TestRail_url,
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
            'accept': '*/*',
            'cookie': tr_session
            },

        body: {
            mode: 'raw',
            raw: JSON.stringify({"status_id": wynik, "version": wersja_mastera, "comment": message}),
        }

    };
    pm.sendRequest(result, (error, response) => {
    console.log(error ? error : response.json());
    });
}
setTimeout(ExecuteResult, 2000);

function ClearVariables() {
    pm.collectionVariables.unset("title_of_test");
    pm.collectionVariables.unset("name_endpoint");
    pm.collectionVariables.unset("test_run_id");
    pm.collectionVariables.unset("test_case_id");
    pm.collectionVariables.unset("expected_code");
    pm.collectionVariables.unset("body_text");
}
setTimeout(ClearVariables, 2000);
