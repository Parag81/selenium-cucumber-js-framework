Feature: Inventory
  Scenario: Validate the inventory items count and sorting functionalities
    * User is on the login page
    * Enter the credentials to login as {"username": "standard_user", "password": "secret_sauce"}
    * Validate the user is logged in
    * Validate the count of items in inventory is 6
    * Validate that the price for item Sauce Labs Backpack is $29.99
    * Sort the Inventory list with filter NAME_ASC and validate the list
    * Sort the Inventory list with filter NAME_DESC and validate the list
    * Sort the Inventory list with filter PRICE_ASC and validate the list
    * Sort the Inventory list with filter PRICE_DESC and validate the list
    * Logout

  Scenario: Add items in cart and validate the count in the inventory page
    * User is on the login page
    * Enter the credentials to login as {"username": "standard_user", "password": "secret_sauce"}
    * Validate the user is logged in
    * Add the item "Sauce Labs Backpack" in the cart
    * Add the item "Sauce Labs Bike Light" in the cart
    * Validate the cart count in Inventory page as 2
    * Add the item "Test.allTheThings() T-Shirt (Red)" in the cart
    * Validate the cart count in Inventory page as 3
    * Logout