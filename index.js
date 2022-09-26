const 
    c = console.log,
    text = require("./text.js")
    const fs = require('fs')
    chalk = require("chalk") // npm install chalk@4.1.2

    let htmlText = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>nbv</title>
</head>
<body>
    <div style="color: rgb(163, 163, 163);">@Tim_Yaitskikh Mail: exelent206@gmail.com Tel: +7 918 2117958</div>
    <input type="text">
    <pre>${text}</pre>
    <script>
        let c = console.log
    </script>
</body>
</html>`

fs.writeFileSync("index.html",htmlText)

c(chalk.bgBlue.bold("https://nbvtim.github.io/work/"))
