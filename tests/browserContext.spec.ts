import { test, expect, chromium } from "@playwright/test"

test("browser,context,fixture", async () => {

    const browser = await chromium.launch()
    //create context
    const context1 = await browser.newContext()
    //create page
    const page1 = await context1.newPage()

    await page1.goto("https://www.saucedemo.com/")
    const username = page1.locator('#user-name')
    await username.fill("standard_user")
    const password = page1.locator('#password')
    await password.fill("secret_sauce")
    await page1.locator('#login-button').click()
    await page1.waitForTimeout(5000)



    const context2 = await browser.newContext()
    const page2 = await context2.newPage()
    await page2.goto("https://www.saucedemo.com/")
    await page2.locator('#user-name').fill("problem_user")
    await page2.locator('#password').fill("secret_sauce")
    await page2.locator('#login-button').click()
    await page2.waitForTimeout(5000)
    await page1.pause()
    await page2.pause()
})
