var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Meghana"s" site' });
});

router.get('/json', function(req, res, next) {
  res.json({ title: 'Welcome to Meghana"s" site' });
});

module.exports = router;
