module.exports = function(sequelize, DataTypes) {
  var BrewingExperience = sequelize.define("BrewingExperience", {
    level: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  return BrewingExperience;
};
