//document.location.reload()
const c = console.log

window.addEventListener('load', function(){
    let div = document.createElement("div")
    input_car.addEventListener('input', function(){
        let table = ""
        let arr = []
//делаем массив значений
        for (let i = 0; i < JSON.parse(pre_car.innerText).length; i++) {
            let index = JSON.parse(pre_car.innerText)[i].join(",").toUpperCase().indexOf(input_car.value.toUpperCase())
            let arr_  = JSON.parse(pre_car.innerText)[i]
            if(index != -1 && input_car.value != ""){
                arr.push(arr_)
            }
        }
//формируем HTML таблицу
        table = "<table><tbody>"
        table += "<tr>"
        for (let i = 0; i < JSON.parse(pre_car.innerText)[0].length; i++) {
            table += "<th>"+JSON.parse(pre_car.innerText)[0][i]+"</th>"
        }
        table += "</tr>"
        for (let i = 0; i < arr.length; i++) {
            table += "<tr>"
            for (let j = 0; j < arr[i].length; j++) {
                table += "<td>"+arr[i][j]+"</td>"
            }
            table += "</tr>"
        }
        table += "</tbody></table>"
//вставляем таблицу в документ
        div.innerHTML = ""
        document.body.append(div)
        div.innerHTML = table
        document.body.append(div)
        if(arr.length === 0){
            div.style.display = "none"
        }else(
            div.style.display = "block"
        )
    })
})

// отправка сообщения в телеграм
tg_button.onclick = function(){
    send_tg(tg_message.value)

}
function send_tg(text){
    // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/getUpdates - переходим по адресу
    // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=5131265599&text=бот_напишет_себе
    // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=-842465935&text=бот_напишет_в_группу
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=5131265599&text=" + text, true)
    xhttp.send()
}

let xhr = new XMLHttpRequest()
xhr.open("GET", "https://nbvtim.github.io/work/SOURS/db.json", false)//
xhr.send()
c(xhr.response[0].data[0])
    
