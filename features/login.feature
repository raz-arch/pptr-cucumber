Feature: Login Feature
As a user, I should be able to login to the application

Scenario: User can login to the application
Given user open login page
When user fill login form
And user click submit button
Then user expect to see application content
