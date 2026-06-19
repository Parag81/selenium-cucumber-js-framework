Feature: Inventory
  Scenario: Validate the inventory items count
    * User is on the login page
    * Enter the credentials to login as {"username": "standard_user", "password": "secret_sauce"}
    * Validate the user is logged in
    * Validate the count of items in inventory is 6
    * Validate that the price for item Sauce Labs Backpack is $29.99
    * Sort the Inventory list with filter NAME_ASC and validate the list
    * Sort the Inventory list with filter NAME_DESC and validate the list
    * Sort the Inventory list with filter PRICE_ASC and validate the list
    * Sort the Inventory list with filter PRICE_DESC and validate the list