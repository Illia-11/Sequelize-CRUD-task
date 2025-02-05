"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dealerships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dealerships.belongsToMany(models.Car, {
        as: "cars",
        through: "cars_to_dealerships",
        foreignKey: "dealershipsId",
      });
    }
  }
  Dealerships.init(
    {
      name: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING(12),
        allowNull: false,
        field: "phone_number",
      },
    },
    {
      sequelize,
      modelName: "Dealerships",
      tableName: "dealerships",
      underscored: true,
    }
  );
  return Dealerships;
};
