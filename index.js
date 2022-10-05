const 
    c = console.log
    fs = require('fs')
    xlsx = require('node-xlsx')
    xlsxx = xlsx.parse(fs.readFileSync(`${__dirname}/key.xlsx`))[0].data
    chalk = require("chalk") // npm install chalk@4.1.2
    text = ""
/*система контроля версии*/
    let package_json = JSON.parse(fs.readFileSync("package.json","utf8"))
    package_json.version = `0.0.${++package_json.version.split(".")[2]}`
    fs.writeFileSync("package.json", JSON.stringify(package_json))
/*-----------------------*/
for(i = 0; i < xlsxx.length; i ++){
        text += "[" + xlsxx[i] + "]\n"
}
let htmlText = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <style>
        td{
            font-size: 0.7em;
            border: 1px solid;
            width: 100px;
            font-family: sans-serif;
        }
    </style>
    <meta charset="UTF-8">
    <title>NBV</title>
</head>
<body>
<input  class="tg_message" type="text" >
<button class="tg_button">Отправить в телеграм</button>
<div    class="div" style="color: #b5baff; font-size: .2em;">@Tim_Yaitskikh Mail: exelent206@gmail.com Telegram: @Tim_ax</div>
<input  class="input" type="text" alt="asds" autofocus placeholder="ПОИСК" value=""><span> v_${package_json.version} </span>
<pre    class="pre" style="color: rgb(186, 181, 255);">
${text}</pre>

    <script>
    window.onload = function(){
        let 
            c = console.log
            input = document.querySelector(".input")
            pre = document.querySelector(".pre")
            div = document.createElement("div")

        input.addEventListener("keyup", function(e){
            pozition = pre.innerText.indexOf(input.value)
            let arr = []
            while (input.value != "" && pozition != -1) {
                arr.push(pozition)
                pozition = pre.innerText.indexOf(input.value, pozition + 1)
            }
    
            if(input.value != "" && arr.length > 0){
                let arrStr = []
                for(j=0;j<arr.length;j++){    
                    let str1=""
                    let str2=""
                    for( i = arr[j]; i < pre.innerText.length; i++){
                        if(pre.innerText[i] === "]"){break}
                        else{str2 += pre.innerText[i]}
                    }
                    for( i = arr[j]; i < pre.innerText.length; i--){
                        if(pre.innerText[i-1] === "["){break}
                        else{str1 += pre.innerText[i-1]}
                    }
                    str1 = str1.split('').reverse().join('')   
                    arrStr.push((str1+str2).split(","))
                }
                let text = ""
                let textM = ""
                for (let i = 0; i < "${xlsxx[0]}".split(",").length; i++) {
                    textM += "<td>" + "${xlsxx[0]}".split(",")[i] + "</td>"
                }
                textM = "<tr>" + textM + "</tr>"
                c()
                //j - количество столбцов
                //i - количество строк
                for (let i = 0; i < arrStr.length; i++) {
                    text+="</tr>"
                    for (let j = 0; j < arrStr[i].length; j++) {
                        text+="<td>"+arrStr[i][j]+"</td>"
                    }
                }
                div.innerHTML = "<table>"+ textM + text + "</table>"
                document.body.append(div)
                pre.style.display = 'none'
                div.style.display = 'block'
            }else{
                pre.style.display = 'block'
                div.style.display = 'none'
            }
        })


        // отправка сообщения в телеграм

        // https://api.telegram.org/bot5465151197:AAEo00Fhed2kh8jn_4T_0OYyvCoukbiwjkM/getUpdates - переходим по адресу
        // https://api.telegram.org/bot5465151197:AAEo00Fhed2kh8jn_4T_0OYyvCoukbiwjkM/sendMessage?chat_id=5131265599&text=бот_напишет_себе
        // https://api.telegram.org/bot5465151197:AAEo00Fhed2kh8jn_4T_0OYyvCoukbiwjkM/sendMessage?chat_id=-842465935&text=бот_напишет_в_группу
    
        document.querySelector(".tg_button").onclick = function(){
            const token = "5465151197:AAEo00Fhed2kh8jn_4T_0OYyvCoukbiwjkM"
            let message = document.querySelector(".tg_message")
            let url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=5131265599&text="
            let xhttp = new XMLHttpRequest()
            xhttp.open("GET", url + message.value , true)
            xhttp.send()
            document.querySelector(".tg_button").style.display = "none"
            message.value = ""
        }
    }
    
    </script>
</body>
</html>
`
fs.writeFileSync("index.html", htmlText)

c(chalk.rgb(0,0,200).bold(`
https://nbvtim.github.io/work/`))

// let nbv = fs.readFileSync("index.html","utf8")
// fs.writeFileSync("1",nbv)
// c(nbv)