Feature: Bookcart application tests

  Background:
    Given User navigates to the application
    And User click on the login link.

  Scenario: Login should be success
    And User enter the username as "vignesh19"
    And User enter the password as "Vignesh@19"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the username as "test12"
    Given User enter the password as "Test1234@19"
    When User click on the login button
    Then Login should fail   