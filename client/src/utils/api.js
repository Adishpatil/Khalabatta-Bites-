import axios from 'axios';

const API_BASE = '/api';

/**
 * Fetch all products from the API
 */
export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE}/products`);
  return response.data;
};

/**
 * Submit contact form to the API
 */
export const submitContactForm = async (formData) => {
  const response = await axios.post(`${API_BASE}/contact`, formData);
  return response.data;
};

/**
 * Check API health
 */
export const checkHealth = async () => {
  const response = await axios.get(`${API_BASE}/health`);
  return response.data;
};
