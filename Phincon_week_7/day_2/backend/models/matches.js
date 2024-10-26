"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Matches.belongsTo(models.User, {
        foreignKey: "mc_player_one",
        as: "player_one",
      });
      models.Matches.belongsTo(models.User, {
        foreignKey: "mc_player_two",
        as: "player_two",
      });
    }
  }
  Matches.init(
    {
      mc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      mc_player_one: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "us_id",
        },
      },
      mc_player_one_value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mc_player_two: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "us_id",
        },
      },
      mc_player_two_value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mc_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Matches",
      tableName: "matches",
      timestamps: false,
    }
  );
  return Matches;
};
