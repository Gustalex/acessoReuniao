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
        type: Sequelize.INTEGER
      },
      id_sala: {
        type: Sequelize.INTEGER
      },
      id_adm: {
        type: Sequelize.INTEGER
      },
      dataReservada: {
        type: Sequelize.DATE
      },
      dataReservada: {
        type: Sequelize.DATE
      },
      horaINicio: {
        type: Sequelize.TIME
      },
      horaFimReserva: {
        type: Sequelize.TIME
      },
      statusReserva: {
        type: Sequelize.STRING
      },
      dataModificacaoStatus: {
        type: Sequelize.DATE
      },
      motivoReserva: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
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