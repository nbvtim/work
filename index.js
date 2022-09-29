const 
    c = console.log
    fs = require('fs')
    xlsx = require('node-xlsx')
    xlsxx = xlsx.parse(fs.readFileSync(`${__dirname}/key.xlsx`))[0].data
    chalk = require("chalk") // npm install chalk@4.1.2
    text = ""
    
for(i=0;i<xlsxx.length;i++){
    text += ("[" + xlsxx[i].toString()+"]\n")//.replace( /,/g, ",  \t" )
}

let htmlText = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>nbv</title>
</head>
<body>
    <div style="color: #b5baff; font-size: .2em;">v1.0.1 @Tim_Yaitskikh Mail: exelent206@gmail.com Tel: +7 918 2117958</div>
    <input type="text" alt="asds" autofocus placeholder="ПОИСК" value="">
    <pre>
${text}
    </pre>

    <script>
window.onload = function(){
    let 
        c = console.log
        input = document.querySelector("input")
        pre = document.querySelector("pre")
        div = document.createElement("div")

    input.addEventListener("keyup", (event)=>{
        pozition = pre.innerText.indexOf(input.value)
        let str1 = ""
        let str2 = ""
        let result = ""
        if(input.value != "" && pozition != -1){
            pre.style.display = "none"
            for(i=pozition;i<pre.innerText.length;i++){
                if(pre.innerText[i] === "]"){
                    break
                }else{
                    str1 += pre.innerText[i]
                }
            }
            for(i=pozition;i<pre.innerText.length;i--){
                if(pre.innerText[i-1] === "["){
                    break
                }else{
                    str2 += pre.innerText[i-1]
                }
            }
            str2 = str2.split('').reverse().join('')

            let xxx = (str2 + str1).split(",")
            let yyy = ("${xlsxx[0]}").split(",")

            for(i=0;i<yyy.length; i++){
                result += yyy[i] + " : " + xxx[i] + "<br>"
            }
            div.innerHTML = result
            div.id = "idDiv"
            document.body.append(div)
        }else{
            pre.style.display = "block"
            document.querySelector("#idDiv").style.display = "none"
        }
    })
} 
    </script>
</body>
</html>`

fs.writeFileSync("index.html",htmlText)

c(chalk.rgb(0,0,200).bold(`https://nbvtim.github.io/work/`))