var mymodule = require('./model');
const pathname = process.argv[2];
const extname = process.argv[3];
mymodule(pathname,extname,callback);
function callback(err,data){
	if(err){
		console.error(err);
		return ;
	}
	data.forEach(function(file){
		console.log(file);
	});
}

/*  官方答案
    solution.js:
        'use strict'
        const filterFn = require('./solution_filter.js')
        const dir = process.argv[2]
        const filterStr = process.argv[3]

        filterFn(dir, filterStr, function (err, list) {
        if (err) {
            return console.error('There was an error:', err)
        }

        list.forEach(function (file) {
            console.log(file)
        })
        })

    module.js:
        'use strict'
        const fs = require('fs')
        const path = require('path')

        module.exports = function (dir, filterStr, callback) {
        fs.readdir(dir, function (err, list) {
            if (err) {
            return callback(err)
            }

            list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
            })

            callback(null, list)
        })
        }
*/