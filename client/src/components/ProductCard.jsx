import { motion } from 'framer-motion';
import { getProductWhatsAppLink } from '../utils/constants';

const ProductCard = ({ product, index = 0 }) => (
  <motion.div
    className="product-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="product-image">
      <img src={`/images/${product.image}`} alt={product.name} loading="lazy" />
      {product.badge && <span className="product-badge">{product.badge}</span>}
    </div>
    <div className="product-content">
      <h3>{product.name}</h3>
      <div className="product-specs">
        {product.weight && <span>{product.weight}</span>}
        {product.quantity && <span>{product.quantity}</span>}
      </div>
      <div className="product-price">{product.displayPrice}</div>
      {product.pricePerKg && <p className="product-price-sub">{product.pricePerKg}</p>}
      <p className="product-desc">{product.description}</p>
      <a
        href={getProductWhatsAppLink(product.name, product.displayPrice)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Order on WhatsApp
      </a>
    </div>
  </motion.div>
);

export default ProductCard;
