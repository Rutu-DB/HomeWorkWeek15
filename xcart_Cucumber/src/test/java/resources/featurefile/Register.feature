@Smoke,@Regression
Feature:Register
  As a User I want to register into xcart Website



  Scenario:Verify user should be able to register successfully

    Given I am on Sign Up Page
    And I click on new Account Link
    And I enter valid email
    And I enter password
    And I enter confirm password
    When I click on Create Button
    Then I register successfully

