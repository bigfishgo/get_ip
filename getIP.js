const http = require('http')
const https = require('https')
var a
function getStr() {
    return new Promise((resolve, reject) => {
        http.get("http://ip.json-json.com", data => {
            var str = "";
                data.on("data", chunk => {
                    str += chunk
                })
            data.on("end", () => {
                resolve(str)
            })
        })
    })
}

setInterval(() => {
    getStr().then(res => {
        // console.log(res)
        if(a!==res){
            console.log(a);
            console.log('-==========================-');
            https.get(`https://&text=${res}`)
        }
        a = res
 console.log(a);
    })
}, 3600000);
