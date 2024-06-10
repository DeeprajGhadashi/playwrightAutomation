const { test, expect } = require('@playwright/test');

test ('Handle checkboxes', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    //single checkbox
    await page.locator("//input[@id='monday' and @type='checkbox']").click();
    //await page.click("//input[@id='monday' and @type='checkbox']");

    expect( await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    expect( await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();


    await page.waitForTimeout(5000);
})