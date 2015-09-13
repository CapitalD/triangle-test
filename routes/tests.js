var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET tests listing. */
router.get('/', function(req, res, next) {
  models.Test.findAll().then(function(tests) {
    res.render('tests', {
      title: "All tests",
      tests: tests
      });
  });
});


router.get('/new', function(req, res, next) {
  res.send('new test form');
  //res.render('new-test', { title: "New Test" });
});


module.exports = router;
