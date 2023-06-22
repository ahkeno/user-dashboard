'use strict'

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer((request, response) => {
  let urlInfo = url.parse(request.url, true); // host, pathname, search
  let method = request.method;

  if (method == 'GET') {
	  console.log(urlInfo.pathname);
	 if (urlInfo.pathname.includes('user') ) {
		sendResponse('./user.json',response)

    } 
	else if(urlInfo.pathname.includes('career') ) {
		sendResponse('./career-goal.json',response)

    } 
  } else {
    sendResponse("", "")
  }
}).listen(3000);       // change your local host here
console.log("Start server at port 3000");

function sendResponse(filename,response) {
	var sampleTxt = path.join(__dirname, filename);
	console.log(filename);
	fs.readFile(sampleTxt, function(error, data) {
	  if (error) return console.error(error);
		response.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS', "Access-Control-Allow-Headers": "If-Modified-Since"});
	    response.write(data);
		response.end();
	  
	});
}