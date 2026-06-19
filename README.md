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
project-root
│
├── features
│   └── login.feature
│
├── step-definitions
│   └── login_steps.js
│
├── pages
│   └── login_page.js
│
├── utils
│   └── driver_factory.js
│
├── reports
│
├── screenshots
│
└── package.json
```

## Test Scenarios

### Login Module

- Valid Login
- Invalid Login
- Locked User Login

### Inventory Module

- Verify Product Listing
- Verify Product Details
- Verify Product Filters


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