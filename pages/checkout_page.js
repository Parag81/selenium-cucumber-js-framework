const { By, Key } = require("selenium-webdriver");

class CheckoutPage {
    constructor(driver) {
        this.driver = driver;
        this.first_name = By.id("first-name");
        this.last_name = By.id("last-name");
        this.postal_code = By.id("postal-code");
        this.continue = By.id("continue");
        this.checkout_list = By.css("div.cart_list div.cart_item");
        this.item_total = By.className("summary_subtotal_label");
        this.tax = By.className("summary_tax_label");
        this.total = By.className("summary_total_label");
        this.finish = By.id("finish");
        this.order_completed = By.className("complete-header");
        this.order_completed_message = By.className("complete-text");
        this.back_home = By.id("back-to-products");
    }

    async setFirstName(first_name) {
        await this.driver.findElement(this.first_name).sendKeys(first_name);
    }

    async setLastName(last_name) {
        await this.driver.findElement(this.last_name).sendKeys(last_name);
    }

    async setPostalCode(postal_code) {
        await this.driver.findElement(this.postal_code).sendKeys(postal_code);
    }

    async clickContinue() {
        await this.driver.findElement(this.continue).click();
    }

    async getItemTotal() {
        const item_total = await this.driver.findElement(this.item_total).getText();
        return parseFloat(item_total.replace('Item total: $', ''));
    }

    async getTax() {
        const tax = await this.driver.findElement(this.tax).getText();
        return parseFloat(tax.replace('Tax: $', ''));
    }

    async getTotalAmount() {
        const total = await this.driver.findElement(this.total).getText();
        return parseFloat(total.replace('Total: $', ''));
    }

    async clickFinish() {
        await this.driver.findElement(this.finish).click();
    }

    async getOrderPlacedMessage() {
        return await this.driver.findElement(this.order_completed).getText() + " " + await this.driver.findElement(this.order_completed_message).getText();
    }

    async clickBackHome() {
        await this.driver.findElement(this.back_home).click();
    }

    async getCheckoutItems() {
        const checkout_list = await this.driver.findElements(this.checkout_list);

        let products = [];

        for(const item of checkout_list){
            const link = await item.findElement(
                By.className("inventory_item_name")
            );

            const name = await item.findElement(
                By.className("inventory_item_name")
            ).getText();

            const price = await item.findElement(
                By.className("inventory_item_price")
            ).getText();


            products.push({
                link,
                name,
                price
            })
        }
        return products;
    }

}

module.exports = CheckoutPage;