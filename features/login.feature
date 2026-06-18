Feature: Login in the website and validate the Login scenarios
  Scenario: Validate Successful Login
    * User is on the login page
    * Enter the credentials to login as {"username": "standard_user", "password": "secret_sauce"}
    * Validate the user is logged in

  Scenario: Validate the Scenarios for Invalid Username and Password
    * User is on the login page

    * Enter the credentials to login as {"username": "invalid_username", "password": "secret_sauce"}
    * Validate the error on the Login page with "Epic sadface: Username and password do not match any user in this service"

    * Enter the credentials to login as {"username": "standard_user", "password": "invalid_password"}
    * Validate the error on the Login page with "Epic sadface: Username and password do not match any user in this service"

    * Enter the credentials to login as {"username": "", "password": "secret_sauce"}
    * Validate the error on the Login page with "Epic sadface: Username is required"

    * Enter the credentials to login as {"username": "standard_user", "password": ""}
    * Validate the error on the Login page with "Epic sadface: Password is required"

    * Enter the credentials to login as {"username": "locked_out_user", "password": "secret_sauce"}
    * Validate the error on the Login page with "Epic sadface: Sorry, this user has been locked out."

