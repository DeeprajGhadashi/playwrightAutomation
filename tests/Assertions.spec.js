const { test, expect } = require('@playwright/test');

test('AssertionTest', async({page})=>{

    // open App page
    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect (page).toHaveURL()  -- page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
})