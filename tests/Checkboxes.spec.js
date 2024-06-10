const { test, expect } = require('@playwright/test');

test ('Handle checkboxes', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    //single checkbox
    await page.locator("//input[@id='monday' and @type='checkbox']").click();
    //await page.click("//input[@id='monday' and @type='checkbox']");

    //expect( await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    //expect( await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
    //expect( await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();    //is not selected then test case is pass

     //Multiple checkboxes
     const checkboxeLocators = [ "//input[@id='monday' and @type='checkbox']",
                          "//input[@id='sunday' and @type='checkbox']",
                          "//input[@id='saturday' and @type='checkbox']"
                        ];

    for(const locator of checkboxeLocators )
    {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000);
})