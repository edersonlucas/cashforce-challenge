/* eslint max-lines-per-function: ["error", {"max": 200, "skipComments": true}]  */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'cnpjs',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        cnpj: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        companyType: {
          type: Sequelize.STRING,
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
      },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('cnpjs');
  },
};
