module.exports = function(sequelize, DataTypes) {
  var Taster = sequelize.define("Taster", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    overall_knowledge: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Taster.belongsTo(models.BrewingExperience),
        Taster.belongsTo(models.Certification)
      }
    }
  });

  return Taster;
};
