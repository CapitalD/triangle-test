module.exports = function(sequelize, DataTypes) {
  var Test = sequelize.define("Test", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Test.hasMany(models.Evaluation)
      }
    }
  });

  return Test;
};
