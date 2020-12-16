@Regression
Feature: Shop By Category Page
  As a user I want to navigate Shop By Category Page Successfully
  Scenario: Verify User can navigate Shop By Category Page Successfully
    Given  I am on eBay Home Page
    And I click on Shop By Category Link
    When I click on Computer And Tablet Link
    Then I navigate to Computer Tablet And Network Hardware Page
    When I click on Apple Laptop Link
    Then I navigate to Apple Laptop Page


    Scenario: Verify User can navigate to Mac Book Page Successfully
      Given I am on Apple Laptop Page
      And I select Release Year
      And I Click On RAM check Box
      And I click On Hard Drive Check Box
      And I click on Buy It Now Tab
      And I Sort Highest to Lowest by Price option
      And I select MacBook
      And I amend Qty to2
      And I click on Add to Cart Button
      Then I click on Go To Cart Button
      When I click on Remove Link
      Then I successfully empty the basket


