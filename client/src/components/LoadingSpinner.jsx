/**
 * LoadingSpinner — Animated loading state for API calls
 */
const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-border" />
        <div className="absolute inset-0 rounded-full border-2 border-golden border-t-transparent animate-spin" />
      </div>
      <p className="text-text-muted text-sm">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
