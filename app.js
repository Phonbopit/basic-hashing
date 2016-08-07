'use strict';

const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secretJingJing');

hmac.update('Unit tests are like condoms. Nobody uses them. LOL');
const hash = hmac.digest('hex');
console.log('hex : ', hash);

// **Note: hmac.digest() can not be used again after called.


// checksum
if ('d6530c7b10ac7216f13867fbb2764eb8b21efbbbd5cc93ca5a13994565dc4aa0' === hash) {
  console.log('hoolay! awesome quote');
} else {
  console.log('nobody trusts you');
}