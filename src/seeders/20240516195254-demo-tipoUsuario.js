'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipoUsuarios', [
      {
        tipoUser: 1,
        glossarioTipo: 'Gerente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipoUser: 2,
        glossarioTipo: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipoUser: 3,
        glossarioTipo: 'Empresa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipoUser: 4,
        glossarioTipo: 'Usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipoUsuarios', null, {});

  }
};
