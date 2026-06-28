Feature: End to End Coverage
  Scenario: Login in the application, add product to the cart, checkout the product
    * User is on the login page
    * Enter the credentials to login as {"username": "standard_user", "password": "secret_sauce"}
    * Validate the user is logged in
    * Add the item "Sauce Labs Backpack" in the cart
    * Open shopping cart
    * Validate the product "Sauce Labs Backpack" is available in cart
    * Go to checkout
    * Fill the details in the checkout page with "{"first_name": "Parag", "last_name": "Khare", "postal_code": "1000"}"
    * Click on the Finish button
    * Validate the Order placed message "Thank you for your order! Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    * Go back to the products
    * Validate the Inventory page is displayed
    * Logout
