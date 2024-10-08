// server.mjs
/*const { createServer } =require("node:http");

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});*/

// run with `node server.mjs`
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  res.send('bubhey is a boy')
})
app.put('/user', (req, res) => {
  res.send('afromedia')
})

app.delete('/user', (req, res) => {
  res.send('tolu na my oga')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

