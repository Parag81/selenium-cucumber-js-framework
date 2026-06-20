# selenium-cucumber-js-framework
A Selenium WebDriver and Cucumber BDD automation framework built using JavaScript and Node.js for testing the SauceDemo e-commerce application.

Features:
- Selenium WebDriver
- Cucumber BDD
- Page Object Model (POM)
- Explicit Waits
- GitHub Integration
- Scalable Framework Structure

## Tech Stack

- JavaScript
- Node.js
- Selenium WebDriver
- Cucumber BDD
- Git
- GitHub

## Project Structure

```text
selenium-cucumber-js-framework
│
├── features
│   ├── login.feature
│   └── inventory.feature
│   └── cart.feature
│
├── step-definitions
│   ├── login_steps.js
│   └── inventory_steps.js
│   └── cart_steps.js
│
├── pages
│   ├── login_page.js
│   └── inventory_page.js
│   └── cart.js
│
├── support
│   └── hooks.js
│
├── utils
│   └── driver_factory.js
│
├── reports
│
├── screenshots
│
├── package.json
└── README.md
```

## Test Scenarios

### Login Module

- Valid Login
- Invalid Login
- Locked User Login

### Inventory Module

- Verify Product Listing
- Verify Product Details
- Verify Product Sorting
- Verify Product Count
- Add Product to Cart
- Verify Cart Count

### Cart Module

- Verify Products are Added in Cart


## Installation

```bash
git clone https://github.com/Parag81/selenium-cucumber-js-framework.git

cd selenium-cucumber-js-framework

npm install
```


## Execute Tests

```bash
npx cucumber-js
```


## Framework Design

This framework follows the Page Object Model (POM) design pattern to improve code reusability, maintainability, and scalability.

## Framework Components

### Feature Files
Contains BDD scenarios written using Gherkin syntax.

- login.feature
- inventory.feature
- cart.feature

### Step Definitions
Maps Gherkin steps to automation code.

- login_steps.js
- inventory_steps.js
- cart_steps.js

### Page Objects
Contains locators and reusable methods following the Page Object Model (POM).

- login_page.js
- inventory_page.js
- cart_page.js

### Hooks
Handles framework setup and teardown activities.

- Browser initialization
- Browser cleanup
- Pre and post test execution activities

### Utilities
Reusable helper classes and browser configuration.

- driver_factory.js

## Future Enhancements

- Screenshot Capture on Failure
- HTML Reports
- Data Driven Testing
- Cross Browser Testing
- GitHub Actions CI/CD Integration


## Author

Parag Khare

LinkedIn:
https://linkedin.com/in/parag-khare

GitHub:
https://github.com/Parag81