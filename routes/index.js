var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Test.scope('in_progress').findAll({
    include: [{
      model: models.Location
    }]
  }).then(function(tests) {
    res.render('index', {
      title: 'Triangle Test',
      tests: tests
    });
  });
});

module.exports = router;
