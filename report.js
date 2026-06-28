const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./reports/cucumber-report",
    reportPath: "./reports/html-report",

    pageTitle: "SauceDemo Automation Report",
    reportName: "SauceDemo Selenium Automation",

    displayDuration: true,
    openReportInBrowser: true,

    metadata: {
        browser: {
            name: "chrome",
            version: "149"
        },
        device: "Local",
        platform: {
            name: "Windows"
        }
    }
});