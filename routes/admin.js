var express = require('express');
var models = require('../models');
var router = express.Router();



/* GET admin home. */
router.get('/', function(req, res, next) {
  models.Test.count({
    where: ["in_progress = true"]
  }).then(function(active_test_count) {
    res.render('admin-home', {
      title: "Triangle Test Administration",
      active_tests: active_test_count
    });
  });
});

module.exports = router;
