const
    c = console.log
    fs = require('fs')
    colors = require("colors")
    // black, red, green, yellow, blue, magenta, cyan, white, gray, grey
    // brightRed, bgRed, bgBrightRed
    // styles: reset, bold, dim, italic, underline, inverse, hidden, strikethrough
    // extras: rainbow, random, zebra, america, trap
    xlsx = require('node-xlsx')
    filePath = "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/Яицких Т.Е/ОПИСИ/all.xlsx"

if(fs.existsSync(filePath)){
    c("Файл существует".green)
    xlsx = xlsx.parse(fs.readFileSync(filePath))[0]
    fs.writeFileSync("SOURS/all.json", JSON.stringify(xlsx,null,"  "))
    //fs.copyFileSync(filePath, `${__dirname}/SOURS/all-copy.xlsx`)
}else{
    c("Файл не существует".red)
}

c(`
        https://nbvtim.github.io/work/
        ${__dirname.replace(/\\/g, '/')}/index.html
        ${__dirname}\\index.html
`.green)