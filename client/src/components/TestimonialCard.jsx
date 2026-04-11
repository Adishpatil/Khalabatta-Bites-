import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial, index = 0 }) => (
  <motion.div
    className="testimonial-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="testimonial-stars">{'★'.repeat(testimonial.stars || 5)}</div>
    <p className="testimonial-text">"{testimonial.text}"</p>
    <div className="testimonial-author">— {testimonial.author}</div>
  </motion.div>
);

export default TestimonialCard;
