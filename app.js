var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var favicon = require('serve-favicon');

var app = express();

// configure

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware

app.use(favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(function(req, res, next) {
	console.log(req.method + (new Date()));
	next();
});

// define routes

app.use(require('./todos'));

// start server
app.listen(1337, function() {
	console.log("Ready! 1337");
});

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');