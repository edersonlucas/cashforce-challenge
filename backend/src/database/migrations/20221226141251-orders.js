/* eslint max-lines-per-function: ["error", {"max": 200, "skipComments": true}]  */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'orders',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        orderNfId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        orderNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        orderPath: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        orderFileName: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        orderOriginalName: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        emissionDate: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        pdfFile: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        emitedTo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        nNf: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        CTE: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        value: {
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
          onDelete: 'CASCADE',
        },
        userId: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        buyerId: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          references: {
            model: 'buyers',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        providerId: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          references: {
            model: 'providers',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        orderStatusBuyer: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        orderStatusProvider: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        deliveryReceipt: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        cargoPackingList: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        deliveryCtrc: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('orders');
  },
};
