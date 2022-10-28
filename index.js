
const c = console.log

let xhr = new XMLHttpRequest()
xhr.open("GET", "https://nbvtim.github.io/work/SOURS/db.json", false) // данные берутся с сервера, возможна задержка 
xhr.send()

//pre.innerText = JSON.stringify(JSON.parse(xhr.response)[1].data, null, "    ")
c(pre)

window.addEventListener('load', function(){

    let div = document.createElement("div")
    input_.addEventListener('input', function(){
        let table = ""
        let arr = []
        let db = JSON.parse(xhr.response)[0].data

//делаем массив значений
        for (let i = 0; i < db.length; i++) {
            let index = db[i].join(",").toUpperCase().indexOf(input_.value.toUpperCase())
            if(index != -1 && input_.value != ""){
                arr.push(db[i])
            }
        }
//формируем HTML таблицу
        table = "<table><tbody>"
        table += "<tr>"
        for (let i = 0; i < db[0].length; i++) {
            table += "<th>"+db[0][i]+"</th>"
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
// tg_button.onclick = function(){
//     if(tg_message.value != ""){
//         send_tg(tg_message.value)
//         tg_message.value = ""
//     }
// }
function send_tg(text){
    // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/getUpdates - переходим по адресу
    // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=5131265599&text=бот_напишет_себе
    // https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=-842465935&text=бот_напишет_в_группу
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "https://api.telegram.org/bot5624303376:AAHW9oj4Nv7xsD4-L8wYTmHq1dvGiW33uNE/sendMessage?chat_id=5131265599&text=" + text, true)
    xhttp.send()
}send_tg(new Date)
