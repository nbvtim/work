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
    <div style="color: rgb(256, 0, 0); font-size: .2em;">@Tim_Yaitskikh Mail: exelent206@gmail.com Tel: +7 918 2117958</div>
    <input type="text">
    <pre>${text}</pre>
    <script>
        let c = console.log
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