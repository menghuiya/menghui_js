/**created by 梦回 */

let mongoose = require('mongoose');
let usersSchema = require('../schmes/users');

module.exports = mongoose.model('User', usersSchema);
