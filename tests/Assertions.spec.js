const { test, expect } = require('@playwright/test');

test('AssertionTest', async({page})=>{

    // open App page
    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect(page).toHaveURL()  -- page has URL is correct or not
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2) expect(page).toHaveTitle() -- page has title is correct or not
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3) expect(locator).toBeVisible() -- Element is Visible or not
    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //4) expect(locator).toBeEnabled()   -- control is enabled 
    const serchStoreBox = await page.locator('#small-searchterms');
    await expect(serchStoreBox).toBeEditable();

    //5) expect(locator).toBeChecked()   -- Radio/Checkbox is checked or not
    
    //radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click() // select radio button
    await expect(maleRadioButton).toBeChecked()

    //check box
     const newsletterCheckbox = await page.locator('#Newsletter');
     await expect(newsletterCheckbox).toBeChecked();

     //6) expect(loactor).toHaveAttribute()   -- Element has attribute
     const regButton = await page.locator('#register-button')
     await expect(regButton).toHaveAttribute('type','submit');

     //7) expect(loactor).toHaveText()    -- Element matches text  
     await expect( await page.locator('.page-title h1')).toHaveText('Register');  //full text

     //8) expect(loactor).toContainText()    -- Element contains text (add partial text for above same case)
     await expect(await page.locator('.page-title h1')).toContainText('Reg');   //partial text
     
     //9) expect(loactor).toHaveValue(value)  -- Input has a value is same or not is check
     const emailInput = await page.locator('#Email');
     await emailInput.fill('test@demo.com');
     await expect(emailInput).toHaveValue('test@demo.com');








})
