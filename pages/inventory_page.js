const { By, Key } = require("selenium-webdriver");

class InventoryPage{
    constructor(driver){
        this.driver = driver;
        this.items = By.css("div.inventory_list div.inventory_item");
    }

    async getItemsCount() {
        const items = await this.driver.findElements(this.items);
        return items.length;
    }

    async getInventoryItems() {
        const inventory_items = await this.driver.findElements(this.items);

        let products = [];

        for(const item of inventory_items){
            const link = await item.findElement(
                By.className("inventory_item_name")
            );

            const name = await item.findElement(
                By.className("inventory_item_name")
            ).getText();

            const price = await item.findElement(
                By.className("inventory_item_price")
            ).getText();

            const add_to_cart = await item.findElement(
                By.css("div.pricebar button")
            )

            products.push({
                link,
                name,
                price,
                add_to_cart
            })
        }
        return products;
    }
}

module.exports = InventoryPage;