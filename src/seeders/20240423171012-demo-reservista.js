'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservistas', [
      {
        cpf: '12345678900',
        nome: 'Adão',
        telefone: '(00) 00000-0000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '12345678901',
        nome: 'Enéas',
        telefone: '(81) 99955-4433',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '12345678902',
        nome: 'Mariah cuie',
        telefone: '(81) 99955-4433',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        cpf: '12345678903',
        nome: 'Gustavo',
        telefone: '(81) 99955-4433',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservistas', null, {});
  }
};
