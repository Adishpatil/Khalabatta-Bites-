import { motion } from 'framer-motion';

/**
 * SkeletonPriceCard — Shimmer loading placeholder for PriceCard
 */
const SkeletonPriceCard = () => (
  <motion.div
    className="skeleton-card price-card"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="skeleton-content" style={{ textAlign: 'center' }}>
      <div className="skeleton-line skeleton-shimmer" style={{ width: '60%', height: '1.2rem', margin: '0 auto 0.5rem' }} />
      <div className="skeleton-line skeleton-shimmer" style={{ width: '30%', height: '0.85rem', margin: '0 auto 1rem' }} />
      <div className="skeleton-line skeleton-shimmer" style={{ width: '45%', height: '2.2rem', margin: '0 auto 1.5rem' }} />
      <div className="skeleton-line skeleton-shimmer" style={{ width: '80%', height: '0.75rem', margin: '0 auto 0.4rem' }} />
      <div className="skeleton-line skeleton-shimmer" style={{ width: '80%', height: '0.9rem', margin: '0 auto 0.4rem' }} />
      <div className="skeleton-line skeleton-shimmer" style={{ width: '80%', height: '0.9rem', margin: '0 auto 1.5rem' }} />
      <div className="skeleton-btn skeleton-shimmer" />
    </div>
  </motion.div>
);

/**
 * SkeletonPriceGrid — Multiple skeleton price cards in a grid
 */
export const SkeletonPriceGrid = ({ count = 5 }) => (
  <div className="price-cards">
    {Array.from({ length: count }, (_, i) => (
      <SkeletonPriceCard key={i} />
    ))}
  </div>
);

export default SkeletonPriceCard;
