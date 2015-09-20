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
  models.Location.findAll({
    order: [
      ['name', 'ASC']
    ]
  }).then(function(locations) {
    res.render('new-test', {
      title: "New test",
      locations: locations
    });
  })
});

module.exports = router;
