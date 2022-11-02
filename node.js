const
    c = console.log
    fs = require('fs')
    xlsx = require('node-xlsx')
    chalk = require("chalk") // npm install chalk@4.1.2

//fs.copyFileSync("./SOURS/all.xlsx" , "C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/Яицких Т.Е/ОПИСИ/all_clone.xlsx")

xlsx = xlsx.parse(fs.readFileSync(`${__dirname}/SOURS/all.xlsx`))
fs.writeFileSync("SOURS/all.json", JSON.stringify(xlsx,null,"  "))

console.log(chalk.rgb(0,0,200).bold(`https://nbvtim.github.io/work/
${__dirname.replace(/\\/g, '/')}/index.html
${__dirname}\\index.html
Операционная система - ${process.env.OS}`))

// const app = require("express")()
// let PORT = 777
// app.listen(PORT,function(){c("Server...")})
// app.get("/", function(req,res){
//     res.send(__filename)
// })

// Транслитерация с русского на английский
/*function translit(text){
    let result =""
    let letters = [ 
    ["а","a"], ["б","b"], ["в","v"], ["г","g"], ["д","d"], ["е","e"], ["ё","yo"], ["ж","zh"], ["з","z"], ["и","i"], ["й","j"], ["к","k"], ["л","l"], ["м","m"], ["н","n"], ["о","o"], ["п","p"], ["р","r"], ["с","s"], ["т","t"], ["у","u"], ["ф","f"], ["х","h"], ["ц","c"], ["ч","ch"], ["ш","w"], ["щ","shh"], ["ъ","''"], ["ы","y"], ["ь","'"], ["э","e"], ["ю","yu"], ["я","ya"], ["А","A"], ["Б","B"], ["В","V"], ["Г","G"], ["Д","D"], ["Е","E"], ["Ё","YO"], ["Ж","ZH"], ["З","Z"], ["И","I"], ["Й","J"], ["К","K"], ["Л","L"], ["М","M"], ["Н","N"], ["О","O"], ["П","P"], ["Р","R"], ["С","S"], ["Т","T"], ["У","U"], ["Ф","F"], ["Х","H"], ["Ц","C"], ["Ч","CH"], ["Ш","W"], ["Щ","SHH"], ["Ъ",""], ["Ы","Y"], ["Ь",""], ["Э","E"], ["Ю","YU"], ["Я","YA"], ["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"], ["g", "g"], ["h", "h"], ["i", "i"], ["j", "j"], ["k", "k"], ["l", "l"], ["m", "m"], ["n", "n"], ["o", "o"], ["p", "p"], ["q", "q"], ["r", "r"], ["s", "s"], ["t", "t"], ["u", "u"], ["v", "v"], ["w", "w"], ["x", "x"], ["y", "y"], ["z", "z"], ["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["H", "H"], ["I", "I"], ["J", "J"], ["K", "K"], ["L", "L"], ["M", "M"], ["N", "N"], ["O", "O"], ["P", "P"], ["Q", "Q"], ["R", "R"], ["S", "S"], ["T", "T"], ["U", "U"], ["V", "V"], ["W", "W"], ["X", "X"], ["Y", "Y"], ["Z", "Z"] ]
    for (let j = 0; j < text.length; j++) {
        for (let i = 0; i < letters.length; i++) {
            if(text[j] == letters[i][0]){
                result += letters[i][1]
                break
            }
        }
    }return result
}c(translit("ТИМ"))*/