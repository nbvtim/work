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
        *       {margin: 0;padding: 0;box-sizing: border-box;font-family: sans-serif;}
        body    {margin: 10px 10px;}
        .input  {color: rgb(255, 255, 255); font-weight:bolder; width: 100%;height: 5em;border-radius: 10px;background-color: rgb(139, 143, 255);padding: 10px;border: 5px solid rgb(255, 191, 191);}
        .input::-webkit-input-placeholder { color: rgb(255, 255, 255); font-weight:bolder;} 
        label p {font-size: 0.7em;}
        table   {border-collapse: collapse;margin-top: 10px;width: 100%;}
        td,th   {padding: 5px;font-size: 0.7em;font-family: sans-serif;border: 1px solid rgb(128, 128, 128);}
        th      {background-color: rgb(212, 212, 212);}
    </style>
    <link rel="icon" href="favicon.svg">
    <meta charset="UTF-8">
    <title>NBV</title>
</head>
<body>


    <div>
        <input type="text" class="local_txt" placeholder="Введите имя">
        <button class="local_button">Подтвердить</button>
    </div>
    <label>
        <input  class="tg_message" type="text" placeholder="что нужно изменить?">
        <button class="tg_button">отправить</button>
        <p>текст отправляется в <a href="https://web.telegram.org/k/#@Timnbv_bot">Telegram</a></p>
    </label>

    <div    class="div" style="color: #b5baff; font-size: .2em;">@Tim_Yaitskikh Mail: exelent206@gmail.com Telegram: @Tim_ax</div>
    <input  class="input" type="text" autofocus placeholder="ПОИСК">

<pre    class="pre" style="color: rgb(186, 181, 255);">
${text}</pre>

    <script> let c = console.log
        window.onload = function(){
            
            document.querySelector(".local_button").addEventListener("click", function(e){
                let name = ''
                
                name = document.querySelector(".local_txt").value
                localStorage.setItem(name, name)
                
                let message = localStorage.getItem(name)
                let url = "https://api.telegram.org/bot5465151197:AAEo00Fhed2kh8jn_4T_0OYyvCoukbiwjkM/sendMessage?chat_id=5131265599&text="
                let xhttp = new XMLHttpRequest()
                xhttp.open("GET", url + message , true)
                xhttp.send()
                document.querySelector(".local_txt").value = ''
            })

            let 
                c = console.log
                input = document.querySelector(".input")
                pre = document.querySelector(".pre")
                div = document.createElement("div")
                tg_message = document.querySelector(".tg_message")
                

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
                    tg_message.value = input.value
                }else{
                    pre.style.display = 'block'
                    div.style.display = 'none'
                    tg_message.value = ""
                }
            })


            // отправка сообщения в телеграм

            // https://api.telegram.org/bot5465151197:AAEo00Fhed2kh8jn_4T_0OYyvCoukbiwjkM/getUpdates - переходим по адресу
            // https://api.telegram.org/bot5465151197:AAEo00Fhed2kh8jn_4T_0OYyvCoukbiwjkM/sendMessage?chat_id=5131265599&text=бот_напишет_себе
            // https://api.telegram.org/bot5465151197:AAEo00Fhed2kh8jn_4T_0OYyvCoukbiwjkM/sendMessage?chat_id=-842465935&text=бот_напишет_в_группу
        
            document.querySelector(".tg_button").onclick = function(){
                let url = "https://api.telegram.org/bot5465151197:AAEo00Fhed2kh8jn_4T_0OYyvCoukbiwjkM/sendMessage?chat_id=5131265599&text="

                let xhttp = new XMLHttpRequest()
                xhttp.open("GET", url + document.querySelector(".tg_message").value , true)
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