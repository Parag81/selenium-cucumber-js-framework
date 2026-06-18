const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const options = new chrome.Options();

options.addArguments("--incognito");

async function createDriver() {
    return await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();
}

module.exports = { createDriver };