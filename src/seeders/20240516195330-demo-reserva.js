'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservas', [
      {
        id_reservista: 1,
        id_sala: 1,
        id_adm: 1,
        dataReservada: new Date(),
        horaFimReserva: '10:30',
        statusReserva: 'pendente',
        dataModificacaoStatus: null,
        motivoReserva: 'Reunião de equipe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_reservista: 2,
        id_sala: 2,
        id_adm: 1,
        dataReservada: new Date(),
        horaFimReserva: '12:30',
        statusReserva: 'pendente',
        dataModificacaoStatus: null,
        motivoReserva: 'Reunião de equipe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_reservista: 3,
        id_sala: 3,
        id_adm: 1,
        dataReservada: new Date(),
        horaFimReserva: '09:30',
        statusReserva: 'pendente',
        dataModificacaoStatus: null,
        motivoReserva: 'Reunião de equipe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_reservista: 4,
        id_sala: 1,
        id_adm: 1,
        dataReservada: new Date(),
        horaInicio: '14:00',
        horaFimReserva: '17:30',
        statusReserva: 'pendente',
        dataModificacaoStatus: null,
        motivoReserva: 'Reunião de equipe',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservas', null, { truncate: true, cascade: true });
  }
};