import { test, expect } from "@playwright/test"
test("file Upload", async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/autoplay")
    const choosefile = page.locator('#singleFileInput')
    const uploadsinglefile = page.getByRole('button', { name: 'Upload Single File' })
    const uploadfilemessage = page.locator('#singleFileStatus')

    await choosefile.setInputFiles('upload/test1.txt')
    await uploadsinglefile.click();
    await page.waitForTimeout(5000)

    await expect(uploadfilemessage).toHaveText(/Single file selected/)

})

test.only("multiple file Upload", async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/autoplay")
    const choosefile1 = page.locator('#multipleFilesInput')
    const uploadmultiplefile = page.getByRole('button', { name: 'Upload Multiple Files' })
    const uploadfilemessage = page.locator('#multipleFilesStatus')

    await choosefile1.setInputFiles(['upload/test1.txt','upload/test2.txt',])
    await uploadmultiplefile.click();
    await page.waitForTimeout(5000)

    await expect(uploadfilemessage).toHaveText(/Multiple files selected:/)
    await page.pause()
    
})