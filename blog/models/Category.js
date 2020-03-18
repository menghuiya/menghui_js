/*
 * @Author: menghui
 * @Date: 2020-03-18 21:49:44
 * @Last Modified by: menghui
 * @Last Modified time: 2020-03-18 21:53:51
 */

let mongoose = require('mongoose');
let categoriesSchema = require('../schmes/categories');

module.exports = mongoose.model('Category', categoriesSchema);
