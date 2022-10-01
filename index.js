const 
    c = console.log
    fs = require('fs')
    xlsx = require('node-xlsx')
    xlsxx = xlsx.parse(fs.readFileSync(`${__dirname}/key.xlsx`))[0].data
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
        td{font-size: 0.7em;border: 1px solid;}
    </style>
    <meta charset="UTF-8">
    <title>v1.0.7</title>
</head>
<body>

    <div style="color: #b5baff; font-size: .2em;">@Tim_Yaitskikh Mail: exelent206@gmail.com Tel: +7 918 2117958</div>
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
                pre.style.display = 'none'
                div.style.display = 'block'
                
                let text = ""
                //j - количество столбцов
                //i - количество строк
                for (let i = 0; i < arrStr.length; i++) {
                    text+="</tr>"
                    for (let j = 0; j < arrStr[i].length; j++) {
                        text+="<td>"+arrStr[i][j]+"</td>"
                    }}
                    c(arrStr[0][0])


                div.innerHTML = "<table>"+text+"</table>"
                document.body.append(div)
            }else{
                pre.style.display = 'block'
                div.style.display = 'none'
            }
        })
    }
    </script>
</body>
</html>`

fs.writeFileSync("index.html",htmlText)

c(chalk.rgb(0,0,200).bold(`
https://nbvtim.github.io/work/`))