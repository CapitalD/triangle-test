module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    name: DataTypes.STRING
  });

  return Location;
};
