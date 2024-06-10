const { test, expect } = require('@playwright/test');

test('Handle dropdowns',async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple ways to select option from the dropdwon
    await page.locator("#country").selectOption({label:'India'}); //label/ visible text
    //await page.locator("#country").selectOption('India');  //visible text
    //await page.locator("#country").selectOption({value: 'uk'});  //by using value attribute
    //await page.locator("#country").selectOption({index: 1});    // by using index
    // await page.selectOption("#country",'India');  //by text


    await page.waitForTimeout(2000);




})