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

router.post('/new', function(req, res, next) {
  if (req.body.overall_knowledge_field > 0) {
    var overall = req.body.overall_knowledge_field;
  } else {
    var overall = req.body.overall_knowledge_mob_field;
  }

  models.Taster.create({
    name: req.body.name_field,
    email: req.body.email_field,
    BrewingExperienceId: req.body.brewing_exp_field,
    CertificationId: req.body.certification_field,
    overall_knowledge: overall
  }).then(function() {
    res.redirect('/tasters');
  });
});

module.exports = router;
