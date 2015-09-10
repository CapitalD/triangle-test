var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://duncant:secret@localhost:5432/triangle-test';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE tasters(id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, is_admin BOOLEAN NOT NULL DEFAULT FALSE)');
query.on('end', function() { client.end(); });
