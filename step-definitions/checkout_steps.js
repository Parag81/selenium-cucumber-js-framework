const {Given} = require("@cucumber/cucumber");

const assert = require("assert");

const CheckoutPage = require("../pages/checkout_page");
const CartPage = require("../pages/cart_page");
const LoginPage = require("../pages/login_page");

Given(/Fill the details in the checkout page with "(.*)"$/,
    async function (json_data)  {
        const data = JSON.parse(json_data);
        const checkout_page = new CheckoutPage(this.driver);

        await checkout_page.setFirstName(data["first_name"]);
        await checkout_page.setLastName(data["last_name"]);
        await checkout_page.setPostalCode(data["postal_code"]);

        await checkout_page.clickContinue();

        await this.driver.sleep(1000);
    })

Given(/Validate the error on the Checkout page with "(.*)"$/,
    async function (expected_error) {
        const checkout_page = await new CheckoutPage(this.driver);
        const error = await this.driver.findElement(await checkout_page.error);
        assert.strictEqual(
            await error.getText(),
            expected_error
        );
    });

Given(/Validate the UI item total, tax and total amount is as per the items added$/,
    async function ()  {
            const checkout_page = new CheckoutPage(this.driver);
            const products = await checkout_page.getCheckoutItems();
            let expected_item_total = 0.00;
            for(let product of products) {
                    const price = product.price;
                    expected_item_total += parseFloat(price.replace('$', ''));
            }
            const expected_tax = Number((expected_item_total *0.08).toFixed(2));
            const total = Number(expected_item_total+expected_tax);
            assert.equal(expected_item_total, await checkout_page.getItemTotal());
            assert.equal(expected_tax, await checkout_page.getTax());
            assert.equal(total, await checkout_page.getTotalAmount());
    })

Given(/Click on the Finish button$/,
    async function ()  {
            const checkout_page = new CheckoutPage(this.driver);
            await checkout_page.clickFinish();
            await this.driver.sleep(1000);
    })

Given(/Validate the Order placed message "(.*)"$/,
    async function (expected_message)  {
            const checkout_page = new CheckoutPage(this.driver);
            const actual_message = await checkout_page.getOrderPlacedMessage();
            assert.equal(actual_message, expected_message);
    })

Given(/Go back to the products$/,
    async function ()  {
            const checkout_page = new CheckoutPage(this.driver);
            await checkout_page.clickBackHome();
            await this.driver.sleep(500);
    })