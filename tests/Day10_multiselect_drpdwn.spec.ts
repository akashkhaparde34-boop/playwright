import { test,expect } from "@playwright/test";

test.beforeEach(async({page})=>{
await page.goto("https://demoqa.com/select-menu")
//await page.goto("https://sdetqa.vercel.app/autoplay")

})

test("dropdown_handling",async({page})=>{
const allcars = page.locator('#cars')
await expect(allcars).toBeVisible()
await expect(allcars).toHaveValue('')
//await expect(allcars).toHaveValue('Volvo')

 //----------select multiple option by label 
allcars.selectOption([{label:'Volvo'},{label:'Saab'},{label:'Audi'}])
await page.waitForTimeout(5000)

//--------------select multiple option by value
allcars.selectOption([{value:'volvo'},{value:'saab'},{value:'audi'}])
await page.waitForTimeout(5000)

//--------------select multiple option by value 
allcars.selectOption([{index: 3},{index: 0},{index: 1}])
await page.waitForTimeout(5000)
await expect(allcars).toHaveValues(['audi','volvo','saab'])  // fail 
})


test("sorted dropdown_handling",async({page})=>{
const sortdrp = page.locator('#sorted option')
// await expect(sortdrp).toBeVisible()
// await expect(sortdrp).toHaveValue('apple')
const sortdrpalltext = await sortdrp.allTextContents()
console.log(sortdrpalltext)

const orgsort = sortdrpalltext 
const secondsorted = sortdrpalltext.sort()
console.log(orgsort)
console.log(secondsorted)

 expect(orgsort).toEqual(secondsorted)

})


test.only("sorted cars dropdown_handling",async({page})=>{
const casrs = page.locator('#cars option')
//await expect(sortedcasrs).toBeVisible()
//await expect(sortedcasrs).toHaveValues(['audi','volvo','saab','opel'])  //fail
const sortdrpalltext = await casrs.allTextContents()
console.log(sortdrpalltext)

const orgcars =  sortdrpalltext
const duplicatesortcasrs = [...sortdrpalltext].sort()

console.log(orgcars)

console.log(duplicatesortcasrs)

console.log(sortdrpalltext)
//expect(orgcars).toEqual(duplicatesortcasrs)

expect(orgcars).not.toEqual(duplicatesortcasrs)
})