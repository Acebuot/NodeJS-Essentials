const crypto = require('crypto');

//algorithm and password are similar to the key example in crypto.js
const algorithm = 'aes-192-cbc';
const password = 'password used to generate key'

//the key this time is generated by a crypto function
//passing in the password, using the salt to add more complexity to the key, and 24 here is keylen, the length of the key we want to generate
//salt is recommended to be random and 16 bytes long. readmore: https://nodejs.org/api/crypto.html#crypto_crypto_scryptsync_password_salt_keylen_options
const key = crypto.scryptSync(password, 'salt', 24);

//use the algorithm and key as 'rules' ton encrypt our data
//in the course I was taking, they were using deprecated code
//const cipher = crypto.createCipher(algorithm, key);

//the new solution i found with buffer is also deprecated LOL
//https://stackoverflow.com/questions/42485408/getting-error-of-invalid-iv-length-while-using-aes-256-cbc-for-encryption-in-nod
//var iv = new Buffer(crypto.randomBytes(16));


//I generated random 16 bytes in app.js and create a new buffer with it.
//then make sure it's the right length before creating a cipher
var iv = new Buffer.alloc(16, 'd4 90 24 cb 4f 21 2b 31 8a df a5 4a 99 fe e2 6a');
var ivstring = iv.toString('hex').slice(0, 16);
const cipher = crypto.createCipheriv(algorithm, key, ivstring, 24);

let encrypted = '';

//add event listener to cipher readable event
cipher.on('readable', () =>
{
    let chunk;
    while (null !== (chunk = cipher.read()))
    {
        encrypted += chunk.toString('hex');
    }
});

//event listener for when cipher finishes the text it recieved
cipher.on('end', () => console.log(encrypted));

//trigger both listeners
cipher.write('send nudes');
cipher.end();