'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recepecionistas', [{
      login: 'John Doe',
      senha: false,
      nome:'Adão',
      sobrenome:'Primeiro homem',
      ativo: true,
      nivelAcesso: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recepecionistas', null, {});
  }
};
