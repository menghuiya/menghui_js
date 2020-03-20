/**created by 梦回 */

let express = require('express');
let router = express.Router();
let Category = require('../models/Category');

router.get('/', function(req, res, next) {
  //读取所有的分类信息
  Category.find()
    .sort({ _id: 1 })
    .then(function(categories) {
      res.render('main/index', {
        userInfo: req.userInfo,
        categories: categories
      });
    });
});

module.exports = router;
