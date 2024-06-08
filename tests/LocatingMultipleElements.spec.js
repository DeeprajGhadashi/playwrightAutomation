const { test, expect} = require('@playwright/test');

test('LocatingMulitipleElements' , async ({page}) => {
     
    await page.goto("https://www.demoblaze.com/index.html")

    // Select all links and count them
    const links = await page.$$('a'); 
    console.log(`Number of links on the page: ${links.length}`);

    // Iterate through the links and print their text content
    for(const link of links)
    {
       const linktext = await link.textContent();
       console.log(linktext);
    }

    //Locate all the products displayed on home page
   await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//h4/a")
    console.log(`Number of Products on the page: ${products.length}`);

    for( const product of products){
        const prodName = await product.textContent(); 
        console.log(prodName);
    }
})