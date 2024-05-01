'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_sala: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_adm: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_reservista: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dataReservada: {
        allowNull: false,
        type: Sequelize.DATE
      },
      horaReservada: {
        allowNull: false,
        type: Sequelize.TIME
      },
      horaFim: {
        allowNull: false,
        type: Sequelize.TIME
      },
      situacao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataConclusao: {
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
    await queryInterface.dropTable('reservas');
  }
};