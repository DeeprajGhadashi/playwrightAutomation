//const { test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test ('Locators', async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    //Click on login button - used property
    //await page.locator('id=login2').click()    //approach 1
     await page.click('id=login2');     //approach 2

     //provide usename  - used CSS
    //await page.locator('#loginusername').fill("pavanol");
     await page.fill('#loginusername','pavanol');
     

     //provide password - used CSS
     await page.fill("input[id='loginpassword']",'test@123')

     //Click on login button - used Xpath
     await page.click("//button[normalize-space()='Log in']");

})
