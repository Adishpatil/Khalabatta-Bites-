/**
 * LoadingSpinner — Animated loading state for API calls
 * Uses vanilla CSS classes (no Tailwind utilities)
 */
const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="loading-spinner-wrapper">
      <div className="loading-spinner">
        <div className="spinner-ring" />
        <div className="spinner-ring spinner-ring-inner" />
      </div>
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
