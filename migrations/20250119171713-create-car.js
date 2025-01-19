'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      manufacturer: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      modelYear: {
        type: Sequelize.DECIMAL(4, 0),
        allowNull: false,
        field: 'model_year'
      },
      isNew: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'is_new'
      },
      price: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};