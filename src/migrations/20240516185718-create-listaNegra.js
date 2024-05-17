'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listaNegras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idResponsavel: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idReservaMotivo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      motivo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataBloqueio: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('listaNegras');
  }
};