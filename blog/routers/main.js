/**created by 梦回 */

let express = require('express');
let router = express.Router();
let Category = require('../models/Category');
let Content = require('../models/Content');
let data;
/**
 * 处理通用的数据
 */
router.use(function(req, res, next) {
  data = {
    userInfo: req.userInfo,
    categories: []
  };
  Category.find().then(function(categories) {
    data.categories = categories;
    next();
  });
});

/**
 * 首页
 */
router.get('/', function(req, res, next) {
  data.category = req.query.category || '';
  data.page = 0;
  (data.pages = Number(req.query.page || 1)), //注意验证 是否为数字
    (data.limit = 3), //限制条数
    (data.count = 0);
  let where = {};
  if (data.category) {
    where.category = data.category;
  }
  //读取所有的分类信息
  Content.where(where)
    .count()
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

// 文章内容页面
router.get('/view', function(req, res, next) {
  let contentId = req.query.contentid || '';
  Content.findOne({
    _id: contentId
  }).then(function(content) {
    data.content = content;

    content.views++;
    content.save();
    res.render('main/view', data);
  });
});

/**评论内容 */

module.exports = router;
