var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World\n');
}).listen(5050);
console.log('Server runnong at http://localhost:5000/');