const http = require('http');
const url = {
    u1:process.argv[2],
    u2:process.argv[3],
    u3:process.argv[4]
};
http.get(url.u1,cal_1);
http.get(url.u2,cal_2);
http.get(url.u3,cal_3);
let result = ["","",""];

function cal_1(response){
    response.setEncoding="utf-8";
    response.on("data",function(data){
        result[0]+=data;
    });
    response.on("end",function(){
        
    })
}

function cal_2(response){
    response.setEncoding="utf-8";
    response.on("data",function(data){
        result[1]+=data;
    });
    response.on("end",function(){
        
    })
}
function cal_3(response){
    response.setEncoding="utf-8";
    response.on("data",function(data){
        result[2]+=data;
    });
    response.on("end",function(){
        console.log(result[0].toString())
        console.log(result[1].toString())
        console.log(result[2].toString())
    })
}

/* 官方教程

    
    'use strict'
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }

    */