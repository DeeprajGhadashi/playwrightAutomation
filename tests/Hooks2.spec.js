import { test, expect } from '@playwright/test';

/* Advantage of using this concept is the login will execute before every test 
   and logout will execute after completion of every test automaticlly so we 
   no need to write login and log out in every test 
*/
let page;

test.beforeEach(async ({browser})=>{
  page=await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html')
  //Login
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('pavanol')
  await page.locator('#loginpassword').fill('test@123')
  await page.locator('//button[normalize-space()="Log in"]').click()
  await page.waitForTimeout(5000);
});

test.afterEach(async()=>{
    //logout
  await page.locator('#logout2').click()
} )



//test 1
test('Home Page Test', async () => {
  const products=await page.$$('.hrefch')
  expect(products).toHaveLength(9)
});

//test 2
test('Add Product to cart Test', async () => {
  await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
  await page.locator('//a[normalize-space()="Add to cart"]').click()

  page.on('dialog', async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  })
});