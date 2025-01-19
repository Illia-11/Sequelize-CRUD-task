'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    model: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    manufacturer: {
      type: DataTypes.STRING(256),
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
      }
    },
    modelYear: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      field: 'model_year',
      validate: {
        isNumeric: true,
        min: 1800
      }
    },
    isNew: {
      type: DataTypes.BOOLEAN,
      field: 'is_new'
    },
    price: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Car',
    tableName: 'car',
    underscored: true
  });
  return Car;
};