const c = console.log
const fs = require('fs')
const xlsx = require('node-xlsx')
// npm install chalk@4.1.2
const chalk = require("chalk")

const xlsxx = xlsx.parse(fs.readFileSync(`${__dirname}/key.xlsx`))[0].data
// const workSheetsFromFile = xlsx.parse(`${__dirname}/key.xlsx`)

let text = ""
for(i=0;i<xlsxx.length;i++){
   // fs.appendFileSync("bd.txt", `${xlsxx[i].toString()} \n`)
   text += (i + "," + xlsxx[i].toString()+"\n").replace( /,/g, ",  \t" )
}

module.exports = text

c(chalk.bgBlue.bold("https://nbvtim.github.io/work/"))
