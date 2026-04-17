// ===== CONTACT CONTROLLER =====
const { sendContactEmail } = require('../utils/emailService');

/**
 * Sanitize string input — strip HTML tags, trim, enforce max length
 */
const sanitize = (str, maxLength = 500) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
    .slice(0, maxLength);
};

/**
 * POST /api/contact
 * Validates and sanitizes the contact form, sends email via Nodemailer.
 */
const submitContact = async (req, res) => {
  try {
    const name = sanitize(req.body.name, 100);
    const phone = sanitize(req.body.phone, 20);
    const email = sanitize(req.body.email, 254);
    const message = sanitize(req.body.message, 1000);

    // Validation
    if (!name) {
      return res.status(400).json({ success: false, message: 'Name is required.' });
    }
    if (!phone) {
      return res.status(400).json({ success: false, message: 'Phone number is required.' });
    }
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }
    if (!message) {
      return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    // Phone validation — must be 7-15 digits (with optional +, spaces, dashes)
    const phoneClean = phone.replace(/[\s\-\(\)]/g, '');
    if (!/^\+?\d{7,15}$/.test(phoneClean)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured. Contact form data:', { name, phone, email, message });
      return res.json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        note: 'Email delivery pending configuration.',
      });
    }

    // Send email (inputs are already sanitized)
    await sendContactEmail({ name, phone, email, message });

    res.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    });
  } catch (error) {
    console.error('Error sending contact email:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again or contact us via WhatsApp.',
    });
  }
};

module.exports = { submitContact };
