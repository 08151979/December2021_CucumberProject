@LoginFeature
Feature: TechFios Billing Loging Functionality validation
and go on the Bank and Cash page and add account

 Background:
 Given User is on Techfios login page

Scenario Outline: User should be able to login valid credentials
When User enters username as "<UserName>"
When User enters password as "<Password>"
When User clicks signin button
When User should land on the dashboard page
When User click bank and cash button
When User click new account button
When User should  navigate to "<url>"
And User enters accountTitle as "<accountTitle>"
And User enters description as "<description>"
And User enters initial balance as"<balance>"
And User enters accountNumber as "<accountNumber>"
When User enters contactPerson as "<contactPerson>"
When User enters Phone as "<Phone>"
When User enters internetBankingUrlr as "<InternetBankingURL>"
Then User click submit button


   Examples:
   |UserName         |Password|url                                             |title             |accountTitle   |description    |balance |accountNumber|contactPerson|Phone       |InternetBankingURL|
   |demo@techfios.com|abc123  | https://techfios.com/billing/?ng=accounts/add/|Accounts- iBilling |US Bank Account|PracticeBDDCode| 230055 |10033        |Sangeeta     |800-234-000 |www.yahoo.com     |