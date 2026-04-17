import { motion } from 'framer-motion';

/**
 * SkeletonCard — Shimmer loading placeholder for ProductCard
 */
const SkeletonCard = () => (
  <motion.div
    className="skeleton-card product-card"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="skeleton-image skeleton-shimmer" />
    <div className="skeleton-content">
      <div className="skeleton-line skeleton-shimmer" style={{ width: '70%', height: '1.2rem' }} />
      <div className="skeleton-line-group">
        <div className="skeleton-pill skeleton-shimmer" />
        <div className="skeleton-pill skeleton-shimmer" />
      </div>
      <div className="skeleton-line skeleton-shimmer" style={{ width: '40%', height: '1.8rem' }} />
      <div className="skeleton-line skeleton-shimmer" style={{ width: '100%', height: '0.9rem' }} />
      <div className="skeleton-line skeleton-shimmer" style={{ width: '85%', height: '0.9rem' }} />
      <div className="skeleton-line skeleton-shimmer" style={{ width: '60%', height: '0.9rem' }} />
      <div className="skeleton-btn skeleton-shimmer" />
    </div>
  </motion.div>
);

/**
 * SkeletonGrid — Multiple skeleton cards in a grid
 */
export const SkeletonGrid = ({ count = 3 }) => (
  <div className="products-grid">
    {Array.from({ length: count }, (_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default SkeletonCard;
