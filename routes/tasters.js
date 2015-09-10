var express = require('express');
var router = express.Router();

var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://duncant:secret@localhost:5432/triangle-test';

/* GET tasters listing. */
router.get('/', function(req, res, next) {
  res.render('tasters', { title: "All tasters" });
});

router.get('/new', function(req, res, next) {
  res.render('new-taster', { title: "New Taster" });
});

router.post('/new', function(req, res) {

  var results = [];
  var data = {name: req.body.name_field, email: req.body.email_field};

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {

        // SQL Query > Insert Data
        client.query("INSERT INTO tasters(name, email) values($1, $2)", [data.name, data.email]);

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM tasters ORDER BY id ASC");

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if(err) {
          console.log(err);
        }

    });

});

module.exports = router;
