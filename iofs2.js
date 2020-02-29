const fs = require('fs');
let pathname=process.argv[2]
fs.readFile(pathname,function(err,data){
    if(err){
        console.log(err);
    }else{
        let arr = data.toString().split("\n");
        console.log(arr.length-1);
    }
})
