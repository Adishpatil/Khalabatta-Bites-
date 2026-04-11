import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../utils/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const result = await submitContactForm(formData);
      setStatus({ type: 'success', message: result.message });
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.response?.data?.message || 'Failed to send message. Please try again or contact us via WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      className="contact-form-wrapper"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3>Send Us a Message</h3>
      <div className="form-group">
        <label htmlFor="contact-name">Name *</label>
        <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
      </div>
      <div className="form-group">
        <label htmlFor="contact-phone">Phone *</label>
        <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your phone number" />
      </div>
      <div className="form-group">
        <label htmlFor="contact-email">Email *</label>
        <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
      </div>
      <div className="form-group">
        <label htmlFor="contact-message">Message *</label>
        <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="How can we help you?" />
      </div>
      {status.message && (
        <div className={`form-status ${status.type}`}>{status.message}</div>
      )}
      <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }} disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : '✉️ Send Message'}
      </button>
    </motion.form>
  );
};

export default ContactForm;
