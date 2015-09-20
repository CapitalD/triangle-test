module.exports = function(sequelize, DataTypes) {
  var Test = sequelize.define("Test", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    correct_sample: {
      type: DataTypes.INTEGER
    },
    sample_1_identifier: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sample_2_identifier: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sample_3_identifier: {
      type: DataTypes.STRING,
      allowNull: false
    },
    in_progress: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Test.belongsTo(models.Location)
      }
    }
  });

  return Test;
};
