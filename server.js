var http = require('http');

http.createServer(function(request, response){
	response.end('Hello World!');
}).listen(7000);

console.log('Server is running on port 7000');