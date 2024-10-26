"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      idProduct: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameProduct: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      priceProduct: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      stockProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idCategorie: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "idCategorie",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
