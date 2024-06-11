const {test, expect}=require('@playwright/test')

test("handling table",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //const table=await page.locator('[name=BookTable]')
    const table=await page.locator('#productTable')

    // 1) total number of rows & columns  -- WEB TABLE 
    /*const columns= await table.locator('tbody tr th')
    console.log('Number of columns:', await columns.count()) //4
    expect(await columns.count()).toBe(4)

    const rows=await table.locator('tbody tr ')
    console.log('Number of rows:', await rows.count()) //5
    expect(await rows.count()).toBe(7)
   */

    // 2) total number of rows & columns  -- PAGINATION TABLE
    const columns= await table.locator('thead tr th')
    console.log('Number of columns:', await columns.count()) //4
    expect(await columns.count()).toBe(4)

    const rows =await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count()) //5
    expect(await rows.count()).toBe(5)

    //3) select check box for single product 4
    const machedRow= rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await machedRow.locator('input').check()

    await page.waitForTimeout(5000);



})