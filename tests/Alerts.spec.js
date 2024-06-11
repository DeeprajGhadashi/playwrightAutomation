const { test, expect } = require('@playwright/test');

test('Alert with OK', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enabling Dilaog window alert handling
   page.on('dialog', async dialog=> {
   expect(dialog.type()).toContain('alert')
   expect(dialog.message()).toContain('I am an alert box!')
   await dialog.accept();
})

await page.click('//button[normalize-space()="Alert"]');
await page.waitForTimeout(5000);

})