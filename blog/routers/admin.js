/**created by 梦回 */
let express = require('express');
let router = express.Router();
let User = require('../models/User');
let Category = require('../models/Category');
router.use(function(req, res, next) {
  if (!req.userInfo.isAdmin) {
    //如果当前用户是非管理员
    res.send('对不起,您没有权限进入该页面');
    return;
  }
  next();
});

router.get('/', function(req, res, next) {
  res.render('admin/index', {
    userInfo: req.userInfo
  });
});
/**
 * 用户管理
 * */
router.get('/user', function(req, res) {
  /**
   *从数据库当初读取所有用户的数据
   *数据分页:
   * limit(Number)限制获取的数据条数
   *
   * skip():忽略数据的条数
   *
   * 每页显示2条
   * 1:1-2 skip:0 ->(当前页-1 )* limit
   * 2:3-4 skip:2
   */
  let page = Number(req.query.page || 1); //注意验证 是否为数字
  let limit = 10; //限制条数

  User.count().then(function(count) {
    //计算总页数
    let pages = Math.ceil(count / limit);
    //取值不能超过pages
    page = Math.min(page, pages);
    //取值不能小于1
    page = Math.max(page, 1);
    //限定上一页下一页取值
    let skip = (page - 1) * limit;
    User.find()
      .limit(limit)
      .skip(skip)
      .then(function(users) {
        res.render('admin/user_index', {
          userInfo: req.userInfo,
          users: users,
          count: count,
          page: page,
          pages: pages,
          limit: limit
        });
      });
  });
});

/**
 * 分类管理首页
 *
 */
router.get('/category', function(req, res) {
  res.render('admin/category_index', {
    userInfo: req.userInfo
  });
});

/**
 * 分类添加
 */
router.get('/category/add', function(req, res) {
  res.render('admin/category_add', {
    userInfo: req.userInfo
  });
});

/**
 * 分类的保存
 */
router.post('/category/add', function(req, res) {
  let name = req.body.name || '';
  if (name == '') {
    res.render('admin/error', {
      userInfo: req.userInfo,
      message: '名称不能为空'
    });
    return;
  }
  //判断数据库中是否已经存在同名分类
  Category.findOne({
    name: name
  })
    .then(function(rs) {
      if (rs) {
        //数据库中已经存在该分类了
        res.render('admin/error', {
          userInfo: req.userInfo,
          message: '分类已经存在'
        });
        return Promise.reject();
      } else {
        //表示数据库中是不存在该分类 可以保存
        return Category({
          name: name
        }).save();
      }
    })
    .then(function(newCategory) {
      res.render('admin/success', {
        userInfo: req.userInfo,
        message: '保存分类成功',
        url: '/admin/category'
      });
    });
});

module.exports = router;
