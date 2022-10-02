const 
    c = console.log
    fs = require('fs')
    xlsx = require('node-xlsx')
    xlsxx = xlsx.parse(fs.readFileSync(`${__dirname}/key.xlsx`))[0].data
    chalk = require("chalk") // npm install chalk@4.1.2
    text = ""
    
for(i = 0; i <= xlsxx.length; i ++){
        text += "[" +i+ xlsxx[i] + "]\n"
}

let htmlText = fs.readFileSync("./index.html","utf8")

fs.writeFileSync("index.html",htmlText)

c(chalk.rgb(0,0,200).bold(`
https://nbvtim.github.io/work/`))

// let nbv = fs.readFileSync("index.html","utf8")
// fs.writeFileSync("1",nbv)
// c(nbv)
