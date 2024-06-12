const {test, expect}=require('@playwright/test')

// only
/*test.only('test1', async({page})=>{
    console.log('this is test1')
})
*/

/*
//skip approach 1
test.skip('test2', async({page})=>{
    console.log('this is test2')
})

//skip approach 2
test('test3', async({page, browserName})=>{
    console.log('this is test3')
    if(browserName==='chromium')
    {
        test.skip()
    }
})
   
*/

//Fixme
/*
test('test4', async({page})=>{
    test.fixme()
    console.log('this is test 4..')

})
*/

//Fail  ( negative testing )
/*
 test('test5', async({page})=>{
    test.fail()  //exp
    console.log('this is test5....')
    expect(1).toBe(2); //actual  //If both exp & Actual is failed then test pass
})
 */

/* test('test6', async({page, browserName})=>{
    console.log('this is test6....')
    if(browserName==='firefox')
    {
    test.fail()  //exp
    }
})
*/

//Slow
test('test7', async({page})=>{
    test.slow();
    await page.goto('https://www.demoblaze.com/index.html')
    console.log('this is test 7..')
})