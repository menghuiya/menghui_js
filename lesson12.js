const http = require('http');
const map = require('through2-map');

http.createServer(function(request,response){
    let post = '';
    request.on('data',function(chunk){ 
        post += chunk;
        console.log('梦回测试：'+chunk)
     })
    
    request.on('end',function(){
        post = post.toUpperCase();
        response.write(post);
        response.end();
        
    })
}).listen(process.argv[2])

/*官方答案
 'use strict'
    const http = require('http')
    const map = require('through2-map')

    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

    */