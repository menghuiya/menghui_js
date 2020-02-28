var http = require('http');
http.createServer(function(request,response){
    //发送http头部
    //http状态值：200
    //内容类型//text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('hello,world');
    response.end();
}).listen(8888);
console.log(" Server running at  http://127.0.0.1:8888");
