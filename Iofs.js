const fs = require('fs');
let data = fs.readFileSync('fs.txt');
let str = data.toString()
let arr = str.split("\n")
console.log(arr.length-1);

/* 官方教程
const fs = require('fs')
const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)
*/