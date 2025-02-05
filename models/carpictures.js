"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CarPictures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CarPictures.belongsTo(models.Car, {
        as: "car",
        foreignKey: "carId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  CarPictures.init(
    {
      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      imageName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "image_name",
      }
    },
    {
      sequelize,
      modelName: "CarPictures",
      tableName: "car_pictures",
      underscored: true,
    }
  );
  return CarPictures;
};
