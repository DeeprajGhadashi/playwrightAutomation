// Reference : https://playwright.dev/docs/input#upload-files

const {test, expect}=require('@playwright/test')

test('Single File',async ({page})=>{

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')

    await page.locator('[name=upfile]').click()

    await page.locator('[name=upfile]').setInputFiles('tests/uploadFiles/msbte-logo.jpg')
    await page.locator('[value=Press]').click();
    await page.waitForTimeout(5000)
})