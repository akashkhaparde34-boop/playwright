import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/autoplay")

})

test("static table", async ({ page }) => {

    const table = page.locator('table').first()   //we can nth also 
    const header = table.locator('thead th')        // here we already find a locator for table so used like this 
    const bodyrow = table.locator('tbody tr')

    console.log(await header.count())
    console.log(await bodyrow.count())

    await expect(header).toHaveCount(5)   // to check count 
    await expect(bodyrow).toHaveCount(4)
    const firstrowvalue = bodyrow.nth(1).locator('td')   // td is pointing to every valur in row 
    // console.log(await firstrowvalue.allTextContents())
    await expect(firstrowvalue).toHaveText(['Mouse', 'Electronics', '$29', '50', 'In Stock'])  // check return result is as expected or not 

    // extract all data exclude header 
    const datatable: string[][] = []
    const rowcount = await bodyrow.count()
    for (let i = 0; i < rowcount; i++) {
        const datarow = await bodyrow.nth(i).locator('td').allInnerTexts()
        datatable.push(datarow)
        // console.log(datarow)
        //console.log(datatable[3])  // to print particular row data 
    }

    //--------------------------Print all product name -----------------
    /*
        const prodname = []
        for (let i = 0; i < datatable.length; i++) {
            prodname.push(datatable[i][0])
        }
        console.log(prodname)
    
        //-------------print product name where stock is zero -----------------
    
        const zerostock = []
        for (let i = 0; i < datatable.length; i++) {
            if (datatable[i][3] == '0') {
                zerostock.push(datatable[i][0])
            }
        }
        console.log(zerostock)
    
      //-------------print product name where status is out of stock-----------------
    
        const outofstockprod = []
        for (let i = 0; i < datatable.length; i++) {
            if (datatable[i][4] == 'Out of Stock') {
                outofstockprod.push(datatable[i][0])
            }
        }
        console.log(outofstockprod)
    
    
     // -------------print product name where status is In stock-----------------
    
       const instockprod = []
        for (let i = 0; i < datatable.length; i++) {
            if (datatable[i][4] == 'In Stock') {
               instockprod.push(datatable[i][0])
               
            }
        }
       console.log(instockprod)
*/
     //-------------to print column value of product ---------------------

      let keyboardprice;
      for (let i=0 ;i <datatable.length;i++)
      {
        if (datatable[i][0]=='Keyboard'){
            keyboardprice = (datatable[i][2])
        }
      }
       console.log(keyboardprice)
       expect (keyboardprice).toBe('$79')

/*
       
      // -------multiple column ---method 1---------print product name and stock  where status is In stock-----------------
       
       const instockprod = []
        for (let i = 0; i < datatable.length; i++) {
            if (datatable[i][4] == 'In Stock') {
                instockprod.push(datatable[i][0],datatable[i][3])
            }
        }
       console.log(instockprod)
    
    
    
    //---------multiple column ---method 2---------print product name and stock  where status is out of stock ---------------
    
    
    for (let i = 0; i < datatable.length; i++) {
            if (datatable[i][4] == 'Out of Stock') {
                console.log(`product name = ${datatable[i][0]}, stock = ${datatable[i][3]}`)   // with column name and value 
            }
        }
    
        
    //lowest price and highest price 

    let highest = -1
    let lowest = 999999
    let highestName = ""
    let lowestName = ""

    for (let i = 0; i < datatable.length; i++) {
        const price = Number(datatable[i][2].replace('$', ''))

        if (price > highest) {
            highest = price
            highestName = datatable[i][0]
        }
        if (price < lowest) {
            lowest = price
            lowestName = datatable[i][0]
        }
    }

    console.log('highest price:highest')   // Laptop = 999
    console.log('lowest price:lowest')

*/

})
//-------------------Assignment of crud table ------------------------------
test("web table with crud" ,async({page})=>{

const crudtable = page.locator('#dynamicTable')

 const header1 = crudtable.locator('thead th')        // here we already find a locator for table so used like this 
    const bodyrow = crudtable.locator('tbody tr')

    console.log(await header1.count())
    console.log(await bodyrow.count())

    await expect(header1).toHaveCount(5)   // to check count 
    await expect(bodyrow).toHaveCount(4)
    const firstrowvalue = bodyrow.nth(1).locator('td')   // td is pointing to every value in row 
    // console.log(await firstrowvalue.allTextContents())
    await expect(firstrowvalue).toHaveText(['Mouse', 'Electronics', '$29', '50', 'In Stock'])  // check return result is as expected or not 

    // extract all data exclude header 
    const datatable: string[][] = []
    const rowcount = await bodyrow.count()
    for (let i = 0; i < rowcount; i++) {
        const datarow = await bodyrow.nth(i).locator('td').allInnerTexts()
        datatable.push(datarow)
        // console.log(datarow)
        //console.log(datatable[3])  // to print particular row data 
    }





})