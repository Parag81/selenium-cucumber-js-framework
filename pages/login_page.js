const { By, Key } = require("selenium-webdriver");

class LoginPage {

    constructor(driver) {
        this.driver = driver;
        this.username = By.id("user-name");
        this.password = By.id("password");
        this.login_button = By.id("login-button");
        this.error = By.css('h3[data-test="error"]');
    }

    async login(username, password) {

        await this.driver.findElement(
            this.username
        ).sendKeys(username);
        await this.driver.sleep(1000);

        await this.driver.findElement(
            this.password
        ).sendKeys(password);
        await this.driver.sleep(1000);

        await this.driver.findElement(
            this.login_button
        ).click();
        await this.driver.sleep(1000);
    }

    async clearLoginField(){
        await this.driver.findElement(
            this.username
        ).sendKeys(Key.CONTROL, 'a', Key.DELETE);

        await this.driver.findElement(
            this.password
        ).sendKeys(Key.CONTROL, 'a', Key.DELETE);

        await this.driver.sleep(1000);
    }

}

module.exports = LoginPage;