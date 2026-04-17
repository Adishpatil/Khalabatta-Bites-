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

  const features = [
    { icon: '🪨', title: 'Traditional Stone Grinding', description: 'We use the authentic Khalbatta (stone mortar) to crush and blend ingredients, preserving natural flavors.' },
    { icon: '✨', title: 'Homemade & Preservative-Free', description: 'Prepared in small batches at home using natural ingredients. No artificial preservatives or chemicals.' },
    { icon: '⭐', title: 'Premium Ingredients', description: 'We carefully select the finest ingredients to ensure quality, freshness, and authentic taste.' },
  ];

  const testimonials = [
    { text: 'The thecha is absolutely amazing! It reminded me of my grandmother\'s recipe. Authentic Kolhapuri taste delivered to my doorstep.', author: 'Priya S., Pune', stars: 5 },
    { text: 'Best protein laddus I\'ve ever had. You can taste the quality of ingredients. Will definitely order again!', author: 'Rajesh K., Mumbai', stars: 5 },
    { text: 'The pure cow ghee is outstanding. Crystal clear and so aromatic. This is what real ghee tastes like!', author: 'Sneha M., Kolhapur', stars: 5 },
  ];

  const processSteps = [
    { icon: '🌾', step: '01', title: 'Select Finest Ingredients', description: 'We hand-pick premium quality spices, nuts, and grains from trusted local sources in Kolhapur.' },
    { icon: '🪨', step: '02', title: 'Traditional Stone Grinding', description: 'Every ingredient is carefully crushed in a Khalbatta (stone mortar) to preserve natural oils and flavors.' },
    { icon: '🏠', step: '03', title: 'Small Batch Preparation', description: 'Made fresh in small batches at home — no factory production, no shortcuts, no preservatives.' },
    { icon: '📦', step: '04', title: 'Fresh to Your Door', description: 'Sealed fresh and delivered promptly to ensure you get the most authentic taste experience.' },
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

      {/* FEATURED PRODUCTS */}
      <section>
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

      {/* PROCESS SHOWCASE (replaces video) */}
      <section className="section-dark process-section">
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

      {/* WHY CHOOSE US */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>What makes Khalbatta Bites special</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <FeatureCard key={i} index={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-dark">
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

      {/* QUICK CONTACT — visible before footer */}
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
