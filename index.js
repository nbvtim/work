const 
    c = console.log
    fs = require('fs')
    xlsx = require('node-xlsx')
    xlsxx = xlsx.parse(fs.readFileSync(`${__dirname}/all.xlsx`))[0].data
    chalk = require("chalk") // npm install chalk@4.1.2
    text = ""

for(i = 0; i < xlsxx.length; i ++){
    text += "[" + xlsxx[i] + "]\n"
}
let htmlText = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <style>
        :active, :hover, :focus {outline: 0;outline-offset: 0;}
        *       {margin: 0;padding: 0;box-sizing: border-box;font-family: sans-serif;}
        body    {margin: 10px 10px;}
        .input  {font-size: 1em; font-weight:bolder; width: 35%;height: 40px;padding: 10px;margin-bottom: 10px;}
        .input::-webkit-input-placeholder {color: rgb(255, 255, 255); font-weight:bolder;} 
        label p {font-size: 0.7em;}
        table   {border-collapse: collapse; width: 100%;}
        td,th   {padding: 5px;font-size: 0.7em;border: 1px solid rgb(128, 128, 128);}
        th      {background-color: rgb(212, 212, 212);}
        .tg_div {margin: 10px 0px;}
        .tg_message {width: calc(35% - 40px); height: 40px; font-size: 1em; padding-left: 10px;}
        .tg_button  {height: 40px;width: 40px;}
    </style>
    <link rel="icon" href="favicon.svg">
    <meta charset="UTF-8">
    <title>NBV</title>
</head>
<body>

    <div class="tg_div">
        <input  class="tg_message" type="text" placeholder="Что нужно изменить? &#9997"><button class="tg_button">&#10004;&#65039;</button> 
    </div>

    <input  class="input" type="text" autofocus placeholder="ПОИСК ПО АВТОТРАНСПОРТУ">

<pre class="pre" style="color: rgb(186, 181, 255); display: none;">
${text}</pre>

    <script> let c = console.log

        window.onload = function(){
            let 
                input = document.querySelectorAll(".input")[0]
                pre = document.querySelector(".pre")
                div = document.createElement("div")
                tg_message = document.querySelector(".tg_message")
// типо регистрация
            if(localStorage.getItem("name")){
                let div = document.createElement("div")
                div.innerHTML = "Вы зашли под именем : " + localStorage.getItem("name") + " <button>Удалить</button>"
                document.body.prepend(div)
                document.querySelector("button").addEventListener("click", function(){
                    localStorage.removeItem('name')
                })
                send_tg(" --- " + localStorage.getItem("name") + " --- ")
            }else{
                input.style.display = "none"
                let div = document.createElement("div")
                div.innerHTML = "<input type='text' placeholder='Введите имя'>"+" <button>Подтвердить</button>"
                document.body.prepend(div)
                document.querySelector("button").addEventListener("click", function(){
                    localStorage.setItem("name", document.querySelector("input").value)
                    div.style.display = "none"
                    document.querySelector(".tg_div").style.display = "none"
                })
            }
// Поиск
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
                        textM += "<th>" + "${xlsxx[0]}".split(",")[i] + "</th>"
                    }
                    textM = "<tr>" + textM + "</tr>"
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
                    tg_message.value = input.value
                }else{
                    pre.style.display = 'none'//
                    div.style.display = 'none'
                    tg_message.value = ""
                }
            })

// отправка сообщения в телеграм
            document.querySelector(".tg_button").onclick = function(){
                send_tg(localStorage.getItem("name") +":%7B" + document.querySelector(".tg_message").value + "%7D")
                document.querySelector(".tg_button").style.display = "none"
                tg_message.value = ""
            }
        }
function send_tg(text){
    // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/getUpdates - переходим по адресу
    // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=5131265599&text=бот_напишет_себе
    // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=-842465935&text=бот_напишет_в_группу
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=5131265599&text=" + text, true)
    xhttp.send()
}

    </script>
</body>
</html>
`
fs.writeFileSync("index.html", htmlText)

c(chalk.rgb(0,0,200).bold(`
https://nbvtim.github.io/work/`))

//xlsx = require('node-xlsx').parse(fs.readFileSync(`${__dirname}/all.xlsx`))
//fs.writeFileSync("db.json",JSON.stringify(xlsx, null,"  "))