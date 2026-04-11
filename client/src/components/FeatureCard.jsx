import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, index = 0 }) => (
  <motion.div
    className="feature-item"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
  >
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

export default FeatureCard;
