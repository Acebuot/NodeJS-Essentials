const net = require('net');

//client creates connection to server
const client = net.createConnection({port:8000,});

//even handler when client recieves data
client.on('data', (data) =>
{
    console.log(`Message received from server "${data}"`);
});