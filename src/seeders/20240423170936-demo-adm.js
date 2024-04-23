'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('adms', [
      {
        login: 'adao',
        senha: 'adao',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
   },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('adms', null, {});
   }
};
