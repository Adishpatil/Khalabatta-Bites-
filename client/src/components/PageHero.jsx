import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle }) => (
  <section className="page-hero">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {subtitle}
      </motion.p>
    )}
  </section>
);

export default PageHero;
