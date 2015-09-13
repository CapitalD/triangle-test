module.exports = function(sequelize, DataTypes) {
  var BrewingExperience = sequelize.define("BrewingExperience", {
    level: DataTypes.STRING
  });

  return BrewingExperience;
};
