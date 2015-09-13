var sequelize_fixtures = require('sequelize-fixtures');
models = require('./models');

sequelize_fixtures.loadFile('fixtures/*.js', models).then(function() {
  console.log('Fixtures loaded');
});
