/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('buyers', [
      {
        id: 1,
        name: 'SACADO 001',
        tradingName: 'SACADO 001 LTDA',
        cashforceTax: 0,
        responsibleName: null,
        responsibleEmail: null,
        responsiblePosition: null,
        address: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null,
        phoneNumber: null,
        situation: null,
        situationDate: null,
        createdAt: '2020-10-29 21:22:21',
        updatedAt: '2020-10-29 21:22:22',
        cnpjId: 1,
        confirm: 1,
        email: null,
      },
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('buyers', null, {});
  },
};
