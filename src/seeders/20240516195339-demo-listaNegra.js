'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('listaNegras',[
    {
      idResponsavel: 1,
      idReservaMotivo: 1,
      motivo: 'Não pagou',
      dataBloqueio: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],{});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('listaNegras', null, {});
  }
};
