// Reference : https://playwright.dev/docs/input#upload-files

const {test, expect}=require('@playwright/test')

test('Single File',async ({page})=>{

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')

    await page.locator('[name=upfile]').click()

    await page.locator('[name=upfile]').setInputFiles('tests/uploadFiles/msbte-logo.jpg')
    await page.locator('[value=Press]').click();
    await page.waitForTimeout(5000)
});

test.only('Multiple Files',async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload')
                .setInputFiles(['tests/uploadFiles/Deepraj_Ghadashi_7743832393-Resume.pdf',
                                 'tests/uploadFiles/msbte-logo.jpg']);

    await page.waitForTimeout(3000)
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('Deepraj_Ghadashi_7743832393-Resume.pdf')
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('msbte-logo.jpg')

    await page.waitForTimeout(3000)
})