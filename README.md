<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let c = console.log
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://nbvtim.github.io/work/db.json", false)
        xhr.send()
        let pre = document.createElement("pre")
        pre.innerHTML = xhr.response
        document.body.prepend(pre)
        c(JSON.parse(xhr.response)[0].data[0][0])
    </script>
</body>
</html>