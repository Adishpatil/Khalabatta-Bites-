import { motion } from 'framer-motion';

/**
 * ErrorMessage — Fallback display when products/data fail to load
 * Uses vanilla CSS classes (no Tailwind utilities)
 */
const ErrorMessage = ({ message = 'Products unavailable. Please try again.', onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="error-message-wrapper"
    >
      <div className="error-icon">⚠️</div>
      <h3 className="error-title">Oops! Something went wrong</h3>
      <p className="error-text">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-secondary">
          🔄 Try Again
        </button>
      )}
    </motion.div>
  );
};

export default ErrorMessage;
