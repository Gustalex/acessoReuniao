'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reunioes', [
      {
        reservaId: 1,
        idParticipante: JSON.stringify([2, 3]),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        reservaId: 2,
        idParticipante: JSON.stringify([1, 3]),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        reservaId: 3,
        idParticipante: JSON.stringify([1, 2]),
        createdAt: new Date(),
        updatedAt: new Date()
      
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reunioes', null, {});
  }
};
