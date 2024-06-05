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
      idSala: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dataReservada: {
        type: Sequelize.DATE,
        allowNull: false
      },
      horaInicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      horaFimReserva: {
        type: Sequelize.DATE,
        allowNull: false
      },
      statusReserva: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dataModificacaoStatus: {
        type: Sequelize.DATE,
        allowNull: true
      },
      motivoReserva: {
        type: Sequelize.STRING,
        allowNull: false
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