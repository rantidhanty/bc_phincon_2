const { Products, Categories } = require("../models");
const { where } = require("sequelize");
const products = require("../models/products");

//categories GET
const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.status(200).json({
      status: "success",
      code: 200,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//categories POST
const postCategories = async (req, res) => {
  try {
    const { nameCategorie } = req.body;
    const newCategorie = await Categories.create({ nameCategorie });
    res.status(200).json({
      code: 200,
      status: "success",
      data: newCategorie,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//categories PUT
const putCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameCategorie } = req.body;

    const categorie = await Categories.findOne({ where: { idCategorie: id } });
    if (!categorie) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "categorie not found",
      });
    }
    const updates = { nameCategorie };
    await Categories.update(updates, { where: { idCategorie: id } });

    const isUpdate = await Categories.findOne({ where: { idCategorie: id } });
    res.status(200).json({
      code: 200,
      status: "success",
      data: isUpdate,
    });
  } catch {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//categories DELETE
const delCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const categorie = await Categories.destroy({
      where: { idCategorie: id },
    });
    if (categorie) {
      res.status(200).json({
        status: "success",
        code: 200,
        message: "Categorie deleted",
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Category not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//product GET
const getProduct = async (req, res) => {
  try {
    const product = await Products.findAll();
    res.status(200).json({
      status: "success",
      code: 200,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//product POST
const postProduct = async (req, res) => {
  try {
    const { nameProduct, priceProduct, stockProduct, idCategorie } = req.body;
    console.log(req.body);
    const newProduct = await Products.create({
      nameProduct,
      priceProduct,
      stockProduct,
      idCategorie,
    });
    res.status(200).json({
      code: 200,
      status: "success",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//product PUT
const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameProduct, priceProduct, stockProduct, idCategorie } = req.body;

    const product = await Products.findOne({ where: { idProduct: id } });
    if (!product) {
      return res.status(404).json({
        code: 404,
        status: "failed",
        message: "product not found",
      });
    }
    const updates = { nameProduct, priceProduct, stockProduct, idCategorie };
    await Products.update(updates, { where: { idProduct: id } });

    const isUpdate = await Products.findOne({ where: { idProduct: id } });
    res.status(200).json({
      code: 200,
      status: "success",
      data: isUpdate,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

//product Delete
const delProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.destroy({
      where: { idProduct: id },
    });
    if (product) {
      res.status(200).json({
        status: "success",
        code: 200,
        message: "product deleted",
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  getCategories,
  postCategories,
  putCategories,
  delCategories,
  getProduct,
  postProduct,
  putProduct,
  delProduct,
};
