const {test, expect}=require('@playwright/test')

// only
test('test1', async({page})=>{
    console.log('this is test1')
})

//skip
test.skip('test2', async({page})=>{
    console.log('this is test2')
})

