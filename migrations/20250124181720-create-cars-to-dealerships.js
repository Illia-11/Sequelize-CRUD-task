'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars_to_dealerships', { 
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'car_id',
        references: {
          model: 'cars',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      dealershipsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'dealerships_id',
        references: {
          model: 'dealerships',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars_to_dealerships');
  }
};
