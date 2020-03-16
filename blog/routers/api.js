/**created by 梦回 */

let express = require('express');
let router = express.Router();
let User = require('../models/User');

// router.get('/user', function(req, res, next) {
//   res.send('apipage');
// });

/**统一返回格式: */
let responseData;
router.use(function(req, res, next) {
  responseData = {
    code: 0,
    message: ''
  };
  next();
});
/**用户注册
 *  注册逻辑
 *  1.用户名不能为空
 *  2.密码不能为空
 *  3.俩次密码需要一致
 *
 * 1.用户是否已经被注册
 *  数据库查询
 *
 */
router.post('/user/register', function(req, res, next) {
  let username = req.body.username,
    password = req.body.password,
    repassword = req.body.repassword;

  //用户名是否为空
  if (username == '') {
    responseData.code = 1;
    responseData.message = '用户名不能为空';
    res.json(responseData);
    return;
  }
  //密码不能为空
  if (password == '') {
    responseData.code = 2;
    responseData.message = '密码不能为空';
    res.json(responseData);
    return;
  }
  //两次输入都密码不一致
  if (password != repassword) {
    responseData.code = 3;
    responseData.message = '两次密码输入不一致';
    res.json(responseData);
    return;
  }
  //用户名是否已经被注册来,如果数据库中已经存在和我们要注册都用户名同名都数据
  //表示该用户名已经被注册
  User.findOne({
    username: username
  })
    .then(function(userInof) {
      console.log(userInof);
      if (userInof) {
        //表示数据库中有该记录
        responseData.code = 4;
        responseData.message = '该用户名已被注册';
        res.json(responseData);
        return;
      }
      //保存用户名信息到数据库中
      let user = new User({
        username: username,
        password: password
      });
      return user.save();
    })
    .then(function(newUserInfo) {
      console.log(newUserInfo);
      responseData.message = '注册成功';
      res.json(responseData);
    });
});
/**登录 */
router.post('/user/login', function(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  if (username == '' || password == '') {
    responseData.code = 1;
    responseData.message = '用户名和密码不能为空';
    res.json(responseData);
    return;
  }

  //查询数据库中相同用户名和密码的记录是否存在 如果存在则登陆成功
  User.findOne({
    username: username,
    password: password
  }).then(function(userInof) {
    if (!userInof) {
      responseData.code = 2;
      responseData.message = '用户名或密码错误';
      res.json(responseData);
      return;
    }
    //说明用户名和密码正确
    responseData.message = '登录成功';
    responseData.userInof = {
      _id: userInof._id,
      username: userInof.username
    };
    req.cookies.set(
      'userInfo',
      JSON.stringify({
        _id: userInof._id,
        username: userInof.username
      })
    );
    res.json(responseData);
    return;
  });
});
/**退出 */
router.get('/user/logout', function(req, res) {
  req.cookies.set('userInfo', null);
  res.json(responseData);
});
module.exports = router;
