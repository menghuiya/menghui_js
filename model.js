const fs = require('fs');
const path = require('path');
function mymodule(pathname, extname, callback) {
    fs.readdir(pathname, mhFunc);
    function mhFunc(err, data) {
        let results = new Array();
        let cnt = 0;
        if (err) {
            return callback(err);
        } else {
            for (let i = 0; i < data.length; i++) {
                if ('.' + extname === path.extname(data[i])) {
                    results[cnt++] = data[i];
                }
            }
            callback(null, results)
        }


    }
}
module.exports = mymodule