var express = require('express');
var router = express.Router();

/* GET tests listing. */
router.get('/', function(req, res, next) {
  res.render('tests', { title: "All tests" });
});


router.get('/new', function(req, res, next) {
  res.send('new test form');
  //res.render('new-test', { title: "New Test" });
});


module.exports = router;
