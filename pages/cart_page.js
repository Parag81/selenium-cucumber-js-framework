const { By, Key } = require("selenium-webdriver");

class CartPage{
    constructor(driver){
        this.driver = driver;
        this.title = By.css("span.title");
        this.cart_list = By.css("div.cart_list div.cart_item");
    }

    async getTitle(){
        return await this.driver.findElement(this.title).getText();
    }

    async getCartItems() {
        const cart_items = await this.driver.findElements(this.cart_list);

        let products = [];

        for(const item of cart_items){
            const link = await item.findElement(
                By.className("inventory_item_name")
            );

            const name = await item.findElement(
                By.className("inventory_item_name")
            ).getText();

            const price = await item.findElement(
                By.className("inventory_item_price")
            ).getText();

            const remove = await item.findElement(
                By.css("div.item_pricebar button")
            )

            products.push({
                link,
                name,
                price,
                remove
            })
        }
        return products;
    }
}

module.exports = CartPage;