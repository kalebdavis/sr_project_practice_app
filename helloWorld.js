var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'content-Type': 'text/html' });
  res.end('<h1>Hello world!</h1>');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
