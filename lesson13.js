const http = require('http'), //web服务模块
    url = require('url'),
    querystring = require('querystring'); //querystring模块
http.createServer(function(request,response){
    if(request.url!=='/favicon.ico'){
        response.writeHead(200,{'Content-Type':'application/json'});
        // console.log(url.parse('http://www.52mhzy.cn/index?a=梦回'));
        let urls = url.parse(request.url);
        let pathname = urls.pathname;
        let ios = urls.query.split('=')[1];
        let date = new Date(ios);
        console.log(ios);
        if(pathname == "/api/parsetime"){
            result = {
                'hour':date.getHours(),
                'minute':date.getMinutes(),
                'second':date.getSeconds()
            };
            response.write(JSON.stringify(result))
        }
        if(pathname =="/api/unixtime"){
            result = {
                "unixtime":date.getTime()
            };
            response.write(JSON.stringify(result))
        }
        response.end();
    }
    
}).listen(process.argv[2]);

/* 官方教程

 'use strict'
    const http = require('http')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

    */