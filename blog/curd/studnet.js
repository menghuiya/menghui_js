/*
 *操作文件中的数据,只处理数据
 */
const fs = require('fs');
//获取所有学生
function findAll(callback) {
  fs.readFile('./db.json', (err, data) => {
    callback(err, data);
  });
}
//添加学生
function add(body, callback) {
  fs.readFile('./db.json', (err, data) => {
    data = JSON.parse(data);
    body = JSON.parse(body);
    if (data.data.length === 0) {
      data = { data: [{ id: 1000, name: 'zhangfei', age: 18 }] };
    }
    body['id'] = data.data[data.data.length - 1].id + 1;
    data.data.push(body);
    fs.writeFile('./db.json', JSON.stringify(data), 'utf8', (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
}
//编辑学生
function edit(body, callback) {
  fs.readFile('./db.json', (err, data) => {
    let sNum;
    data = JSON.parse(data);
    data.data.forEach((e, index) => {
      if (e.id === body.id) {
        sNum = index;
      }
    });
    data.data.splice(sNum, 1, body);
    fs.writeFile('./db.json', JSON.stringify(data), 'utf8', (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
}
//删除学生
function remove(id, callback) {
  fs.readFile('./db.json', (err, data) => {
    let sNum = 0;
    data = JSON.parse(data);
    data.data.forEach((e, index) => {
      if (e.id === Number(id)) {
        sNum = index;
      }
    });
    data.data.splice(sNum, 1);
    fs.writeFile('./db.json', JSON.stringify(data), 'utf8', (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
}
module.exports = { findAll, add, edit, remove };
