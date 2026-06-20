const {Given} = require("@cucumber/cucumber");

const assert = require("assert");

const CartPage = require("../pages/cart_page");

Given(/Validate the Cart page is opened$/,
    async function ()  {
        const cart_page = new CartPage(this.driver);
        assert.strictEqual(
            await cart_page.getTitle(),
            "Your Cart"
        );
    })

Given(/Validate the product "(.*)" (is|is not) available in cart$/,
    async function (product_name, condition)  {
        const cart_page = new CartPage(this.driver);
        const products = await cart_page.getCartItems();
        for(const product of products){
            if(product.name === product_name && condition === 'is'){
                return;
            }else if(product.name === product_name && condition === 'is not'){
                throw new Error(`${product_name} is in the cart but was not supposed to be in the cart`);
            }
        }
        if(condition === 'is'){
            throw new Error(`${product_name} is not present in the cart`);
        }
    })