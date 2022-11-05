const
    c = console.log
    fs = require('fs')
    xlsx = require('node-xlsx')

if(fs.existsSync("C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/Яицких Т.Е/ОПИСИ/all_clone.xlsx")){
    fs.copyFileSync("./SOURS/all.xlsx" , "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/Яицких Т.Е/ОПИСИ/all_clone.xlsx")
}

xlsx = xlsx.parse(fs.readFileSync(`${__dirname}/SOURS/all.xlsx`))
fs.writeFileSync("SOURS/all.json", JSON.stringify(xlsx,null,"  "))

console.log(`
https://nbvtim.github.io/work/
${__dirname.replace(/\\/g, '/')}/index.html
${__dirname}\\index.html
`)