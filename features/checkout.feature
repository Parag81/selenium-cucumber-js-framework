Feature: Checkout
  Scenario: Check out the items that are in the cart and validate the order is places
    * User is on the login page
    * Enter the credentials to login as {"username": "standard_user", "password": "secret_sauce"}
    * Validate the user is logged in
    * Add the item "Sauce Labs Backpack" in the cart
    * Add the item "Sauce Labs Bike Light" in the cart
    * Open shopping cart
    * Go to checkout
    * Fill the details in the checkout page with "{"first_name": "Parag", "last_name": "Khare", "postal_code": "1000"}"
    * Validate the UI item total, tax and total amount is as per the items added
    * Click on the Finish button
    * Validate the Order placed message "Thank you for your order! Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    * Go back to the products
    * Validate the Inventory page is displayed
    * Logout
