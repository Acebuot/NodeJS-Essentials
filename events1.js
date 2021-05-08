const fs = require('fs');

const watcher = fs.watch('events1.js');

watcher.on('change', () => 
{
    console.log('file has changed');
})


// once(event, listener)
// Adds a one time listener to the event.

