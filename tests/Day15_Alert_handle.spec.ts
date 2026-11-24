import { test, expect } from "@playwright/test"

test("simple pop up validation", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/autoplay", { waitUntil: "domcontentloaded" })
  const popup = page.locator('button#PopUp')
  popup.click()
  // await expect (popup).toBeVisible()
  await expect(page.getByText('No, maybe next time')).toBeVisible()

  await page.waitForTimeout(5000)

})


test("simple Alert Validation", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/autoplay", { waitUntil: "domcontentloaded" })

  page.on('dialog', dialog => {
    console.log(dialog.type())       // it check tyor of dialog
    //console.log(dialog.message())   // to print a message on alert 
    expect(dialog.type()).toBe('alert')
    expect(dialog.message()).toContain('Simple alert')
    dialog.accept();
  })
  await page.getByRole('button', { name: 'Simple' }).click() // by using only this it wil bydefault dismiss alert
  await page.waitForTimeout(5000)
})

test("confirmation alert validation", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/autoplay")
  
   
  page.on('dialog', dialog => {
    console.log(dialog.type())       // it check type of dialog
   // expect(dialog.type()).toBe('alert')         //fail 
    //expect(dialog.type()).toBe('confirm')     //exact match check 
    expect(dialog.type()).toMatch(/confirm/i);  //partial match check 
    //dialog.accept();
    dialog.dismiss();
  })
  await page.getByRole('button', { name: 'Confirm' }).click()
})



test.only("Prompt alert validation", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/autoplay")
  
   
  page.on('dialog', dialog => {
    if (dialog.type()=='prompt')
    {
     dialog.accept("Test Prompt Alert")
    }
    else if(dialog.type()=='alert'){
     dialog.accept()
    }
  })
  await page.getByRole('button', { name: 'prompt' }).click()
})

