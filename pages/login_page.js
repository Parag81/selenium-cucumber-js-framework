const { By } = require("selenium-webdriver");

class LoginPage {

    constructor(driver) {
        this.driver = driver;
    }

    async login(username, password) {

        await this.driver.findElement(
            By.id("user-name")
        ).sendKeys(username);
        await this.driver.sleep(1000);

        await this.driver.findElement(
            By.id("password")
        ).sendKeys(password);
        await this.driver.sleep(1000);

        await this.driver.findElement(
            By.id("login-button")
        ).click();
        await this.driver.sleep(1000);
    }

}

module.exports = LoginPage;