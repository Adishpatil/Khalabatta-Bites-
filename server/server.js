// ===== KHALBATTA BITES — EXPRESS SERVER =====
const express = require('express');
const cors = require('cors');
const path = require('path');

// Load environment variables from root .env
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ===== API ROUTES =====
app.use('/api/products', require('./routes/products'));
app.use('/api/contact', require('./routes/contact'));

// ===== HEALTH CHECK =====
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Khalbatta Bites API is running',
    timestamp: new Date().toISOString(),
  });
});

// ===== 404 HANDLER =====
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found.',
  });
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`\n🍽️  Khalbatta Bites API Server`);
  console.log(`   Running on: http://localhost:${PORT}`);
  console.log(`   Health:     http://localhost:${PORT}/api/health`);
  console.log(`   Products:   http://localhost:${PORT}/products.json\n`);
});
