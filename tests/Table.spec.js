const {test, expect}=require('@playwright/test')

test("handling table",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table=await page.locator('[name=BookTable]')

    // 1) total number of rows & columns  -- WEB TABLE 
    const columns= await table.locator('tbody tr th')
    console.log('Number of columns:', await columns.count()) //4
    expect(await columns.count()).toBe(4)

    const rows=await table.locator('tbody tr ')
    console.log('Number of rows:', await rows.count()) //5
    expect(await rows.count()).toBe(7)


})