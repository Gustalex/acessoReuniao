'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservas', [
      {
        idSala: 1,
        idUsuario: 1,
        dataReservada: new Date(),
        horaInicio: new Date(), //pegar apenas horas e minutos
        horaFimReserva: new Date(),
        statusReserva: 'PENDENTE',
        dataModificacaoStatus:null,
        motivoReserva: 'estudo coletivo',      
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        idSala: 2,
        idUsuario: 2,
        dataReservada: new Date(),
        horaInicio: new Date(), //pegar apenas horas e minutos
        horaFimReserva: new Date(),
        statusReserva: 'PENDENTE',
        dataModificacaoStatus:null,
        motivoReserva: 'estudo coletivo',      
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        idSala: 3,
        idUsuario: 3,
        dataReservada: new Date(),
        horaInicio: new Date(), //pegar apenas horas e minutos
        horaFimReserva: new Date(),
        statusReserva: 'PENDENTE',
        dataModificacaoStatus:null,
        motivoReserva: 'estudo coletivo',      
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        idSala: 4,
        idUsuario: 4,
        dataReservada: new Date(),
        horaInicio: new Date(), //pegar apenas horas e minutos
        horaFimReserva: new Date(),
        statusReserva: 'PENDENTE',
        dataModificacaoStatus:null,      
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservas', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
