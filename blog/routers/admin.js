/**created by 梦回 */
let express = require('express');
let router = express.Router();

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

module.exports = router;
