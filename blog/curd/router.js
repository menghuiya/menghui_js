const express = require('express');
//创建路由容器
const router = express.Router();
const student = require('./studnet');
// const URL = require('url');
//把路由挂载到容器中
router
  .get('/', (req, res) => {
    student.findAll((err, data) => {
      res.render('index.html', JSON.parse(data));
    });
  })
  .get('/add', (req, res) => {
    res.render('add.html');
  })
  .post('/add', (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      student.add(body, (err) => {
        if (err === null) {
          return res.redirect('/');
        } else {
          return res.send({ status: 'err' });
        }
      });
    });
  })
  .get('/remove', (req, res) => {
    const myURL = new URL(`http://example.com/${req.url}`);
    student.remove(myURL.searchParams.get('id'), (err) => {
      if (err === null) {
        return res.redirect('/');
      } else {
        return res.send({ status: 'err' });
      }
    });
  });
//导出router
module.exports = router;
