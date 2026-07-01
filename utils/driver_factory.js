const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");


async function createDriver() {

    const options = new chrome.Options();
    options.addArguments("--incognito");

    // Enable headless mode only in GitHub Actions
    if (process.env.GITHUB_ACTIONS) {
        options.addArguments("--headless=new");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--window-size=1920,1080");
    }
    return await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();
}

module.exports = { createDriver };