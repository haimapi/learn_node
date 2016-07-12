var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello\n');
});

server.listen(8000);

console.log("server is running at 127.0.0.1:8000");
