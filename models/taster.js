module.exports = function(sequelize, DataTypes) {
  var Taster = sequelize.define("Taster", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    brewing_exp: DataTypes.INTEGER,
    certification: DataTypes.INTEGER,
    overall_knowledge: DataTypes.INTEGER
  });

  return Taster;
};
