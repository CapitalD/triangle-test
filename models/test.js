module.exports = function(sequelize, DataTypes) {
  var Test = sequelize.define("Test", {
    name: DataTypes.STRING
  });

  return Test;
};
