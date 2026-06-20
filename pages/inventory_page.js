const { By, Key } = require("selenium-webdriver");

class InventoryPage{
    constructor(driver){
        this.driver = driver;
        this.items = By.css("div.inventory_list div.inventory_item");
        this.filters = By.css("select.product_sort_container");
        this.filter_options = By.css("select.product_sort_container option");
        this.cart_link = By.css("a.shopping_cart_link");
        this.cart_count = By.css("a.shopping_cart_link span");
        this.menu_button = By.css("button#react-burger-menu-btn");
        this.logout_button = By.css("a#logout_sidebar_link");
    }

    async clickMenuButton(){
        await this.driver.findElement(this.menu_button).click();
        await this.driver.sleep(1000);
    }

    async getItemsCount() {
        const items = await this.driver.findElements(this.items);
        return items.length;
    }

    async logout(){
        await this.clickMenuButton();
        await this.driver.findElement(this.logout_button).click();
    }

    async getCartCount() {
        const cart_count1 = await this.driver.findElement(this.cart_count);
        return cart_count1.getText();
    }

    async clickCartLink(){
        await this.driver.findElement(this.cart_link).click()
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

    async applyFilters(filter_type) {
        const filter_map = {
            NAME_ASC: "Name (A to Z)",
            NAME_DESC: "Name (Z to A)",
            PRICE_ASC: "Price (low to high)",
            PRICE_DESC: "Price (high to low)"
        };

        const option_text = filter_map[filter_type];
        console.log(option_text, filter_type);

        if (!option_text) {
            throw new Error(`Invalid filter type: ${filter_type}`);
        }

        await this.driver.findElement(
            this.filters
        ).click();

        const filters = await this.driver.findElements(this.filter_options);
        for(const filter of filters) {
            const text = await filter.getText();
            if(text === option_text){
                await filter.click();
                return;
            }
        }

        throw new Error(`Filter option '${option_text}' not found`);
    }

    async validateListAsPerFilters(filter_type) {
        const inventory_items = await this.getInventoryItems();

        let actual;
        let expected;

        switch(filter_type) {

            case "NAME_ASC":
                actual = inventory_items.map(item => item.name);
                expected = [...actual].sort();
                break;

            case "NAME_DESC":
                actual = inventory_items.map(item => item.name);
                expected = [...actual].sort().reverse();
                break;

            case "PRICE_ASC":
                actual = inventory_items.map(item => item.price);
                expected = [...actual].sort((a, b) => a - b);
                break;

            case "PRICE_DESC":
                actual = inventory_items.map(item => item.price);
                expected = [...actual].sort((a, b) => b - a);
                break;
        }

        return JSON.stringify(actual) === JSON.stringify(expected);
    }

    async addToCart(item_to_add){
        const items = await this.getInventoryItems();
        for(const item of items){
            if(item.name.trim().toLowerCase() === item_to_add.trim().toLowerCase()){
                await item.add_to_cart.click();
                return;
            }
        }
        throw new Error(`${item_to_add} not found in the Inventory page`);
    }
}

module.exports = InventoryPage;