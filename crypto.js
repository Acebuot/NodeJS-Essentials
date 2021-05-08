const crypto = require('crypto');

// //md5 is fast but old. prone to injection attack.
// //companies might still use it to quickly hide some data
// const hash = crypto.createHash('md5') //algorithim: 'string'
// .update('password') //data: 'string' or crypto.likeBinary
// .digest(); //gives us result of the hash

// console.log(hash);

//secret key adds an extra layer of security
//key is best kept in an environment variable sp it's not available in a code base to see
const secret = 'secret key';

const hash = crypto.createHmac('sha256', secret)
.update('password')
.digest('hex');

console.log(hash);