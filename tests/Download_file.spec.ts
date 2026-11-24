import { test, expect } from "@playwright/test"
import fs from "fs"

test("download file", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay")
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Download File' }).click()
    ]
    )
    expect(download.suggestedFilename()).toContain("sample.txt")
    //const downloadpath  = "download/sample.txt"
    //await download.saveAs(downloadpath)

    //For dynamic file aname 
    const downloadpath = `downloads1/${download.suggestedFilename()}`
    await download.saveAs(downloadpath)

    const fileexist = fs.existsSync(downloadpath)

    expect(fileexist).toBeTruthy()

    if (fileexist) {
        fs.unlinkSync(downloadpath)

    }
    await page.waitForTimeout(5000)

})