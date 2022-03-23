'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    countryKor: DataTypes.STRING,
    countryEn: DataTypes.STRING,
    cityKor: DataTypes.STRING,
    cityEn: DataTypes.STRING,
    category: DataTypes.STRING,
    basicInfo: DataTypes.JSON,
    flightInfo: DataTypes.JSON,
    accomInfo: DataTypes.JSON,
    touristSpot: DataTypes.JSON,
    restaurantInfo: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};