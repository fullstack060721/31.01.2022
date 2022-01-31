// index.js
const express = require('express')
const router = express.Router();
const path = require('path')
const url = require("url")
const cors = require("cors");

const port = 8080

const app = express();

// to allow browsing to static pages
app.use(express.static(path.join(__dirname, '/')))

app.listen(port, () => console.log(`Listening to port ${port}`))