var http = require('http');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello-world');
});

http.createServer(app).listen(process.env.PORT || 3000);
