const crypto = require('crypto');

const data = "Mensaje Secreto"

const secretKey = 'mi_clave_secreta'

const hmac = crypto.createHmac('sha256', secretKey)

hmac.update(data)

const hmacOutPut = hmac.digest('hex')

console.log("HMAC DE SHA256:", hmacOutPut)