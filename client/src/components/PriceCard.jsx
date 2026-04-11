import { motion } from 'framer-motion';
import { getProductWhatsAppLink } from '../utils/constants';

const PriceCard = ({ product, index = 0 }) => (
  <motion.div
    className="price-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <h3>{product.name}</h3>
    <p className="weight">{product.weight || ''}</p>
    <div className="price">
      {product.displayPrice}
      {product.pricePerKg && <span className="price-sub">{product.pricePerKg}</span>}
    </div>
    {product.bulkPricing && product.bulkPricing.length > 0 && (
      <div className="bulk-pricing">
        <p className="label">Bulk Pricing</p>
        {product.bulkPricing.map((bulk, i) => (
          <div key={i} className="bulk-row">
            <span className="qty">{bulk.quantity}</span>
            <span className="bp">{bulk.displayPrice}</span>
          </div>
        ))}
      </div>
    )}
    <a
      href={getProductWhatsAppLink(product.name, product.displayPrice)}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      🛒 Order Now
    </a>
  </motion.div>
);

export default PriceCard;
