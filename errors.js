const dns = require('dns');

// //returns undefined because TryCatch CANNOT  recognize errors in async code
// dns.lookup('clubpenguin..com', (err,value) =>
// {
//     try
//     {
//         console.log(value);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
    
// });


const fs = require('fs');

//readfile() takes a callback whereas readfilesync() does not
fs.readFile('/non-existent/file/here', (err,data) =>
{
    //these callbacks must be error first in node
    //always check for errors first before dealing with any data with the called function
    if(err)
    {
        console.log(err);
        console.log('function exiting...')
        return
    }
    console.log(data);
});