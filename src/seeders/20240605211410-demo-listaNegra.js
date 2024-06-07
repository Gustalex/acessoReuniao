'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('listaNegras', [
      {
        idResponsavel: 2,
        idReservaMotivo: 2,
        codBloqueio: 'B0CET4RU1M',
        motivo: 'Comeu na sala (e não foi comida)',
        dataBloqueio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('listaNegras', null, {});
  }
};
