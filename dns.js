const dns = require('dns');

//first argument string is the domain we want to look up
//second is a function we want to call once lookup is complete
//in this case, this function contains an error obj if it returns one
//it also has a value obj that will hold the ip of the domain
dns.lookup('clubpenguin.com', (err,value) =>
{
    if (err)
    {
        console.log(err);
        return;
    }
        console.log(value);
});

//lookup() uses computer's internal dns system to see if it has an ip address
//that it can return without doing a network request

//resolve makes a network request to the dns system
//returns array of ip addresses
dns.resolve('clubpenguin.com', (err,value) =>
{
    if (err)
    {
        console.log(err);
        return;
    }
        console.log(value);
});