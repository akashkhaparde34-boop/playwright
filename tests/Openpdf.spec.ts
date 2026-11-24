import { test, expect } from "@playwright/test"

test("open pdf", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay")

    const [pdfopen] = await Promise.all([
        page.context().waitForEvent('page'),
        page.getByRole('button', { name: 'Open PDF' }).click()
        //await page.waitForTimeout(5000)

    ])
    expect(pdfopen).toBeTruthy()

    await page.waitForTimeout(5000)
})