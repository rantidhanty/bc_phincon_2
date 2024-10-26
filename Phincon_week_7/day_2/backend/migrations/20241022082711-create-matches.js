"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("matches", {
      mc_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      mc_player_one: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "us_id",
        },
      },
      mc_player_one_value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mc_player_two: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "us_id",
        },
      },
      mc_player_two_value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mc_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("matches");
  },
};
