import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="/images/logo.png" alt="Khalbatta Bites" />
            <strong style={{ color: 'var(--cream)', fontFamily: 'var(--font-display)' }}>
              {BUSINESS_INFO.businessName}
            </strong>
          </Link>
          <p>Authentic Kolhapuri food products made with traditional methods and premium ingredients. Bringing the true taste of Kolhapur to your table.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <p><Link to="/about">About Us</Link></p>
          <p><Link to="/products">Products</Link></p>
          <p><Link to="/price-list">Price List</Link></p>
          <p><Link to="/order">How to Order</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <p><Link to="/products">High-Protein Bites</Link></p>
          <p><Link to="/products">Stone-Crushed Thecha</Link></p>
          <p><Link to="/products">Pure Cow Ghee</Link></p>
          <p><Link to="/products">Dry Peanut Chutney</Link></p>
          <p><Link to="/products">Kolhapuri Achar</Link></p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 <a href={BUSINESS_INFO.phoneLink}>{BUSINESS_INFO.phone}</a></p>
          <p>📸 <a href={BUSINESS_INFO.instagramLink} target="_blank" rel="noopener noreferrer">{BUSINESS_INFO.instagram}</a></p>
          <p>💬 <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} {BUSINESS_INFO.businessName}. All rights reserved. | Traditional Kolhapuri taste, delivered to your door.</p>
      </div>
    </footer>
  );
};

export default Footer;
