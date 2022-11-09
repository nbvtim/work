const { url } = require('inspector')

const
    c = console.log
    fs = require('fs')
    colors = require("colors")
    // black, red, green, yellow, blue, magenta, cyan, white, gray, grey
    // brightRed, bgRed, bgBrightRed
    // styles: reset, bold, dim, italic, underline, inverse, hidden, strikethrough
    // extras: rainbow, random, zebra, america, trap
    xlsx = require('node-xlsx').parse(fs.readFileSync(`${__dirname}/SOURS/all.xlsx`))
    urll = "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/Яицких Т.Е/ОПИСИ/all_clone.xlsx"

if(fs.existsSync(urll)){
    fs.copyFileSync("./SOURS/all.xlsx" , urll)
}

fs.writeFileSync("SOURS/all.json", JSON.stringify(xlsx,null,"  "))

console.log(`
    https://nbvtim.github.io/work/
    ${__dirname.replace(/\\/g, '/')}/index.html
    ${__dirname}\\index.html
`.rainbow)