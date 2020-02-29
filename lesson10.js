const http = require('http');
const listport = process.argv[2];
const net = require('net');
const server = net.createServer(function (socket) {
    // socket 处理逻辑
    let data=new Date();
    socket.write(forMate(data))
    socket.end()
  })
  server.listen(listport)

function forMate(dates){
    let year=dates.getFullYear(),
        mon = dates.getMonth()+1,
        day = dates.getDate(),
        h = dates.getHours(),
        m = dates.getMinutes(),
        s = dates.getSeconds();
    mon = mon<10?'0'+mon:mon;
    day = day<10?'0'+day:day;
    h = h<10?'0'+h:h;
    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;
    return year+'-'+mon+'-'+day+' '+h+':'+m+'\n';
    
}

/*官方答案
  'use strict'
    const net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))
*/