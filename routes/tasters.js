var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET tasters listing. */
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

router.post('/new', function(req, res, next) {

  req.checkBody('name_field', "Your name is required").notEmpty();
  req.checkBody('email_field', "Your email address isn't valid").optional().isEmail();

  var errors = req.validationErrors();

  if (errors) {
    // redirect to GET /new with errors{} and res.body{}
    // so that form is populated with values and errors can be displayed
    res.send(errors);
  } else {
    models.Taster.create({
      name: req.body.name_field,
      email: req.body.email_field,
      BrewingExperienceId: req.body.brewing_exp_field,
      CertificationId: req.body.certification_field,
      overall_knowledge: req.body.overall_knowledge_field
    }).then(function() {
      res.redirect('/tasters');
    });
  }
});

router.get('/new', function(req, res, next) {
  models.BrewingExperience.findAll().then(function(experiences) {
    models.Certification.findAll().then(function(certifications) {
      res.render('new-taster', {
        title: "New Taster",
        experiences: experiences,
        certifications: certifications
      });
    });
  });
});

module.exports = router;
