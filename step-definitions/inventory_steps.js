const { Given } = require("@cucumber/cucumber");

const assert = require("assert");

const InventoryPage = require("../pages/inventory_page");
const CartPage = require("../pages/cart_page");

Given(/Validate the Inventory page is displayed$/,
    async function ()  {
        const inventory_page = new InventoryPage(this.driver);
        assert.strictEqual(
            await inventory_page.getTitle(),
            "Products"
        );
    })

Given(/Validate the count of items in inventory is (.*)/,
    async function (expected_count)  {
        const inventory_page = new InventoryPage(this.driver);
        assert.equal(
            await inventory_page.getItemsCount(),
            expected_count
        );
})

Given(/Get all the products details$/,
    async function ()  {
        const inventory_page = new InventoryPage(this.driver);
        const products = await inventory_page.getInventoryItems();
        for(const product of products){
                console.log(product);
        }
})

Given(/Validate that the price for item (.*) is (.*)$/,
    async function (product_name, product_price)  {
            const inventory_page = new InventoryPage(this.driver);
            const products = await inventory_page.getInventoryItems();
            for(const product of products){
                    if(product.name === product_name){
                            assert.equal(product.price, product_price);
                            break;
                    }
            }
    })

Given(/Sort the Inventory list with filter (NAME_ASC|NAME_DESC|PRICE_ASC|PRICE_DESC) and validate the list$/,
    async function (filter_type)  {
        const inventory_page = new InventoryPage(this.driver);
        await inventory_page.applyFilters(filter_type);
        if(!await inventory_page.validateListAsPerFilters(filter_type)){
            throw new Error(`The list is not sorted as per filter ${filter_type}`);
        }
        await this.driver.sleep(1000);
    })

Given(/Add the item "(.*)" in the cart$/,
    async function (item)  {
        const inventory_page = new InventoryPage(this.driver);
        await inventory_page.addToCart(item);
    })

Given(/Validate the cart count in Inventory page as (.*)$/,
    async function (expected_count)  {
        const inventory_page = new InventoryPage(this.driver);
        const actual_count = await inventory_page.getCartCount();
        assert.strictEqual(expected_count, actual_count);
    })

Given(/Open shopping cart$/,
    async function ()  {
        const inventory_page = new InventoryPage(this.driver);
        await inventory_page.clickCartLink();
        await this.driver.sleep(1000);
    })

Given(/Logout$/,
    async function ()  {
        const inventory_page = new InventoryPage(this.driver);
        await inventory_page.logout();
    })