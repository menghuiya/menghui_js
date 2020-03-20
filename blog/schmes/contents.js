/*
 * @Author: menghui
 * @Date: 2020-03-19 22:20:14
 * @Last Modified by: menghui
 * @Last Modified time: 2020-03-19 22:24:10
 */

let mongoose = require('mongoose');

//内容的表结构
module.exports = new mongoose.Schema({
  //关联字段 -内容分类的id
  category: {
    // 类型
    type: mongoose.Schema.Types.ObjectId,
    //引用
    ref: 'Content'
  },
  //分类标题
  title: String,

  //简介
  description: {
    type: String,
    default: ''
  },

  //内容
  content: {
    type: String,
    default: ''
  }
});
