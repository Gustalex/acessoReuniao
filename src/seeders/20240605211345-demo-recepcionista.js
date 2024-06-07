'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recepecionistas', [
      {
        login: 'garota de ipanema',
        senha: false,
        nome:'Bruna',
        sobrenome:'Castro',
        ativo: true,
        nivelAcesso: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        login: 'chefion',
        senha: false,
        nome:'Ulpio',
        sobrenome:'Neto',
        ativo: true,
        nivelAcesso: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recepecionistas', null, {});
  }
};
