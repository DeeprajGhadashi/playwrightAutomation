const { test, expect } = require('@playwright/test');

test('Handle dropdowns',async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple ways to select option from the dropdwon
    //await page.locator("#country").selectOption({label:'India'}); //label/ visible text
    //await page.locator("#country").selectOption('India');  //visible text
    //await page.locator("#country").selectOption({value: 'uk'});  //by using value attribute
    //await page.locator("#country").selectOption({index: 1});    // by using index
    //await page.selectOption("#country",'India');  //by text

    //Assertions
    //1) check number of options in dropdown -- Approach 1
    /*const options = await page.locator('#country option')
      await expect(options).toHaveCount(9);
    */
   
    //2) check number of options in dropdown -- Approach 2
    const options = await page.$$('#country option')
    console.log("Number of options:", options.length)



    await page.waitForTimeout(2000);




})