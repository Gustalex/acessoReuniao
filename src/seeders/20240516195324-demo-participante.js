'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('participantes',[
      {
        userId: 1,
        nome: 'Adão',
        sobrenome: 'Primeiro Homem',
        email: 'first@man.com',
        numTelefone: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('participantes', null, {});
  }
};
