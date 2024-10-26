"use strict";

const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = [];

    for (let i = 0; i < 20; i++) {
      products.push({
        nameProduct: faker.commerce.productName(),
        priceProduct: faker.commerce.price(100, 500, 0),
        stockProduct: faker.number.int({ min: 10, max: 100 }),
        idCategorie: faker.number.int({ min: 1, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert("Products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
