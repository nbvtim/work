const c = console.log
const fs = require('fs')
const xlsx = require('node-xlsx')
// npm install chalk@4.1.2
const chalk = require("chalk")

const xlsxx = xlsx.parse(fs.readFileSync(`${__dirname}/key.xlsx`))[0].data
// const workSheetsFromFile = xlsx.parse(`${__dirname}/key.xlsx`)

// fs.writeFileSync("bd.txt","")
let text = ""
for(i=1;i<xlsxx.length;i++){
   // fs.appendFileSync("bd.txt", `${xlsxx[i].toString()} \n`)
   text += i + "," + xlsxx[i].toString()+"\n"
}

// .replace( /,/g, "" )
module.exports = text
c(chalk.bgRed.bold(" модуль _text.js_ экспортирован "))