var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp){
  fs.readFile("./demo.html",function(error, data){
    if (error) {
      resp.writeHead(404);
      resp.write('Contents you are looking for-not found');
      resp.end();
    }  else {
      resp.writeHead(200, {
        'Content-Type': 'text/html'
      });
      resp.write(data.toString());
      resp.end();
    }
  });
}).listen(process.env.PORT || 8100, function () {
    console.log(`SERVER STARTED PORT: ${process.env.PORT || 8100}`);
}); 
