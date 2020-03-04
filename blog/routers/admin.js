/**created by 梦回 */
let express = require('express');
let router = express.Router();

router.get('/user', function(req, res, next) {
  res.send('userpage');
});

module.exports = router;
