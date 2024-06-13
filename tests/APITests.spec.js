const {test, expect}=require('@playwright/test')

var userid;

//GET
test('Get users', async ({request}) => {

   const response= await request.get('https://reqres.in/api/users?page=2')
   console.log( await response.json())
   expect(response.status()).toBe(200);
});

//POST
test.only('Create users', async ({request}) => {

    const response= await request.post('https://reqres.in/api/users?page=2',
        {
            data:{
                   "name" : "Deepraj Ghadashi",
                   "job" : "Tester"
            },
            headers: {
                   "Accept": "application/json"
            }
        });

    console.log( await response.json())
    expect(response.status()).toBe(201);

    var res = await response.json()
    userid = res.id
});

//PUT
test('Update users', async ({request}) => {

});

//DELETE
test('Delete users', async ({request}) => {

});