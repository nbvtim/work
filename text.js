const c = console.log
const fs = require('fs')
const xlsx = require('node-xlsx')

const xlsxx = xlsx.parse(fs.readFileSync(`${__dirname}/key.xlsx`))[0].data
// const workSheetsFromFile = xlsx.parse(`${__dirname}/key.xlsx`)

let text = ""
for(i=0;i<xlsxx.length;i++){
   // fs.appendFileSync("bd.txt", `${xlsxx[i].toString()} \n`)
   text += ("[" + xlsxx[i].toString()+"]\n")//.replace( /,/g, ",  \t" )
}

module.exports = text
