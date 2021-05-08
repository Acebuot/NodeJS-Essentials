const http = require('http');

const server = http.createServer
(
    (request, result) => 
    {

        const name = request.url.slice(1);

        //send status code and content type for the client
        //200 means good
        result.writeHead(200, {'content-type': 'text/html'});
        result.end(`<h1>Hello ${name}</h1>`);
    }
);

server.listen(8000, 'localhost');

//go to http://localhost:8000/
//go to http://localhost:8000/Luis
