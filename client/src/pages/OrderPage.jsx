import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import FeatureCard from '../components/FeatureCard';
import { getWhatsAppLink } from '../utils/constants';

const OrderPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const steps = [
    { number: '01', title: 'Send Message on WhatsApp', desc: 'Open WhatsApp and send us a message with the products you\'d like to order.', hasCta: true },
    { number: '02', title: 'Confirm Your Order', desc: 'We\'ll respond with order details, total price, and delivery information.' },
    { number: '03', title: 'Make Payment', desc: 'We accept UPI, bank transfer, or cash on delivery.' },
    { number: '04', title: 'Receive Your Order', desc: 'Your fresh, homemade Kolhapuri products will be delivered to your address.' },
  ];

  const whyWhatsapp = [
    { icon: '⚡', title: 'Fast & Easy', description: 'No complicated forms. Simply message and we handle everything.' },
    { icon: '💬', title: 'Direct Communication', description: 'Chat directly with us. Ask questions or request customization.' },
    { icon: '🔒', title: 'Secure & Reliable', description: 'WhatsApp is encrypted and secure. Your information is safe.' },
    { icon: '📱', title: 'Anytime, Anywhere', description: 'Order from your phone whenever it\'s convenient for you.' },
    { icon: '✅', title: 'Order Tracking', description: 'Stay updated on your order status through WhatsApp.' },
    { icon: '🤝', title: 'Personal Touch', description: 'We treat every customer personally. Your satisfaction is our priority.' },
  ];

  const deliveryInfo = [
    { title: '📍 Service Area', desc: 'We currently deliver in Kolhapur and nearby areas.' },
    { title: '🚚 Delivery Timeline', desc: 'Orders are typically prepared and delivered within 2-3 days.' },
    { title: '💰 Delivery Charges', desc: 'Delivery charges vary based on location.' },
    { title: '🎁 Bulk Orders & Corporate Gifting', desc: 'We offer special pricing and customization for bulk orders.' },
  ];

  const faqs = [
    { q: 'How long do the products stay fresh?', a: 'Our products are made fresh. We\'ll provide specific storage and shelf-life information with each order.' },
    { q: 'Do you accept customized orders?', a: 'Yes! Contact us on WhatsApp to discuss your requirements.' },
    { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfers, and cash on delivery.' },
    { q: 'Can I return or exchange products?', a: 'Contact us immediately on WhatsApp and we\'ll resolve it.' },
    { q: 'Do you have allergen information?', a: 'Message us on WhatsApp with specific questions about ingredients or allergens.' },
  ];

  return (
    <>
      <PageHero title="How to Order" subtitle="Simple steps to order authentic Kolhapuri food products" />

      <section>
        <div className="container">
          <div className="order-steps">
            {steps.map((step, i) => (
              <motion.div key={i} className="step" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {step.hasCta && (
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>💬 Message on WhatsApp</a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="section-title"><h2>Why Order Through WhatsApp?</h2></div>
          <div className="features-grid">
            {whyWhatsapp.map((item, i) => <FeatureCard key={i} index={i} {...item} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title"><h2>Delivery Information</h2></div>
          <div className="delivery-grid">
            {deliveryInfo.map((item, i) => (
              <motion.div key={i} className="delivery-card" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="section-title"><h2>Frequently Asked Questions</h2></div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeQuestion === i ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => setActiveQuestion(activeQuestion === i ? null : i)}>
                  <span>{faq.q}</span>
                  <em className="faq-icon">+</em>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Order?</h2>
          <p>Start your order today and experience authentic Kolhapuri taste.</p>
          <a href={getWhatsAppLink('Hello, I want to place an order')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">🛒 Order Now</a>
        </div>
      </section>
    </>
  );
};

export default OrderPage;
