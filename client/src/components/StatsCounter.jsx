import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const StatItem = ({ value, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const numValue = parseInt(value) || 0;
    if (numValue === 0) { setCount(0); return; }
    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round(increment * step), numValue));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div className="stat-item" ref={ref}>
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
};

const StatsCounter = ({ stats }) => (
  <div className="stats-row">
    {stats.map((stat, i) => (
      <StatItem key={i} {...stat} />
    ))}
  </div>
);

export default StatsCounter;
