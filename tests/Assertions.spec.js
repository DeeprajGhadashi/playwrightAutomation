const { test, expect } = require('@playwright/test');

test('AssertionTest', async({page})=>{

    // open App page
    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect(page).toHaveURL()  -- page has URL is correct or not
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2) expect(page).toHaveTitle() -- page has title is correct or not
    await expect(page).toHaveTitle('nopCommerce demo store. Register');








})
