module.exports = function(sequelize, DataTypes) {
  var Certification = sequelize.define("Certification", {
    certification: DataTypes.STRING
  });

  return Certification;
};
