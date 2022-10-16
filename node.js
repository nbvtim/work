const 
    c = console.log
    fs = require('fs')
    xlsx = require('node-xlsx').parse(fs.readFileSync(`C:/Users/User/Desktop/ДОКУМЕНТЫ/1 смена СВК/Яицких Т.Е/ОПИСИ/all.xlsx`))
    chalk = require("chalk") // npm install chalk@4.1.2

for (let i = 0; i < xlsx.length; i++) {
    c(translit(xlsx[i].name))
}

html_text = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="favicon.svg">
    <link rel="stylesheet" href="html.css">
    <title>nbv &#127759;</title>
</head>
<body>
    <form action="" method="get">
        <input type="text" placeholder="Ваше имя" name="Name"> <br>
        <input type="text" placeholder="Ваш телефон" name="Phohe"> <br>
        <input type="submit" value="Подтвердить">
    </form>
    
    <div>
        <input  id="tg_message" type="text" placeholder="Что нужно изменить? &#9997"><!-- --><button id="tg_button">&#10004;</button>
    </div>

    <input  id="input_car" type="text" placeholder="ПОИСК ПО МАШИНАМ">

<pre id="pre_car">
${JSON.stringify(xlsx[0].data)}
</pre>
<pre id="pre_key">
${""}
</pre>
        <script src="html.js"></script>
</body>
</html>
`
fs.writeFileSync("index.html", html_text)

// Транслитерация с русского на английский
function translit(text){
    let result =""
    let letters = [ 
    ["а","a"], ["б","b"], ["в","v"], ["г","g"], ["д","d"], ["е","e"], ["ё","yo"], ["ж","zh"], ["з","z"], ["и","i"], ["й","j"], ["к","k"], ["л","l"], ["м","m"], ["н","n"], ["о","o"], ["п","p"], ["р","r"], ["с","s"], ["т","t"], ["у","u"], ["ф","f"], ["х","h"], ["ц","c"], ["ч","ch"], ["ш","w"], ["щ","shh"], ["ъ","''"], ["ы","y"], ["ь","'"], ["э","e"], ["ю","yu"], ["я","ya"], ["А","A"], ["Б","B"], ["В","V"], ["Г","G"], ["Д","D"], ["Е","E"], ["Ё","YO"], ["Ж","ZH"], ["З","Z"], ["И","I"], ["Й","J"], ["К","K"], ["Л","L"], ["М","M"], ["Н","N"], ["О","O"], ["П","P"], ["Р","R"], ["С","S"], ["Т","T"], ["У","U"], ["Ф","F"], ["Х","H"], ["Ц","C"], ["Ч","CH"], ["Ш","W"], ["Щ","SHH"], ["Ъ",""], ["Ы","Y"], ["Ь",""], ["Э","E"], ["Ю","YU"], ["Я","YA"], ["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["e", "e"], ["f", "f"], ["g", "g"], ["h", "h"], ["i", "i"], ["j", "j"], ["k", "k"], ["l", "l"], ["m", "m"], ["n", "n"], ["o", "o"], ["p", "p"], ["q", "q"], ["r", "r"], ["s", "s"], ["t", "t"], ["u", "u"], ["v", "v"], ["w", "w"], ["x", "x"], ["y", "y"], ["z", "z"], ["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["H", "H"], ["I", "I"], ["J", "J"], ["K", "K"], ["L", "L"], ["M", "M"], ["N", "N"], ["O", "O"], ["P", "P"], ["Q", "Q"], ["R", "R"], ["S", "S"], ["T", "T"], ["U", "U"], ["V", "V"], ["W", "W"], ["X", "X"], ["Y", "Y"], ["Z", "Z"] ]
    for (let j = 0; j < text.length; j++) {
        for (let i = 0; i < letters.length; i++) {
            if(text[j] == letters[i][0]){
            result += letters[i][1]
        }
    }
    }return result
}

c(chalk.rgb(0,0,200).bold(`
${__dirname+"\\index.html"}
https://nbvtim.github.io/work/`))