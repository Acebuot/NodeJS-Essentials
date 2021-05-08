const fs = require('fs');
const readline = require('readline');
const { Z_UNKNOWN } = require('zlib');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

const file = 'myblog.txt';
const author = process.argv[2] || 'unknown';
const title = process.argv[3] || 'newblog post';

rl.question('enter your blog post:', (postcontent) =>
{
    const blogEntry = 
    `
    ${`-`.repeat(title.length)}
    ${title}
    ${`-`.repeat(title.length)}
    By ${author} on ${new Date()}

    ${postcontent}
    `;

    fs.appendFile(file, blogEntry, (err) => 
    {
        if (err)
        {
            console.log(err);
            throw err;
        }
        console.log('The blog was posted successfully!');
    });

    rl.close();

});