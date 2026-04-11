/**
 * WhatsApp utility functions for Khalbatta Bites
 */

const PHONE_NUMBER = '919767188718';

/**
 * Generate a WhatsApp deep link with a pre-filled message
 */
export const getWhatsAppLink = (message = 'Hello! I want to order from Khalbatta Bites') => {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate a product-specific WhatsApp link
 */
export const getProductWhatsAppLink = (productName, productPrice) => {
  const message = `Hello! I'm interested in ordering ${productName} (${productPrice}). Can you help me place an order?`;
  return getWhatsAppLink(message);
};

/**
 * General WhatsApp link for the floating button
 */
export const WHATSAPP_GENERAL_LINK = getWhatsAppLink();

/**
 * Business contact info
 */
export const BUSINESS_INFO = {
  phone: '9767188718',
  phoneFormatted: '+91 97671 88718',
  phoneLink: 'tel:+919767188718',
  instagram: '@Khalbatta_bites',
  instagramLink: 'https://instagram.com/Khalbatta_bites',
  whatsapp: WHATSAPP_GENERAL_LINK,
  email: '', // Will be updated later
  businessName: 'Khalbatta Bites',
  tagline: 'The Kolhapuri Experience',
};
