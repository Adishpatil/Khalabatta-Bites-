// ===== PRODUCT ROUTES =====
const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/productController');

// GET /api/products — All products
router.get('/', getProducts);

// GET /api/products/:id — Single product
router.get('/:id', getProductById);

module.exports = router;
