import {test,expect  } from "@playwright/test"

test.beforeEach(async ({page})=>{
await page.goto("https://demowebshop.tricentis.com/")

})

// test.afterEach(async({page})=>{
// await page.close()
// })

test.only("css locator by id ",async ({page})=>{
const inputbox = page.locator("input#newsletter-email")
await inputbox.fill("product")
})
test("css locator by class",async({page})=>{
const newsletter = page.locator(".newsletter-subscribe-button")
newsletter.click()
})
