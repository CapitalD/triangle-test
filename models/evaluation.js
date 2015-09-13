module.exports = function(sequelize, DataTypes) {
  var Evaluation = sequelize.define("Evaluation", {
    scheduled_start: DataTypes.DATE,
    correct_sample: DataTypes.INTEGER,
    sample_1_identifier: DataTypes.STRING,
    sample_2_identifier: DataTypes.STRING,
    sample_3_identifier: DataTypes.STRING,
    in_progress: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Evaluation.belongsTo(models.Test),
        Evaluation.belongsTo(models.Location)
      }
    }
  });

  return Evaluation;
};
