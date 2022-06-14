$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TechfiosLogin.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios Billing Loging Functionality validation",
  "description": "and go on the Bank and Cash page and add account",
  "id": "techfios-billing-loging-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should be able to login valid credentials",
  "description": "",
  "id": "techfios-billing-loging-functionality-validation;user-should-be-able-to-login-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on the dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User click new account button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User should  navigate to \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters initial balance as\"\u003cbalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters Phone as \"\u003cPhone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters internetBankingUrlr as \"\u003cInternetBankingURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "techfios-billing-loging-functionality-validation;user-should-be-able-to-login-valid-credentials;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "url",
        "title",
        "accountTitle",
        "description",
        "balance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "InternetBankingURL"
      ],
      "line": 27,
      "id": "techfios-billing-loging-functionality-validation;user-should-be-able-to-login-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "https://techfios.com/billing/?ng\u003daccounts/add/",
        "Accounts- iBilling",
        "US Bank Account",
        "PracticeBDDCode",
        "230055",
        "10033",
        "Sangeeta",
        "800-234-000",
        "www.yahoo.com"
      ],
      "line": 28,
      "id": "techfios-billing-loging-functionality-validation;user-should-be-able-to-login-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 5253994600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should be able to login valid credentials",
  "description": "",
  "id": "techfios-billing-loging-functionality-validation;user-should-be-able-to-login-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on the dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User click new account button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User should  navigate to \"https://techfios.com/billing/?ng\u003daccounts/add/\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters accountTitle as \"US Bank Account\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters description as \"PracticeBDDCode\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters initial balance as\"230055\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters accountNumber as \"10033\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters contactPerson as \"Sangeeta\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters Phone as \"800-234-000\"",
  "matchedColumns": [
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters internetBankingUrlr as \"www.yahoo.com\"",
  "matchedColumns": [
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click submit button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enter_Username(String)"
});
formatter.result({
  "duration": 30247718800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enter_password_as(String)"
});
formatter.result({
  "duration": 3145983500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 4131652500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_the_dashboard_page()"
});
formatter.result({
  "duration": 14849000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_bank_and_cash_button()"
});
formatter.result({
  "duration": 3112937700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_new_account_button()"
});
formatter.result({
  "duration": 553441100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://techfios.com/billing/?ng\u003daccounts/add/",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_should_navigate_to_and_title_contains(String)"
});
formatter.result({
  "duration": 243480500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US Bank Account",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountTitle_as(String)"
});
formatter.result({
  "duration": 106158300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PracticeBDDCode",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_as(String)"
});
formatter.result({
  "duration": 163333800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "230055",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_initial_balance_as(String)"
});
formatter.result({
  "duration": 179162700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10033",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountNumber_as(String)"
});
formatter.result({
  "duration": 198639400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sangeeta",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactPerson_as(String)"
});
formatter.result({
  "duration": 169053300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "800-234-000",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_Phone_as(String)"
});
formatter.result({
  "duration": 162177200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.yahoo.com",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_internetBankingUrlr_as(String)"
});
formatter.result({
  "duration": 187717800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_submit_button()"
});
formatter.result({
  "duration": 1209387700,
  "status": "passed"
});
});