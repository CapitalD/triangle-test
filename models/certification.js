module.exports = function(sequelize, DataTypes) {
  var Certification = sequelize.define("Certification", {
    certification: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  return Certification;
};
