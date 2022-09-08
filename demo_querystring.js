var http=require('http');
var url = require('url');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-type':'text/html'});
	var q = url.parse(request.url, true).query;
	var txt = q.year + ' ' + q.month;
	response.end(txt);
}).listen(8060);