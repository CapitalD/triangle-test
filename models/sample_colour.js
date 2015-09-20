module.exports = function(sequelize, DataTypes) {
  var SampleColour = sequelize.define("SampleColour", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    colour1: {
      type: DataTypes.STRING
    },
    colour2: {
      type: DataTypes.STRING
    },
    colour3: {
      type: DataTypes.STRING
    }
  });

  return SampleColour;
};
