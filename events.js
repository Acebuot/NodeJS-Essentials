//read more at https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm

const events = require('events');

let usersLoggedIn = 0;

//enables us to send even messages
const eventEmitter = new events.eventEmitter();

//bind userLoggedIn event to specified event (can usea function as well)
eventEmitter.on('userLoggedIn', () =>
{
    usersLoggedIn++;
    console.log(`There are ${usersLoggedIn} of users logged in`)
})

eventEmitter.emit('userLoggedIn');