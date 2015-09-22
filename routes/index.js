var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Taster.findAll({
    order: [
      ['name','ASC']
    ]
  }).then(function(tasters) {
    models.Test.scope('in_progress').findAll({
      include: [{
        model: models.Location
      }]
    }).then(function(tests) {
      res.render('index', {
        title: 'Triangle Test',
        tests: tests,
        tasters: tasters
      });
    });
  });
});

module.exports = router;
