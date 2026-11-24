import {test,expect} from "@playwright/test"

test.beforeEach(async({page})=>{
   await page.goto("https://parabank.parasoft.com/parabank/register.htm")

})
test("error msg valiadtion",async({page})=>{
await page.locator('.input').nth(2).fill('hello');
await page.waitForTimeout(10000)
})