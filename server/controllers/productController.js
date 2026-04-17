// ===== PRODUCT CONTROLLER =====
const path = require('path');
const fs = require('fs');

const PRODUCTS_PATH = path.join(__dirname, '..', 'data', 'products.json');

// In-memory cache — read JSON once, serve from memory
let productsCache = null;

const loadProducts = () => {
  if (!productsCache) {
    const data = fs.readFileSync(PRODUCTS_PATH, 'utf-8');
    productsCache = JSON.parse(data);
    console.log(`[Products] Loaded ${productsCache.length} products into memory cache`);
  }
  return productsCache;
};

/**
 * GET /api/products
 * Returns all products from in-memory cache.
 */
const getProducts = (req, res) => {
  try {
    const products = loadProducts();
    // Cache for 1 hour on CDN/browser
    res.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
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
    const products = loadProducts();
    const product = products.find((p) => p.id === parseInt(req.params.id));

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.',
      });
    }

    res.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
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
