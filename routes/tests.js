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
  res.render('new-test', {
    title: "New Test"
  });
});

router.post('/new', function(req, res, next) {
  models.Test.create({
    name: req.body.name_field
  }).then(function() {
    res.redirect('/tests');
  });
});




router.get('/:test_id', function(req, res, next) {
  models.Test.findOne({
    where: {
      id: req.params.test_id
    },
    include: [{
      model: models.Evaluation,
      include: [{
        model: models.Location
      }]
    }],
    order: [
      [models.Evaluation, 'scheduled_start', "DESC"]
    ]
  }).then(function(test) {
    res.render('view-test', {
      title: test.name,
      test: test
    });
  });
});




module.exports = router;
