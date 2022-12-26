/* eslint max-lines-per-function: ["error", {"max": 200, "skipComments": true}]  */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'buyers',
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
        tradingName: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        cashforceTax: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        responsibleName: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        responsibleEmail: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        responsiblePosition: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        responsiblePhone: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        responsibleMobile: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        website: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        postalCode: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        address: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        number: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        complement: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        neighborhood: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        state: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        phoneNumber: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        situation: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        situationDate: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cnpjId: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          references: {
            model: 'cnpjs',
            key: 'id',
          },
        },
        confirm: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('buyers');
  },
};
