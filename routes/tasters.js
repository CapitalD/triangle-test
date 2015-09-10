var express = require('express');
var router = express.Router();

/* GET tasters listing. */
router.get('/', function(req, res, next) {
  res.render('tasters', { title: "All tasters" });
});

router.get('/new', function(req, res, next) {
  res.render('new-taster', { title: "New Taster" });
});

module.exports = router;
