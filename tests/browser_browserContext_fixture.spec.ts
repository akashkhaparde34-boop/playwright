import { test, expect, chromium } from "@playwright/test"

test("browser,context,fixture", async () => {

    const browser = await chromium.launch()
    //create context 
    const context1 = await browser.newContext()

    const context2 = await browser.newContext()

    //create page
    const page1 = await context1.newPage()
    const page2 = await context2.newPage()

    await page1.goto("https://www.saucedemo.com/")
    await page2.goto("https://www.saucedemo.com/")

  await page1.waitForTimeout(5000)
  await page2.waitForTimeout(5000)
})
