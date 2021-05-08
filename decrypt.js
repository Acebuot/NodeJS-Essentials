const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'password used to generate key'
const key = crypto.scryptSync(password, 'salt', 24);


var iv = new Buffer.alloc(16, 'd4 90 24 cb 4f 21 2b 31 8a df a5 4a 99 fe e2 6a');
var ivstring = iv.toString('hex').slice(0, 16);
const decipher = crypto.createDecipheriv(algorithm, key, ivstring, 24);

let decrypted = '';

//add event listener to decipher readable event
decipher.on('readable', () =>
{
    let chunk;
    while (null !== (chunk = decipher.read()))
    {
        //don't forget to reverse hex to utf8 and vice versa
        decrypted += chunk.toString('utf8');
    }
});

//event listener for when decipher finishes the text it recieved
decipher.on('end', () => console.log(decrypted));


//don't forget to reverse hex to utf8 and vice versa
//set encrpted files to encrypted
//trigger both listeners
const encrpyted = '233928ab6532614e52ca10b33cc1f9f3';
decipher.write(encrpyted,'hex');
decipher.end();