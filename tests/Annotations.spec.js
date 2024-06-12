const {test, expect}=require('@playwright/test')

// only
test('test1', async({page})=>{
    console.log('this is test1')
})

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