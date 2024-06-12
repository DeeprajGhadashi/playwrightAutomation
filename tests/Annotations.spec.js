const {test, expect}=require('@playwright/test')

// only
test.only('test1', async({page})=>{
    console.log('this is test1')
})

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
test('test4', async({page})=>{
    test.fixme()
    console.log('this is test 4..')

})