/*
 * @Author: menghui
 * @Date: 2020-03-16 13:54:01
 * @Last Modified by:   menghui
 * @Last Modified time: 2020-03-16 13:54:01
 */
/**created by 梦回 */

let mongoose = require('mongoose');
let usersSchema = require('../schmes/users');

module.exports = mongoose.model('User', usersSchema);
