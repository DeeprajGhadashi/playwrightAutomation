const {test, expect}=require('@playwright/test')

//GET
test.only('Get users', async ({request}) => {

   const response= await request.get('https://reqres.in/api/users?page=2')
   console.log( await response.json())
   expect(response.status()).toBe(200);
});

//POST
test('Create users', async ({request}) => {

});

//PUT
test('Update users', async ({request}) => {

});

//DELETE
test('Delete users', async ({request}) => {

});