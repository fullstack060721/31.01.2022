// index.js
const express = require('express')
const router = express.Router();
const path = require('path')
const url = require("url")
const cors = require("cors");

const port = 8080

const app = express();
app.use(express.static(path.join(__dirname, '/')))
// localhost:8080/page1.html

app.get('/page', (req, resp) => 
{
    resp.writeHead(200);
    resp.end('this page will be sent on default url')
})
app.get('/fruit', (req, resp) => 
{
    resp.writeHead(201);
    resp.end('{ id: 1, "name": "banana"}')
})

app.get('/p1', (req, resp) => 
{
    resp.sendFile(path.join(__dirname + '/page1.html'));
});

// map /random ==> return a random number 

app.listen(port, () => console.log(`Listening to port ${port}`))