@Sanity,@Regression
Feature: Login
  As a user I want to Login successfully


  Scenario: Verify user should be able to Login successfully
    Given I am on xcart Sign In page
    And I enter email Id
    And I enter registered password
    When I click on Login Button
    Then I can Login Successfully
