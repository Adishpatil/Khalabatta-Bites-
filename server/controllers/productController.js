// ===== PRODUCT CONTROLLER =====
const path = require('path');
const fs = require('fs');

const PRODUCTS_PATH = path.join(__dirname, '..', 'data', 'products.json');

/**
 * GET /api/products
 * Returns all products from the JSON data file.
 */
const getProducts = (req, res) => {
  try {
    const data = fs.readFileSync(PRODUCTS_PATH, 'utf-8');
    const products = JSON.parse(data);
    res.json(products);
  } catch (error) {
    console.error('Error reading products:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to load products. Please try again later.',
    });
  }
};

/**
 * GET /api/products/:id
 * Returns a single product by ID.
 */
const getProductById = (req, res) => {
  try {
    const data = fs.readFileSync(PRODUCTS_PATH, 'utf-8');
    const products = JSON.parse(data);
    const product = products.find((p) => p.id === parseInt(req.params.id));

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.',
      });
    }

    res.json(product);
  } catch (error) {
    console.error('Error reading product:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to load product. Please try again later.',
    });
  }
};

module.exports = { getProducts, getProductById };
