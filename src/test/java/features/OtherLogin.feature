@LoginFeature
Feature: TechFios Billing Loging Functionality validation

@OtherSecenario1 @Smoke
Scenario: User should be able to login valid credentials (Other)
Given User is on Techfios login page
When User enters username as "demo@techfios.com"
When User enters password as "abc123"
When User clicks signin button
Then User should land on the dashboard page

@OtherSecenario2 @Smoke
Scenario: User should not be able to login invalid credentials (Other)
Given User is on Techfios login page
When User enters username as "demo@techfios.com"
When User enters password as "abc123"
When User clicks signin button
Then User should land on the dashboard page