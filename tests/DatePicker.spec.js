const { test, expect } = require('@playwright/test');

test("Date Picker", async ({ page }) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill('#datepicker','03/15/2024')


    await page.waitForTimeout(5000);
})