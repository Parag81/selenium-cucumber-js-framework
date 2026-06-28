const { Before, After , Status, setDefaultTimeout} = require('@cucumber/cucumber');
const { captureScreenshot } = require("../utils/screenshotUtil");
const { createDriver } = require('../utils/driver_factory');

setDefaultTimeout(30000);

Before(async function () {
    this.driver = await createDriver();
});

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {

        const filePath = await captureScreenshot(
            this.driver,
            scenario.pickle.name
        );

        console.log(`Screenshot saved at: ${filePath}`);
    }
    await this.driver.quit();
});