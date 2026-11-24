

import { test, expect, Locator } from "@playwright/test"
// getByRole-->if web element is actionable then use this locator 
/*
import { test, expect,Locator } from "@playwright/test"

test("navigate to chrome", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
   // await page.waitForTimeout(2000)
    const report : Locator = page.getByRole('link', { name: 'Reports' })
    //report.click()
    await expect(report).toBeVisible()
    page.getByRole('button',{name:'Sign In'})
    //await page.waitForTimeout(2000)
    await expect(report).toBeVisible()
    page.getByRole('checkbox',{name: ' Subscribe to newsletter'})
    expect(report).toBeEnabled()
})
    
   //------------getByText------------------
   import { test,expect} from "@playwright/test"
   /*
   /8
   test ("navigate to chrome",async ({page})=>{

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")

    const a = page.getByText('Welcome, Joh',{exact: true})
    await expect(a).toBeVisible()
}) 

//-----getByLabel
test("navigate to chrome", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const pass : Locator = page.getByLabel('Password', { exact: true })
    //await pass.fill("Akash");
    const ph = page.getByText('Phone Number', { exact: true })
    await ph.fill("9175069438")
    //await expect(pass).toBeVisible()
    //await pass.fill("Akash")
    await page.waitForTimeout(10000)
})
    
//---------getByPlaceholder 
test("navigate to chrome", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")

    const search = page.getByPlaceholder('Search tests...');
    await search.fill("Automation");

    const username = page.getByPlaceholder('Enter your username');
    await username.fill("akashkhaparde");
    const company = page.getByPlaceholder('name@company.com');
    await company.fill("HDFC");
    const test = page.getByPlaceholder('Paste your test script here...');
    await test.fill("keep it up");
    await page.waitForTimeout(6000);
})
*/
//-------------getByTite----------------

test.only ("navigate to chrome",async({page})=>{
await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
const value = page.getByTitle('4,821 Total Runs')
await expect(value).toBeVisible
await page.waitForTimeout(3000)

})
/*
//----------------------getbyAltText------------------

test("navigate to chrome",async ({page})=>{
await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
const logo = page.getByAltText('Playwright logo')
await expect(logo).toBeVisible()
const red = page.getByAltText('Red apple fruit')
await expect(red).toBeVisible()


})
*/
/*
//-------------------GetByTestId-------------------

test("navigate to chrome", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const id = page.getByTestId('search-input')
    await id.fill("Akash")
    await page.waitForTimeout(5000)
})
*/