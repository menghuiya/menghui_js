const http = require('http'),
    fs = require('fs'),
    listport = Number(process.argv[2]),
    extpath = process.argv[3];
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    fs.createReadStream(extpath).pipe(response);
}).listen(listport)
    
/* 官方答案

  'use strict'
    const http = require('http')
    const fs = require('fs')

    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))

    */