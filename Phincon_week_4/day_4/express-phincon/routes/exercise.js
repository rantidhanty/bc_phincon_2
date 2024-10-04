const express = require("express");
const router = express.Router();

const produk = [
    {"id": 1, "produkName": "Tas", "price": 150000},
    {"id": 2, "produkName": "Celana jeans", "price": 200000},
    {"id": 3, "produkName": "Kemeja", "price": 80000},
    {"id": 4, "produkName": "Celana Boxer", "price": 30000},
    {"id": 5, "produkName": "Dompet", "price": 250000},
]
router.get("/", (req, res) => {
    res.send(produk);
});
router.get("/id/:id", (req, res) => {
    const { id } = req.params;
    const product = produk.find((product) => product.id === Number(id));
    res.send(product);
});

module.exports = router