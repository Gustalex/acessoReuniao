'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports ={
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('fracasos', {
            id: {
                allowNull: true,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
            exception: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            message: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
    });
},
async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('fracasos');
}
};