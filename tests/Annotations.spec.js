const {test, expect}=require('@playwright/test')

// only
test.only('test1', async({page})=>{
    console.log('this is test1')
})


test('test2', async({page})=>{
    console.log('this is test2')
})

