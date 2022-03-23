'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      countryKor: {
        type: Sequelize.STRING
      },
      countryEn: {
        type: Sequelize.STRING
      },
      cityKor: {
        type: Sequelize.STRING
      },
      cityEn: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      basicInfo: {
        type: Sequelize.JSON
      },
      flightInfo: {
        type: Sequelize.JSON
      },
      accomInfo: {
        type: Sequelize.JSON
      },
      touristSpot: {
        type: Sequelize.JSON
      },
      restaurantInfo: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cities');
  }
};