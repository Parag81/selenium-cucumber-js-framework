Feature: Shopping Cart
  Scenario: Adding items in Cart and validating the products
    * User is on the login page
    * Enter the credentials to login as {"username": "standard_user", "password": "secret_sauce"}
    * Validate the user is logged in
    * Add the item "Sauce Labs Backpack" in the cart
    * Add the item "Sauce Labs Bike Light" in the cart
    * Open shopping cart
    * Validate the Cart page is opened
    * Validate the product "Sauce Labs Backpack" is available in cart
    * Validate the product "Sauce Labs Bolt T-Shirt" is not available in cart
    * Logout
