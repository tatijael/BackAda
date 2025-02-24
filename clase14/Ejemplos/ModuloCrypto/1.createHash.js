const crypto = require('crypto');

const data = 'Este es un mensaje secreto';

const hash = crypto.createHash('sha256');

hash.update(data);

const hashOutput = hash.digest('hex');

console.log('hash de sha256:', hashOutput);