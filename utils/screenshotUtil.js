const fs = require("fs");
const path = require("path");

async function captureScreenshot(driver, scenarioName) {
    const image = await driver.takeScreenshot();

    const screenshotDir = path.join(__dirname, "..", "reports", "screenshots");

    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const fileName = `${scenarioName.replace(/[^a-zA-Z0-9]/g, "_")}_${Date.now()}.png`;

    const filePath = path.join(screenshotDir, fileName);

    fs.writeFileSync(filePath, image, "base64");

    return filePath;
}

module.exports = {
    captureScreenshot
};