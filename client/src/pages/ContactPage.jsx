import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import FeatureCard from '../components/FeatureCard';
import ContactForm from '../components/ContactForm';
import { BUSINESS_INFO, getWhatsAppLink } from '../utils/constants';

const ContactPage = () => {
  const contactCards = [
    { icon: '📱', title: 'WhatsApp', info: BUSINESS_INFO.phone, desc: 'Fast and easy ordering, questions, and support', ctaLabel: '💬 Message on WhatsApp', ctaLink: getWhatsAppLink('Hello, I want to contact Khalbatta Bites'), external: true },
    { icon: '📞', title: 'Phone', info: BUSINESS_INFO.phone, desc: 'Call us during business hours', ctaLabel: '📞 Call Now', ctaLink: BUSINESS_INFO.phoneLink, external: false },
    { icon: '📸', title: 'Instagram', info: BUSINESS_INFO.instagram, desc: 'Follow us for updates and special offers', ctaLabel: '📸 Follow Us', ctaLink: BUSINESS_INFO.instagramLink, external: true },
  ];

  const getInTouchItems = [
    { icon: '🛒', title: 'Place an Order', description: 'Order your favorite Kolhapuri food products.' },
    { icon: '❓', title: 'Questions & Support', description: 'Have questions about products, ingredients, or delivery?' },
    { icon: '🎁', title: 'Bulk Orders', description: 'Looking for larger quantities or corporate gifting?' },
    { icon: '⚙️', title: 'Customization', description: 'Need custom packaging or special preparation?' },
    { icon: '💬', title: 'Feedback', description: 'We\'d love to hear your feedback.' },
    { icon: '🤝', title: 'Partnerships', description: 'Interested in reselling or partnering?' },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '10:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Reach out anytime." />

      <section>
        <div className="container">
          <div className="contact-methods">
            {contactCards.map((card, i) => (
              <motion.div key={i} className="contact-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="contact-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p className="contact-info">{card.info}</p>
                <p>{card.desc}</p>
                <a href={card.ctaLink} target={card.external ? '_blank' : undefined} rel={card.external ? 'noopener noreferrer' : undefined} className="btn btn-primary">
                  {card.ctaLabel}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="section-title">
            <h2>Email Us</h2>
            <p>Send us a message and we'll get back to you within 24 hours</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title"><h2>Get in Touch For</h2></div>
          <div className="features-grid">
            {getInTouchItems.map((item, i) => <FeatureCard key={i} index={i} {...item} />)}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="section-title"><h2>Business Hours</h2></div>
          <div className="hours-card">
            {hours.map((h, i) => (
              <div key={i} className="hours-row">
                <span className="day">{h.day}</span>
                <span className="time">{h.time}</span>
              </div>
            ))}
            <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              You can still message us on WhatsApp anytime, and we'll respond during business hours.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Have a Question?</h2>
          <p>Don't hesitate to reach out. We're here to help!</p>
          <a href={getWhatsAppLink('Hello, I have a question')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">💬 Message Us Now</a>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
