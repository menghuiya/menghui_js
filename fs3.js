const fs = require('fs');
const path = require('path');
const pathname = process.argv[2];  //获取文件路径
const extname = process.argv[3];    //获取文件后缀名
fs.readdir(pathname,function(err,files){
    for(let i=0;i<files.length;i++){
        //将指定的后缀和获取到的文件名后缀做比较
        if('.'+extname==path.extname(files[i])){
            console.log(files[i]);
        }
    }
})

console.log('路径'+pathname)
console.log('文件'+extname)


/*  官方教程
 'use strict'
    const fs = require('fs')
    const path = require('path')

    const folder = process.argv[2]
    const ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })

    path.extname('index.html');
    // Returns: '.html'  获取文件后缀 会加上.
*/