/* eslint max-lines-per-function: ["error", {"max": 200, "skipComments": true}]  */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phoneNumber: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        mobile: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        departament: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        verificationCode: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        emailChecked: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cashforceAdm: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
        },
      },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  },
};
