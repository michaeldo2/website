var http = require("http");
var express = require("express");
var app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
  res.render('index.html');
});
app.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
