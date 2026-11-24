import { test, expect } from "@playwright/test"

test("browser,context,fixture", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/")
    await page.getByText('Log in').click()
    expect(page).toHaveURL("https://demowebshop.tricentis.com/login")

})

test("fixture ,context ", async ({ context }) => {
    const page1 = await context.newPage()
    await page1.goto("https://demowebshop.tricentis.com")
    await page1.getByText('Log in').click()
    expect(page1).toHaveURL("https://demowebshop.tricentis.com/login")
   //------same context new page 
    const page2 = await context.newPage()
    await page2.goto("https://www.booking.com/")

})

//------------browser ------------------------------
//-----new context and new page 
test.only("browser", async ({ browser }) => {
    const context =await browser.newContext()
    const page3 = await context.newPage()
    await page3.goto("https://demowebshop.tricentis.com")
    await page3.getByText('Log in').click()
    expect(page3).toHaveURL("https://demowebshop.tricentis.com/login")

   //------same context new page 
   // const context1 = await browser.newContext()
    const page4 = await context.newPage()
    await page4.goto("https://www.booking.com/")
   
     
    await page3.waitForTimeout(5000)
    await page4.waitForTimeout(5000)
})