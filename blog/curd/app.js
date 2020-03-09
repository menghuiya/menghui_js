const express = require('express');
const router = require('./router');
let app = express();
app.engine('html', require('express-art-template'));
//开放目录
app.use('/node_modules', express.static('./node_modules'));
app.use('/public', express.static('./public'));
app.listen(5050);
//把路由容器挂载到app
app.use(router);
