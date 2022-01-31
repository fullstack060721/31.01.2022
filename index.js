// index.js
console.log('hello world')

const http = require('http')

const requestListenet = (req, res) => {
    // console.log(req)
    res.writeHead(415);
    res.end('Hello, World!');
}

const server = http.createServer(requestListenet)
server.listen(8080);