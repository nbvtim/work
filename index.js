const xlsxx = require("./text.js")

const 
    c = console.log,
    text = require("./text.js")
    fs = require('fs')
    chalk = require("chalk") // npm install chalk@4.1.2
    htmlText = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>nbv</title>
</head>
<body>
    <div style="color: #0011ff; font-size: .2em;">@Tim_Yaitskikh Mail: exelent206@gmail.com Tel: +7 918 2117958</div>
    <input type="text" alt="asds" autofocus placeholder="ПОИСК" value="">
    <pre>${text}</pre>
    <script>
        let c = console.log
        let input = document.querySelector("input")
        let pre = document.querySelector("pre")
        let div = document.createElement("div")
        let result = ""
        input.addEventListener("keyup", (ev)=>{
            pre.style.display = "none"
            pozition = pre.innerText.indexOf(input.value)
            sumbol   = pre.innerText[pozition]
            div.innerHTML = "Позиция записи: " + pozition
            document.body.append(div)
         })

    </script>
</body>
</html>`

fs.writeFileSync("index.html",htmlText)

c(chalk.rgb(0,0,200).bold(`$npm i - устанавливаем все зависимости
проект написан на Node
$node index - Файл index.html сформирован
произвести коммит
на GitHab размещена страница index.html остальные файлы формируют ее
поэтому изменять код HTML нужно в файле index.js
страница доступна по адресу - https://nbvtim.github.io/work/`))