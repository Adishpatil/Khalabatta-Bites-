// ===== KHALBATTA BITES — EXPRESS SERVER =====
const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

// Load environment variables from root .env
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// ===== SECURITY MIDDLEWARE =====
// Helmet for security headers
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: false, // Disabled for API-only server
}));

// CORS — locked to your Netlify domain
app.use(cors({
  origin: [
    'https://spiffy-lebkuchen-64451a.netlify.app',
    'http://localhost:3000',
    'http://localhost:5173',
  ],
  methods: ['GET', 'POST'],
  credentials: false,
}));

// Compression for faster responses
app.use(compression());

// Body parsing with size limits
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Rate limiting for contact form (prevent spam)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 submissions per 15 min per IP
  message: { success: false, message: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ===== API ROUTES =====
app.use('/api/products', require('./routes/products'));
app.use('/api/contact', contactLimiter, require('./routes/contact'));

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
  console.log(`   Products:   http://localhost:${PORT}/api/products\n`);
});
