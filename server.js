/* Load the HTTP Library */
var http = require("http");

/* Create an HTTP server to handle responses */
http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "test/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);
