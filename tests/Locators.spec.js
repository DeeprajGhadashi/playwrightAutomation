//const { test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test ('Locators', async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    //Click on login button -property
    //await page.locator('id=login2').click()    //approach 1
     await page.click('id=login2');     //approach 2
})