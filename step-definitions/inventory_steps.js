const { Given } = require("@cucumber/cucumber");

const assert = require("assert");

const InventoryPage = require("../pages/inventory_page");

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