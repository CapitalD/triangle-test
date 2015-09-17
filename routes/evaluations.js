var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/new', function(req, res, next) {
  models.Location.findAll({
    order: [
      ['name', 'ASC']
    ]
  }).then(function(locations) {
    res.render('new-evaluation', {
      title: "New Evaluation",
      locations: locations
    });
  })
});

router.get('/', function(req, res, next) {
  models.Taster.findAll({
    order: [
      ['name','ASC']
    ]
  }).then(function(tasters) {
    res.render('tasters', {
      title: "All tasters",
      tasters: tasters
    });
  });
});

//router.post('/new', function(req, res, next) {
  //models.Test.create({
  //  name: req.body.name_field
  //}).then(function() {
  //  res.redirect('/tests');
  //});
//});

module.exports = router;
