var express = require('express');
var router = express.Router();

/* GET admin home. */
router.get('/', function(req, res, next) {
  res.render('admin-home', { title: "Triangle Test Administration" });
  res.send('admin home');
});

module.exports = router;
