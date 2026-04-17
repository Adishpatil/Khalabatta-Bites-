import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import FeatureCard from '../components/FeatureCard';
import StatsCounter from '../components/StatsCounter';
import { SkeletonGrid } from '../components/SkeletonCard';
import { fetchProducts } from '../utils/api';
import { getWhatsAppLink, BUSINESS_INFO } from '../utils/constants';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((products) => {
        setFeaturedProducts(products.filter((p) => p.featured).slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = [
    { value: '500', suffix: '+', label: 'Happy Customers' },
    { value: '5', suffix: '+', label: 'Products' },
    { value: '100', suffix: '%', label: 'Natural Ingredients' },
    { value: '0', suffix: '', label: 'Preservatives' },
  ];

  // SECTION 1 — WHY CHOOSE US (4 feature cards)
  const features = [
    {
      icon: '🏠',
      title: 'Homemade Preparation',
      description: 'Prepared using traditional methods in small batches with love and care.',
    },
    {
      icon: '🌶️',
      title: 'Authentic Kolhapuri Taste',
      description: 'Traditional recipes with real ingredients — the true flavour of Kolhapur.',
    },
    {
      icon: '🌿',
      title: 'No Preservatives',
      description: 'Freshly made without any artificial additives or preservatives.',
    },
    {
      icon: '✨',
      title: 'Hygienic & Quality Ingredients',
      description: 'Prepared in a clean and safe kitchen environment with premium ingredients.',
    },
  ];

  // SECTION 2 — CUSTOMER TESTIMONIALS
  const testimonials = [
    {
      text: 'Very tasty and authentic homemade food. The flavours remind me of my grandmother\'s kitchen. Absolutely loved it!',
      author: 'Priya S., Pune',
      stars: 5,
    },
    {
      text: 'Fresh and high-quality products. You can really taste the difference. Will definitely order again!',
      author: 'Rajesh K., Mumbai',
      stars: 5,
    },
    {
      text: 'Loved the traditional taste. The thecha and chutney are just perfect. Highly recommended!',
      author: 'Sneha M., Kolhapur',
      stars: 5,
    },
  ];

  // PROCESS STEPS
  const processSteps = [
    { icon: '🌾', step: '01', title: 'Select Finest Ingredients', description: 'We hand-pick premium quality spices, nuts, and grains from trusted local sources in Kolhapur.' },
    { icon: '🪨', step: '02', title: 'Traditional Stone Grinding', description: 'Every ingredient is carefully crushed in a Khalbatta (stone mortar) to preserve natural oils and flavors.' },
    { icon: '🏠', step: '03', title: 'Small Batch Preparation', description: 'Made fresh in small batches at home — no factory production, no shortcuts, no preservatives.' },
    { icon: '📦', step: '04', title: 'Fresh to Your Door', description: 'Sealed fresh and delivered promptly to ensure you get the most authentic taste experience.' },
  ];

  // SECTION 3 — DELIVERY INFORMATION
  const deliveryItems = [
    {
      icon: '📍',
      title: 'Delivery Areas',
      description: 'We deliver across Kolhapur, Pune, Mumbai, and nearby areas. Contact us for your location.',
    },
    {
      icon: '⏰',
      title: 'Delivery Time',
      description: 'Orders are freshly prepared and delivered within 24 to 48 hours.',
    },
    {
      icon: '💳',
      title: 'Payment Methods',
      description: 'We accept UPI, Cash on Delivery, and Bank Transfer for your convenience.',
    },
  ];

  // SECTION 6 — FAQ
  const faqs = [
    {
      q: 'How do I place an order?',
      a: 'You can place an order by messaging us on WhatsApp. Simply click the WhatsApp button, send us your order details, and we\'ll take care of the rest!',
    },
    {
      q: 'How long does delivery take?',
      a: 'Orders are freshly prepared and typically delivered within 24 to 48 hours depending on your location.',
    },
    {
      q: 'Are products freshly made?',
      a: 'Yes! All our products are made fresh in small batches using traditional methods. We do not use any preservatives or artificial additives.',
    },
    {
      q: 'What payment methods are accepted?',
      a: 'We accept UPI, Cash on Delivery, and Bank Transfer. You can choose whichever is most convenient for you.',
    },
    {
      q: 'Do you offer home delivery?',
      a: 'Yes, we offer home delivery across Kolhapur and nearby areas. For other locations, please contact us on WhatsApp and we\'ll work out the best delivery option for you.',
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <motion.img
            src="/images/hero-bg.jpg"
            alt="Authentic Kolhapuri Food"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>
        <div className="container">
          <motion.p className="hero-tagline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            The Kolhapuri Experience
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            Khalbatta Bites
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            Authentic homemade Kolhapuri food products crafted with traditional stone-grinding methods. No preservatives. Pure taste. Real ingredients.
          </motion.p>
          <motion.div className="hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">🛒 Order on WhatsApp</a>
            <Link to="/products" className="btn btn-secondary">View Products</Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-dark">
        <div className="container">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* SECTION 4 — ABOUT SECTION */}
      <section className="about-home-section" id="about-us">
        <div className="container">
          <div className="section-title">
            <h2>About Khalbatta Bites</h2>
            <p>Our story, our tradition, our promise</p>
          </div>
          <motion.div
            className="about-home-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-home-icon">🪨</div>
            <p>
              At <strong>Khalbatta Bites</strong>, we believe in the power of tradition. Every product is prepared using the <em>Khalbatta</em> — a traditional stone mortar and pestle — to crush and blend ingredients the way it has been done for generations. Our food is made in small batches at home, with a deep commitment to authentic Kolhapuri taste. We use only the finest, freshest ingredients — no artificial preservatives, no shortcuts. Just pure, honest, homemade flavour delivered to your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-dark">
        <div className="container">
          <div className="section-title">
            <h2>Our Products</h2>
            <p>Handcrafted with love using traditional Kolhapuri recipes</p>
          </div>
          {loading ? (
            <SkeletonGrid count={3} />
          ) : (
            <div className="products-grid">
              {featuredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/products" className="btn btn-secondary">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* PROCESS SHOWCASE */}
      <section className="process-section">
        <div className="container">
          <div className="section-title">
            <h2>The Khalbatta Way</h2>
            <p>How we craft every product with authenticity and care</p>
          </div>
          <div className="process-grid">
            {processSteps.map((item, i) => (
              <motion.div
                key={i}
                className="process-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="process-step-number">{item.step}</div>
                <div className="process-step-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {i < processSteps.length - 1 && <div className="process-connector" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — WHY CHOOSE US */}
      <section className="section-dark" id="why-choose-us">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>What makes Khalbatta Bites special</p>
          </div>
          <div className="features-grid features-grid-4">
            {features.map((f, i) => (
              <FeatureCard key={i} index={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — TESTIMONIALS */}
      <section id="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>What Our Customers Say</h2>
            <p>Real reviews from real food lovers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — DELIVERY INFORMATION */}
      <section className="section-dark" id="delivery-info">
        <div className="container">
          <div className="section-title">
            <h2>Delivery Information</h2>
            <p>Fast, fresh, and convenient delivery to your doorstep</p>
          </div>
          <div className="delivery-info-grid">
            {deliveryItems.map((item, i) => (
              <motion.div
                key={i}
                className="delivery-info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="delivery-info-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Got questions? We've got answers.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`faq-item ${activeFaq === i ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  aria-expanded={activeFaq === i}
                >
                  <span>{faq.q}</span>
                  <em className="faq-icon">+</em>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="quick-contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Get in Touch</h2>
            <p>Have questions? Reach out to us directly — we respond fast!</p>
          </div>
          <div className="quick-contact-grid">
            <a href={getWhatsAppLink('Hello, I have a question about Khalbatta Bites')} target="_blank" rel="noopener noreferrer" className="quick-contact-card">
              <span className="quick-contact-icon">💬</span>
              <span className="quick-contact-label">WhatsApp</span>
              <span className="quick-contact-detail">Message Us</span>
            </a>
            <a href={BUSINESS_INFO.phoneLink} className="quick-contact-card">
              <span className="quick-contact-icon">📞</span>
              <span className="quick-contact-label">Call Us</span>
              <span className="quick-contact-detail">{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <a href={BUSINESS_INFO.instagramLink} target="_blank" rel="noopener noreferrer" className="quick-contact-card">
              <span className="quick-contact-icon">📸</span>
              <span className="quick-contact-label">Instagram</span>
              <span className="quick-contact-detail">{BUSINESS_INFO.instagram}</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience Authentic Kolhapuri Taste?</h2>
          <p>Order now through WhatsApp and have our homemade products delivered to your door.</p>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">🛒 Order Now on WhatsApp</a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
