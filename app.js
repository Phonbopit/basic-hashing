'use strict';

const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secretJingJing');

hmac.update('Unit tests are like condoms. Nobody uses them. LOL');
console.log('base64 : ', hmac.digest('base64'));
// console.log('hex : ', hmac.digest('hex'));

// **Note: hmac.digest() can not be used again after called.