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
    /*const machedRow= rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await machedRow.locator('input').check()
   */

    //4) select multiple products by re-usable function
     // await selectProduct(rows,page,'Product 1')
      //await selectProduct(rows,page,'Product 3')
      //await selectProduct(rows,page,'Product 5')


      

      //5) print all product details using loop
   /* for(let i=0;i<await rows.count();i++)
    {
        const row=rows.nth(i);
        const tds=row.locator('td')

        for(let j=0 ;j< await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent())
        }
    }
*/


    //6) read data from all the pages in the table

    const pages=await page.locator('.pagination li a')
    console.log('Number of pages in the table:', await pages.count())

    for(let p=0 ;p< await pages.count(); p++)
  {
      if(p>0)
      {
          await pages.nth(p).click()
      }
      for(let i=0;i<await rows.count();i++)
      {
        const row=rows.nth(i);
        const tds=row.locator('td')

        for(let j=0 ;j< await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent())
        } 
    }
    await page.waitForTimeout(3000);

   }


await page.waitForTimeout(5000);

})

/*
async function selectProduct(rows, page, name)
{
    const machedRow= rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await machedRow.locator('input').check()
}
*/