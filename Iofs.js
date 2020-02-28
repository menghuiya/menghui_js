const fs = require('fs');
const buf = require('buffer')
let data = fs.readFileSync('hello-world.js');
let str = buf.toString(data)
console.log(str)