"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Products.belongsTo(models.Categories, {
        foreignKey: "idCategorie",
      });
    }
  }
  Products.init(
    {
      idProduct: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameProduct: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      priceProduct: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stockProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idCategorie: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "idCategorie",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Products",
      tableName: "Products",
      timestamps: true,
    }
  );
  return Products;
};
