// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Write a response header with status code 200 and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Write a response body
    res.write('Hello, World!');
    
    // End the response
    res.end();
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
