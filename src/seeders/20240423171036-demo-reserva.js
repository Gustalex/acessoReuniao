'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservas', [
      {
        id_reservista: 1,
        id_sala: 1,
        id_adm: 1,
        dataReservada: new Date(),
        horaReservada: '10:00', 
        horaFim: '13:30', 
        situacao: 'Concluída',
        dataConclusao: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_reservista: 2,
        id_sala: 2,
        id_adm: 1,
        dataReservada: new Date(),
        horaReservada: '14:00',
        horaFim: '17:30',
        situacao: 'pendente',
        dataConclusao: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_reservista: 3,
        id_sala: 3,
        id_adm: 1,
        dataReservada: new Date(),
        horaReservada: '14:00',
        horaFim: '17:30',
        situacao: 'pendente',
        dataConclusao: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_reservista: 4,
        id_sala: 1,
        id_adm: 1,
        dataReservada: new Date(),
        horaReservada: '14:00',
        horaFim: '17:30',
        situacao: 'pendente',
        dataConclusao: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservas', null, { truncate: true, cascade: true });
  }
};