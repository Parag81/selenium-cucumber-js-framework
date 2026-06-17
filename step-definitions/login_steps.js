const { Given, When, Then } = require("@cucumber/cucumber");

const assert = require("assert");

const LoginPage = require("../pages/login_page");

const { createDriver } = require("../utils/driver_factory");

let driver;

Given(/User is on the login page$/,
    async function () {

        driver = await createDriver();

        await driver.get(
            "https://www.saucedemo.com"
        );
    });

Given(/Enter the credentials to login as (.*)$/,
    async function (login) {

        const credentials = JSON.parse(login);
        const login_page =
            new LoginPage(driver);

        await login_page.clearLoginField();

        await login_page.login(
            credentials.username,
            credentials.password,
        );

        console.log("Login successful");
});

Given(/Validate the user is logged in$/,
    async function () {
        const url = await driver.getCurrentUrl();

        console.log(url);

        assert.strictEqual(
            url,
            "https://www.saucedemo.com/inventory.html"
        )

        console.log("URL matches");

    });

Given(/Validate the error on the Login page with "(.*)"$/,
    async function (expected_error) {
            const login_page = await new LoginPage(driver);
            const error = await driver.findElement(await login_page.error);
            assert.strictEqual(
                await error.getText(),
                expected_error
            );
    });

Given(/Close the driver$/, async function () {
   await driver.quit();
});