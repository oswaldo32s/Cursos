const {createServer} = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  if(req.url === '/') {
    fs.readFile('./index.html',  'utf-8', (err, data) => {
        if(err) {
          throw err
          console.log(err)
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      })
  } else if(req.url === '/about') {
    fs.readFile('./about.html',  'utf-8', (err, data) => {
      if(err) {
        throw err
        console.log(err)
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    })
  } else if(req.url === '/contact-me') {
    fs.readFile('./contact-me.html',  'utf-8', (err, data) => {
      if(err) {
        throw err
        console.log(err)
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    })
  } else {
    fs.readFile('./404.html',  'utf-8', (err, data) => {
      if(err) {
        throw err
        console.log(err)
      }
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    })
  }

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})