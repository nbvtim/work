        let c = console.log
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://nbvtim.github.io/work/db.json", false)
        xhr.send()
        let pre = document.createElement("pre")
        pre.innerHTML = xhr.response
        document.body.prepend(pre)
        c(JSON.parse(xhr.response)[0].data[0][0])
