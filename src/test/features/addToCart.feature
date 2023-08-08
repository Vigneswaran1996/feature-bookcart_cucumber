Feature : Purchasing a product

    Background:
     Given User navigates to the application
     And User click on the login link.

    Scenario Outline:
    And User should enter the username as "<username>" 
    And User should enter the password as "<password>" 
    And User search for a "<book>"
    When User add the book to the cart
    Then the cart badge should get updated

    Examples:
    |username||password||book|
    |vignesh19||Vignesh@19||Roomies|
