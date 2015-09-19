module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  return Location;
};
