const 
    c = console.log,
    text = require("./text.js")
    const fs = require('fs')

    let htmlText = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>nbv</title>
</head>
<body>
    <input type="text">
    <pre>${text}</pre>
    <script>
        let c = console.log
    </script>
</body>
</html>
    `
    fs.writeFileSync("index.html",htmlText)


