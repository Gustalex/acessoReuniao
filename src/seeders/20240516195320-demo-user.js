'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        login: 'adao',
        senha: '123456',
        identificador: '12345678900',
        ativo: true,
        tipo: 1,
        nivelAcesso: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
