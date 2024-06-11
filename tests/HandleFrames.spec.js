const { test, expect } = require('@playwright/test');

test('frames', async ({ page }) => {
 
  await page.goto('https://ui.vision/demo/webtest/frames/');

   //total frames
   const allframes=await page.frames()
   console.log("Number of frames:",allframes.length)

})