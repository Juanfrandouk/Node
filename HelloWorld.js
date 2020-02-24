var http = require('http');
http.createServer(function (request,response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World from Node.js!\n');
	console.log('Handled request');
	}).listen(42111, 'localhost');
	console.log('Server running at http:localhost:42111/');
	
	
	