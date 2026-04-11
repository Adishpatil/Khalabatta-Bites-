// ===== CONTACT CONTROLLER =====
const { sendContactEmail } = require('../utils/emailService');

/**
 * POST /api/contact
 * Validates the contact form and sends an email via Nodemailer.
 */
const submitContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required.' });
    }
    if (!phone || !phone.trim()) {
      return res.status(400).json({ success: false, message: 'Phone number is required.' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured. Contact form data:', { name, phone, email, message });
      // Still return success so the user knows their message was received
      return res.json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        note: 'Email delivery pending configuration.',
      });
    }

    // Send email
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
