var http = require('http');
var url = require('url');
var fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
var qs = require('querystring')
const app = express();
var loggedin=false;
var port = process.env.PORT||8080;

http.createServer(function (req, res) {
	console.log(req.method);
	app.use(bodyParser.urlencoded({ extended: false }));
	console.log(req.connection.remoteAddress);
	
	
	var q = url.parse(req.url, true);
	var a= q.pathname.split('/');
	console.log(a.length);
	
	
	fn = "./sslcqp1.html";
	console.log("Fom:" + fn);
	 fs.readFile(fn, function(err, data) {
		if (err) {
		  res.writeHead(404, {'Content-Type': 'text/html'});
		  return res.end("404 Not Found");
		} 
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	  });
	
	
	
}).listen(port);