const fs = require('fs');

////returns string of the specified file
//const data = fs.readFileSync('system.js');
//console.log(data.toString());

////make new file with this text
//fs.writeFileSync('data.txt', "Hello world");

////adding new data to existing file
//fs.appendFileSync('data.txt', " and you, John");

////copy pasting files
//fs.copyFileSync('data.txt', 'data.bak.txt');

////rename files
//fs.renameSync('data.bak.txt', 'data.old.txt');

////delete files
//fs.unlinkSync('data.old.txt');

////list of files from a dir
//const dir = fs.readdirSync(__dirname);
//console.log(dir);

////make a new directory (folder)
//fs.mkdirSync('file-system');

////move a file to a new dir
//fs.renameSync('data.txt', 'file-system/data.txt');

////watch if a file changes, if changes then execute command
// fs.watchFile('file-system/data.txt', () =>
// {
//     console.log('data.txt has been changed')
// });

fs.copyFileSync('encrypt.js', 'decrypt.js');