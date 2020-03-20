/*
 * @Author: menghui
 * @Date: 2020-03-19 22:25:04
 * @Last Modified by: menghui
 * @Last Modified time: 2020-03-19 22:25:28
 */

let mongoose = require('mongoose');
let contentsSchema = require('../schmes/contents');

module.exports = mongoose.model('Content', contentsSchema);
