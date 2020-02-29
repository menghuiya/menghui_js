const http = require('http');
const url = process.argv[2];
http.get(url,function(response){
    response.setEncoding('utf-8');
    let result = "";
    response.on("data",function(data){
        result+=data;
    });
    response.on('error',function(err){
        console.log(err);
    })
    response.on("end",function(){
        console.log(result.length);
        console.log(result);
    })
})

/* 官方教程

    
    'use strict'
    const http = require('http')
    const bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

    */