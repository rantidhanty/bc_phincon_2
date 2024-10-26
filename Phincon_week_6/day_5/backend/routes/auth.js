const express = require("express");
const {
  getCategories,
  postCategories,
  putCategories,
  delCategories,
  getProduct,
  postProduct,
  putProduct,
  delProduct,
} = require("../controller/auth");

const router = express.Router();

router.get("/categories", getCategories);
router.post("/categories", postCategories);
router.put("/categories/:id", putCategories);
router.delete("/categories/:id", delCategories);

router.get("/product", getProduct);
router.post("/product", postProduct);
router.put("/product/:id", putProduct);
router.delete("/product/:id", delProduct);

module.exports = router;
