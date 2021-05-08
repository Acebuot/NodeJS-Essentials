const zlib = require('zlib');
const fs =require('fs');

const gzip = zlib.createGzip();

const input = fs.createReadStream('hello.html');
const output = fs.createWriteStream('hello.html.gz')

input.pipe(gzip).pipe(output);


//createunzip for unzipping 
//sync func if you don't want to use a stream :)
//also have brotli algorithm as well