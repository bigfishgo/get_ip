'use strict'
const os = require('os')

/**
 * 获取当前机器的本地ip地址
 */
function getIpAddress() {
    var interfaces=os.networkInterfaces()

    for (var dev in interfaces) {
        let iface = interfaces[dev]

        for (let i = 0; i < iface.length; i++) {
            let {family, address, internal} = iface[i]

            if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
                return address
            }
        }
    }
}

const ipAddress = getIpAddress()
console.log(ipAddress)

module.exports = {
    ipAddress
}