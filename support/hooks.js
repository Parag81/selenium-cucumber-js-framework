const { Before, After } = require('@cucumber/cucumber');
const { createDriver } = require('../utils/driver_factory');

const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(30000);

Before(async function () {
    this.driver = await createDriver();
});

After(async function () {
    await this.driver.quit();
});