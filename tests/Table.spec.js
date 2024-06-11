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
    const columns2= await table.locator('thead tr th')
    console.log('Number of columns:', await columns2.count()) //4
    expect(await columns2.count()).toBe(4)

    const rows2 =await table.locator('tbody tr')
    console.log('Number of rows:', await rows2.count()) //5
    expect(await rows2.count()).toBe(5)

})