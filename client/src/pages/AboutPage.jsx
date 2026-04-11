import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { getWhatsAppLink } from '../utils/constants';

const AboutPage = () => {
  const timelineItems = [
    { icon: '🪨', title: 'Stone Grinding', desc: 'We use traditional stone grinding methods to crush and blend ingredients, preserving their natural flavors and nutritional value.' },
    { icon: '🌾', title: 'Premium Ingredients', desc: 'Every ingredient is carefully selected for quality and freshness.' },
    { icon: '🏠', title: 'Small Batch Production', desc: 'Products are made in small batches to ensure freshness and quality control.' },
    { icon: '✨', title: 'No Preservatives', desc: 'We do not use artificial preservatives or chemicals.' },
    { icon: '👨‍🍳', title: 'Traditional Recipes', desc: 'Every recipe follows authentic Kolhapuri methods that have stood the test of time.' },
    { icon: '📦', title: 'Fresh Delivery', desc: 'Products are prepared fresh and delivered to ensure maximum freshness.' },
  ];

  const commitments = [
    { title: 'Authenticity', desc: 'We stay true to traditional Kolhapuri recipes and methods.' },
    { title: 'Quality', desc: 'Every product is made with the highest quality ingredients and careful attention to detail.' },
    { title: 'Trust', desc: 'We believe in transparency. You know exactly what goes into our products.' },
    { title: 'Freshness', desc: 'Products are made in small batches and delivered fresh.' },
  ];

  return (
    <>
      <PageHero title="About Khalbatta Bites" subtitle="Our story, our passion, and our commitment to authentic Kolhapuri food" />

      <section>
        <div className="container">
          <div className="about-content">
            <motion.div className="about-text" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2>Our Story</h2>
              <p>Khalbatta Bites was born from a passion for preserving authentic Kolhapuri culinary traditions. What started as a small home kitchen operation has grown into a trusted source for genuine, homemade Kolhapuri food products.</p>
              <p>We believe that traditional recipes carry stories of generations. Each product we create is a tribute to the authentic flavors that define Kolhapuri cuisine.</p>
              <p>Our mission is simple: to bring the true taste of Kolhapuri food to your table, made exactly as it should be—with traditional methods, premium ingredients, and no compromises.</p>
              <Link to="/products" className="btn btn-primary">Explore Our Products</Link>
            </motion.div>
            <motion.div className="about-image" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src="/images/hero-bg.jpg" alt="Khalbatta Bites Traditional Food" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="section-title">
            <h2>Traditional Khalbatta Preparation</h2>
            <p>How we craft every product with authenticity</p>
          </div>
          <div className="timeline">
            {timelineItems.map((item, i) => (
              <motion.div key={i} className="timeline-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <h3>{item.icon} {item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title"><h2>Our Commitment to You</h2></div>
          <div className="commitment-grid">
            {commitments.map((item, i) => (
              <motion.div key={i} className="commitment-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Taste the Authentic Kolhapuri Difference</h2>
          <p>Order now and experience the true taste of tradition.</p>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">🛒 Order on WhatsApp</a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
