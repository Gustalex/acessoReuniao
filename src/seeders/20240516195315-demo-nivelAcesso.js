'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('nivelAcessos', [
      {
        nivelAcesso: 1,
        glossarioNivel: 'Gerente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivelAcesso: 2,
        glossarioNivel: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivelAcesso: 3,
        glossarioNivel: 'Empresa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivelAcesso: 4,
        glossarioNivel: 'Usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('nivelAcessos', null, {});
  }
};
