const { Given, When, Then } = require("@cucumber/cucumber");

const assert = require("assert");

const LoginPage = require("../pages/login_page");

const { createDriver } = require("../utils/driver_factory");

let driver;

Given("user is on login page",
    async function () {

        driver = await createDriver();

        await driver.get(
            "https://www.saucedemo.com"
        );
    });

Given("user enters valid credentials",
    async function () {

        const loginPage =
            new LoginPage(driver);

        await loginPage.login(
            "standard_user",
            "secret_sauce"
        );

        console.log("Login successful");
});

Given("user should be logged in",
    async function () {

        const url =
            await driver.getCurrentUrl();

        console.log(url);

        assert.strictEqual(
            url,
            "https://www.saucedemo.com/inventory.html"
        )

        console.log("URL mactches");

        await driver.quit();
    });