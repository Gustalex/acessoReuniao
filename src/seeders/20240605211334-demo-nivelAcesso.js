'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('nivelAcessos', [{
        nivelAcesso: 1,
        glossarioNivel: 'recepcionista',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nivelAcesso: 2,
        glossarioNivel: 'superUsuario',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('nivelAcessos', null, {});
  }
};
