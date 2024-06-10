const { test, expect} = require('@playwright/test');

test('handle inputbox',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    //Inputbox - firstname
    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();

    await page.locator("//input[@id='name']").fill("Deepraj")
  // await page.fill("//input[@id='name']",'Deepraj')

    await page.waitForTimeout(5000);  //pausing code
})