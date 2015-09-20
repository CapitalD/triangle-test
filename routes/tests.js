var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  models.Test.findAll({
    order: [
      ['updatedAt','DESC']
    ]
  }).then(function(tests) {
    res.render('tests', {
      title: "All tests",
      tests: tests
    });
  });
});

router.post('/new', function(req, res, next) {

    req.checkBody('name_field', "A test name is required").notEmpty();
    req.checkBody('location', "A location is required").notEmpty().isInt();
    var errors = req.validationErrors();

    var sample_identifiers = [];
    switch(req.body.sample_identifer) {
      case 'ABC':
        sample_identifiers = ["A","B","C"];
        break;
      case '123':
        sample_identifiers = ["1","2","3"];
        break;
      default:
        sample_identifiers = ["","",""];
        break;
    }

    if (errors) {
      res.send(errors);
    } else {
      models.Test.create({
        name: req.body.name_field,
        LocationId: req.body.location,
        SampleColourId: req.body.colour_coding,
        correct_sample: req.body.correct_sample,
        sample_1_identifier: sample_identifiers[0],
        sample_2_identifier: sample_identifiers[1],
        sample_3_identifier: sample_identifiers[2]
      }).then(function() {
        res.redirect('/tests');
      });
    }

});

router.get('/new', function(req, res, next) {
  models.Location.findAll({
    order: [
      ['name', 'ASC']
    ]
  }).then(function(locations) {
    models.SampleColour.findAll().then(function(colours) {
      res.render('new-test', {
        title: "New test",
        locations: locations,
        colours: colours
      });
    });
  });
});

router.get('/:test_id', function(req, res, next) {
  models.Test.findOne({
    where: {
      id: req.params.test_id
    },
    include: [{
      model: models.Location
    }, {
      model: models.SampleColour
    }]
  }).then(function(test) {
    res.render('test', {
      title: test.name,
      test: test
    });
  });
});

module.exports = router;
