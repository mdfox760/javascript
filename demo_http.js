var http = require('http');

//create a server object:
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'}); // An HTTP header with the correct content type.
	res.write('The server has started. Use - node file_name - to start a server. If you change the text here, you will have to restart the server to see the text that you have written. It seems a refresh does not get the text to show in the browser. Apostrophes like this seem to mess stuff up for a noob like me. Also, be careful with tabs, js does not like them.'); //write a response to the client
	res.end(); //end the response
}).listen(8080); //the server object listens on port 8080