const http = require('http')
const https = require('https')
const fs = require("fs");
var ip
var url
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

fs.readFile("urlFile.txt", "utf-8", function(error, data) {
    // console.log(error);  //如果err为null就说明读取成功了,没有出错
    // console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出

    //  用error来判断文件是否读取成功
    if (error) return console.log("读取文件失败,内容是" + error.message);
    url = data;
    console.log("读取文件成功,内容是" + data);

});

setInterval(() => {
    getStr().then(res => {
        // console.log(res)
        if(ip!==res){
            console.log(ip);
            console.log('-==========================-');
            https.get(`${url}&text=${res}`)
        }
        ip = res
 console.log(ip);
    })
}, 3600000);
