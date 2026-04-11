import { motion } from 'framer-motion';

/**
 * ErrorMessage — Fallback display when products/data fail to load
 */
const ErrorMessage = ({ message = 'Products unavailable. Please try again.', onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <div className="text-5xl mb-4">⚠️</div>
      <h3 className="font-[var(--font-display)] text-xl font-bold text-cream mb-2">
        Oops! Something went wrong
      </h3>
      <p className="text-text-secondary text-sm max-w-md mb-6">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3
                     bg-transparent border-2 border-golden text-golden font-semibold text-sm
                     rounded-full cursor-pointer
                     hover:bg-golden hover:text-bg-dark hover:-translate-y-0.5
                     hover:shadow-[0_8px_30px_rgba(212,148,58,0.3)]
                     transition-all duration-300"
        >
          🔄 Try Again
        </button>
      )}
    </motion.div>
  );
};

export default ErrorMessage;
