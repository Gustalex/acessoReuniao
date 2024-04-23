'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('salas', [
      {
        nome: 'Sala 1',
        andar: 0,
        area: 'CooWork',
        capMax: 5,
        observacao: 'Arcondicionado quebrado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sala 2',
        andar: 0,
        area: 'CooWork',
        capMax: 5,
        observacao: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sala 3',
        andar: 0,
        area: 'CooWork',
        capMax: 5,
        observacao: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('salas', null, {});
  }
};
