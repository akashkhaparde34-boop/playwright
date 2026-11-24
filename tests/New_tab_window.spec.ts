import { test, expect } from "@playwright/test"
test("new tab open", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://sdetqa.vercel.app/autoplay")
    const [newTab] = await Promise.all
        ([
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'New Tab' }).click()


        ])
    console.log(newTab.title())

    await page.waitForTimeout(5000)
})

//--------------------Handle New Window-----------------------------------------------

test.only("new window open", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://sdetqa.vercel.app/autoplay")
    const [newWindow] = await Promise.all
        ([
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'New Window' }).click()


        ])
    console.log(newWindow.title())

    await page.waitForTimeout(5000)
    await expect(newWindow).toHaveURL("https://playwright.dev/")
    
})

