var express = require('express');
var router = express.Router();

/* GET jobs listing. */
router.get('/', function(req, res, next) {
  res.render('jobs', { title: 'Express' });
});

module.exports = router;