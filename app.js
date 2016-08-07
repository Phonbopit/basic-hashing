'use strict';

const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secretJingJing');
const hash = crypto.createHash('sha256');

const QUOTE_OF_THE_DAY = 'Unit tests are like condoms. Nobody uses them. LOL';
// HMAC
hmac.update(QUOTE_OF_THE_DAY);
const result = hmac.digest('hex');
console.log('hex : ', result);

// **Note: hmac.digest() can not be used again after called.


// checksum
if ('d6530c7b10ac7216f13867fbb2764eb8b21efbbbd5cc93ca5a13994565dc4aa0' === result) {
  console.log('hoolay! awesome quote');
} else {
  console.log('nobody trusts you');
}


// HASH
hash.update(QUOTE_OF_THE_DAY);
console.log('Hash : ', hash.digest('hex'));