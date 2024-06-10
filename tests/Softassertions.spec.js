const { test, expect } = require('@playwright/test');

test("Soft Assertions", async ({page})=>{
   
    await page.goto("https://www.demoblaze.com/index.html")

    //Hard Assertions
   /* await expect(page).toHaveTitle('STORE123');  //STORE
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page.locator('.navbar-brand')).toBeVisible()
   */

    //Soft Assertions = failed soft assertion do not terminate test execution , but mark the test as failed
    await expect.soft(page).toHaveTitle('STORE123');  //STORE   test failed
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html"); //test passed
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()  //test passed
    
})