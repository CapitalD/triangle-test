var sequelize_fixtures = require('sequelize-fixtures');
models = require('./models');

sequelize_fixtures.loadFiles(['fixtures/Tests.js','fixtures/Locations.js','fixtures/*.js'], models).then(function() {
  console.log('Fixtures loaded');
});
