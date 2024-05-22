// Import the path module
const path = require('path');

// Define a file path
const filePath = '/users/test/file.txt';

// Get the base name of the file
const baseName = path.basename(filePath);
console.log('Base name:', baseName);

// Get the directory name
const dirName = path.dirname(filePath);
console.log('Directory name:', dirName);

// Resolve to an absolute path
const absolutePath = path.resolve('test/file.txt');
console.log('Absolute path:', absolutePath);

// Join two path segments
const joinedPath = path.join('/users/test', 'file.txt');
console.log('Joined path:', joinedPath);
