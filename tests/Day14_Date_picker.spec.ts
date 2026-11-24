import { test, expect, Page } from "@playwright/test"
async function dateselection(page : Page,year:String,month:String,date:String,isfuture:boolean) {

    while(true)
    {
const currentmonth = await page.locator('.ui-datepicker-month').innerText()
const currentyear = page.locator('.ui-datepicker-year').innerText()
if(currentmonth==month && await currentyear==year){

    break;
}
if(isfuture){
await page.locator('.ui-datepicker-next').click()
}
else{
await page.locator('.ui-datepicker-prev').click()
}
}
const alldates = await page.locator('.ui-datepicker-calendar td').all()

for(const dt of alldates){
    const dttext = await dt.innerText()
    if (dttext==date){
        await dt.click()
        break
    }
}
}

test("date picker", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay", { waitUntil: "domcontentloaded" })



    //method 1
     const date1 = page.locator('input#datepicker1')
    // await date1.fill("28/10/2026")
    // await page.waitForTimeout(5000)

    //method2   
    const date2 = page.locator('input#datepicker1')
    date2.click()

    const year = '2030'
    const month = 'July'
    const date = '24'

    await dateselection(page,year,month,date,true)
  await page.waitForTimeout(5000)
})