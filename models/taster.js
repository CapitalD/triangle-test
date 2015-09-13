module.exports = function(sequelize, DataTypes) {
  var Taster = sequelize.define("Taster", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    certification: DataTypes.INTEGER,
    overall_knowledge: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Taster.belongsTo(models.BrewingExperience)
      }
    }
  });

  return Taster;
};
