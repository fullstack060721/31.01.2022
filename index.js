const express = require('express')
const router = express.Router();
const path = require('path')
const url = require("url")
const cors = require("cors");

const port = 8080

const app = express();
app.use(express.static(path.join(__dirname, '/')))
// localhost:8080/page1.html

app.get('/', (req, resp) => 
{
    resp.writeHead(200);
    resp.end('this page will be sent on default url')
})
app.get('/fruit', (req, resp) => 
{
    resp.writeHead(201);
    resp.end('banana is my favorite fruit')
})

app.get('/p1', (req, resp) => 
{
    resp.sendFile(path.join(__dirname + '/page1.html'));
});

app.get('/random', (req, resp) => 
{
    resp.writeHead(200);
    resp.end(`random number = ${Math.random() * 100}`)
})

app.get('/add', (req, resp) => {
    console.log(req.url)
    console.log(req.query)
    if (isNaN(Number(req.query.a))) {
        resp.writeHead(400);
        resp.end(`${req.query.a} is not a number!`);
        return;
    }
    if (isNaN(Number(req.query.b))) {
        resp.writeHead(400);
        resp.end(`${req.query.b} is not a number!`);
        return;
    }    
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    const sum = a + b
    resp.writeHead(200);
    resp.end(`${a} + ${b} = ${sum}`)
})

app.get('/customer/:cust_id', (req, resp) => 
{
    resp.writeHead(200);
    resp.end(`you sent ${req.params.cust_id}`)
})

app.listen(port, () => console.log(`Listening to port ${port}`))
// printsign ? a=5 & b = 8 
// 5 < 8
// printsign ? a=15 & b = 8 
// 15 > 8
// printsign ? a=15 & b = 15
// 15 == 15