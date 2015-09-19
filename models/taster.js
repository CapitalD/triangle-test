module.exports = function(sequelize, DataTypes) {
  var Taster = sequelize.define("Taster", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    overall_knowledge: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    }
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
