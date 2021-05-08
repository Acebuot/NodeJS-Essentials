const net = require('net');

//create a server
const server = net.createServer();

//array of connected clients
const connectedClients = [];

//server.listen() method creates a listener on the specified port or path.
server.listen(
{
    host: 'localhost',
    port: 8000,
});

//on event connection,
server.on('connection', (client) =>
{
    console.log('client connected');
    
    //send data to client
    client.write('welcome to the server');

    //push new client obj to connected clients arr
    connectedClients.push(client);
});

setInterval(() => 
{
    //new Date instance of time now
    const now = new Date().toISOString();

    //for every client in arr, write time now
    connectedClients.forEach(client =>
    {
        client.write(now);
    })

}, 2000);