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
      id_reservista: {
        allowNull: false,
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
      dataReserva: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dataReservada: {
        allowNull: false,
        type: Sequelize.DATE
      },
      horaInicio: {
        allowNull: false,
        type: Sequelize.TIME
      },
      horaFimReserva: {
        allowNull: false,
        type: Sequelize.TIME
      },
      statusReserva: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataModificacaoStatus: {
        allowNull: false,
        type: Sequelize.DATE
      },
      motivoReserva: {
        allowNull: false,
        type: Sequelize.STRING
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