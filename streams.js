const fs = require('fs');

const http = require('http');

//streams are a collection of data except not all of the data is loaded
//either becuase it hasn't come yet or it's too large that you don't wnat to deal with all of it at the same time

// //if you do this and the situation is one of the above. There might be some problems.
// const server = http.createServer( (request, result) => 
// {
//     fs.readFile('./hello.html', (err,data) =>
//     {
//         //if there is an error, throw err.
//         if(err) throw err;

//         //else end the response process returning data
//         result.end(data);
//     });
// });

//So what we're gonna do instead is read the hello.html as a stream and read a small section at a time
//then pass it to the result obj which is actually a stream
const server = http.createServer( (request, result) => 
{
    //create a readStream file
    const file = fs.createReadStream('./myblog.txt');

    // we use file's pipe() method to pass in its values to result
    file.pipe(result);
});

server.listen(8000, 'localhost');