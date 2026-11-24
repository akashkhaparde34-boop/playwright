import{test , expect} from "@playwright/test"

// test("open broser", ()=>{

// //stmt1 
// //stmt2
// })

test("navigate to chrome" , async ({page})=>{

await page.goto("https://www.google.com")
//await page.waitForTimeout(5000)
//await expect (page).

await expect(page).toHaveTitle("Google")
await page.waitForTimeout(5000)

await page.goto("https://playwright.dev/")
 await expect(page).toHaveURL("https://playwright.dev/")
//page

})