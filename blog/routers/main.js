/**created by 梦回 */

let express = require('express');
let router = express.Router();
let Category = require('../models/Category');
let Content = require('../models/Content');

/**
 * 首页
 */
router.get('/', function(req, res, next) {
  let data = {
    userInfo: req.userInfo,
    category: req.query.category || '',
    categories: [],
    page: Number(req.query.page || 1), //注意验证 是否为数字
    limit: 3, //限制条数
    pages: 0,
    count: 0
  };
  let where = {};
  if (data.category) {
    where.category = data.category;
  }
  //读取所有的分类信息
  Category.find()
    .sort({ _id: 1 })
    .then(function(categories) {
      data.categories = categories;
      return Content.where(where).count();
    })
    .then(function(count) {
      data.count = count;
      data.pages = Math.ceil(data.count / data.limit);
      //取值不能超过pages
      data.page = Math.min(data.page, data.pages);
      //取值不能小于1
      data.page = Math.max(data.page, 1);
      //限定上一页下一页取值
      let skip = (data.page - 1) * data.limit;

      return Content.where(where)
        .find()
        .sort({ _id: -1 })
        .limit(data.limit)
        .skip(skip)
        .populate(['category', 'user'])
        .sort({
          addTime: -1
        });
    })
    .then(function(contents) {
      data.contents = contents;
      res.render('main/index', data);
    });
});

module.exports = router;
