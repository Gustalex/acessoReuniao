'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reservistas', [
      {
        cpf: '12345678900',
        nome: 'Adão',
        email: 'frist@man.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '12345678901',
        nome: 'Enéas',
        email: 'david00eneas@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '12345678902',
        nome: 'Mariah cuie',
        email: 'mulher@semFogao.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        cpf: '12345678903',
        nome: 'Gustavo',
        email: 'macaco@preto.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reservistas', null, {});
  }
};
