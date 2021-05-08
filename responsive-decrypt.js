const arguments = process.argv.slice(2);
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const password = 'password used to generate key'
const key = crypto.scryptSync(password, 'salt', 24);


var iv = new Buffer.alloc(16, 'd4 90 24 cb 4f 21 2b 31 8a df a5 4a 99 fe e2 6a');
var ivstring = iv.toString('hex').slice(0, 16);
const decipher = crypto.createDecipheriv(algorithm, key, ivstring, 24);

let decrypted = '';

decipher.on('readable', () =>
{
    let chunk;
    while (null !== (chunk = decipher.read()))
    {
        decrypted += chunk.toString('utf8');
    }
});

decipher.on('end', () => console.log(decrypted));

const encrpyted_message = arguments.toString();
decipher.write(encrpyted_message,'hex');
decipher.end();