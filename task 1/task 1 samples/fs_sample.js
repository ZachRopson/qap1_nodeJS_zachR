// Import the filesystem module
const fs = require('fs');

// Write to a file
fs.writeFile('sample.txt', 'Hello, filesystem!', (err) => {
    if (err) throw err;
    console.log('File has been written.');

    // Read from the file
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);

        // Delete the file
        fs.unlink('sample.txt', (err) => {
            if (err) throw err;
            console.log('File has been deleted.');
        });
    });
});
console.log('Script execution has finished.')