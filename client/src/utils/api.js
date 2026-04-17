import axios from 'axios';

const API_BASE = 'https://khalbatta-api.onrender.com/api';
const CACHE_KEY = 'kb_products_cache';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Axios instance with timeout for Render free-tier
 */
const api = axios.create({
  baseURL: API_BASE,
  timeout: 8000, // 8s timeout — Render cold start can take longer
});

/**
 * Get cached products from sessionStorage
 */
const getCachedProducts = () => {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL) return data;
    sessionStorage.removeItem(CACHE_KEY);
  } catch { /* ignore */ }
  return null;
};

/**
 * Save products to sessionStorage cache
 */
const setCachedProducts = (data) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch { /* ignore if storage full */ }
};

/**
 * Load local fallback products from public/products.json
 */
const loadLocalProducts = async () => {
  const response = await fetch('/products.json');
  if (!response.ok) throw new Error('Local fallback failed');
  return response.json();
};

/**
 * Fetch products — local-first strategy:
 * 1. Return sessionStorage cache if fresh
 * 2. Try Render API with timeout
 * 3. If API fails/slow, serve local products.json immediately
 * 4. Background-upgrade: silently retry API and update cache for next visit
 */
export const fetchProducts = async () => {
  // 1. Check session cache first (instant)
  const cached = getCachedProducts();
  if (cached) return cached;

  // 2. Race: API vs local fallback
  try {
    const response = await api.get('/products');
    const products = response.data;
    setCachedProducts(products);
    return products;
  } catch {
    // 3. API failed or timed out — use local fallback
    console.info('[Khalbatta] API unavailable, using local product data');
    const localProducts = await loadLocalProducts();

    // 4. Background upgrade — silently try API again for next visit
    api.get('/products')
      .then((res) => setCachedProducts(res.data))
      .catch(() => { /* Render still waking up, cached on next success */ });

    return localProducts;
  }
};

/**
 * Submit contact form to the API
 */
export const submitContactForm = async (formData) => {
  const response = await api.post('/contact', formData);
  return response.data;
};

/**
 * Warm up the Render backend (fire-and-forget)
 * Call this once on app mount to wake Render early
 */
export const warmUpBackend = () => {
  api.get('/health').catch(() => {
    // Expected to fail if Render is cold — that's fine,
    // the request itself triggers the wake-up
  });
};

/**
 * Check API health
 */
export const checkHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};
