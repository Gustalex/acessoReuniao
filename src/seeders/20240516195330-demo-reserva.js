'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservas', [
      {
        id_reservista:1,
        id_sala:1,
        id_adm:1,
        dataReserva:new Date(),
        dataReservada:new Date(),
        horaInicio:'08:00',
        horaFimReserva:'11:00',
        statusReserva: 'pendente',
        dataModificacaoStatus: new Date(),
        motivoReserva: 'Reunião de equipe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_reservista:2,
        id_sala:2,
        id_adm:1,
        dataReserva:new Date(),
        dataReservada:new Date(),
        horaInicio:'12:00',
        horaFimReserva:'15:00',
        statusReserva: 'pendente',
        dataModificacaoStatus: new Date(),
        motivoReserva: 'Reunião de equipe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_reservista:1,
        id_sala:3,
        id_adm:1,
        dataReserva:new Date(),
        dataReservada:new Date(),
        horaInicio:'08:00',
        horaFimReserva:'11:00',
        statusReserva: 'pendente',
        dataModificacaoStatus: new Date(),
        motivoReserva: 'Reunião de equipe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_reservista:1,
        id_sala:2,
        id_adm:1,
        dataReserva:new Date(),
        dataReservada:new Date(),
        horaInicio:'08:00',
        horaFimReserva:'11:00',
        statusReserva: 'pendente',
        dataModificacaoStatus: new Date(),
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