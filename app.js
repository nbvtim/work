const
    c = console.log
    fs = require('fs')
    colors = require("colors")
    // black, red, green, yellow, blue, magenta, cyan, white, gray, grey
    // brightRed, bgRed, bgBrightRed
    // styles: reset, bold, dim, italic, underline, inverse, hidden, strikethrough
    // extras: rainbow, random, zebra, america, trap
    filePath = "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/Яицких Т.Е/ОПИСИ/all.xlsx"
    xlsx = require('node-xlsx').parse(fs.readFileSync(filePath))[0]

if(fs.existsSync(filePath)){
    c("Файл существует, данные обновлены. Сайт: https://nbvtim.github.io/work/".green)
    fs.writeFileSync("all.json", JSON.stringify(xlsx, null, "  "))
}else{
    c("Файл не существует. Сайт: https://nbvtim.github.io/work/".red)
}