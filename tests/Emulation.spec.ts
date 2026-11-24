import { test, expect, devices } from "@playwright/test"

test("emulation", async ({ browser }) => {

    const context = await browser.newContext(
        {
            ...devices['Pixel 5'],

            permissions: [
                'geolocation',
                'microphone',
                'notifications'
            ],
            locale: "Hindi ",  // For english - "en-US"
            //viewport: { width: 1000, height: 200 },
            ignoreHTTPSErrors: true,

        })   // to check mobile view 
    const page = await context.newPage()
    await page.goto("https://www.booking.com/")
    await page.waitForTimeout(5000)
    await page.pause()
})