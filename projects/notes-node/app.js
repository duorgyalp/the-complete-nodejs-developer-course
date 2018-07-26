console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

// Option one
fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err) {
    if (err) {
        console.log('Unable to write to file');
    }
});

// Option two
// fs.appendFileSync('greetings.txt', 'Hello world!');