/*
 * @Author: menghui
 * @Date: 2020-03-18 21:48:34
 * @Last Modified by: menghui
 * @Last Modified time: 2020-03-18 21:49:06
 */
let mongoose = require('mongoose');

//分类的表结构
module.exports = new mongoose.Schema({
  //分类名
  name: String
});
