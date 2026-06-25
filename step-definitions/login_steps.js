const { Given } = require("@cucumber/cucumber");

const assert = require("assert");

const LoginPage = require("../pages/login_page");

Given(/User is on the login page$/,
    async function () {

        await this.driver.get(
            "https://www.saucedemo.com"
        );
    });

Given(/Enter the credentials to login as (.*)$/,
    async function (login) {
        const credentials = JSON.parse(login);
        const login_page =
            new LoginPage(this.driver);

        await login_page.clearLoginField();

        await login_page.login(
            credentials.username,
            credentials.password,
        );
        console.log("Login successful");
});

Given(/Validate the user is logged in$/,
    async function () {
        const url = await this.driver.getCurrentUrl();
        assert.strictEqual(
            url,
            "https://www.saucedemo.com/inventory.html"
        )
        console.log("URL matches");

    });

Given(/Validate the error on the Login page with "(.*)"$/,
    async function (expected_error) {
        const login_page = await new LoginPage(this.driver);
        const error = await this.driver.findElement(await login_page.error);
        assert.strictEqual(
            await error.getText(),
            expected_error
        );
    });