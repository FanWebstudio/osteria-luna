import { motion } from 'framer-motion';

export default function MenuItem({ name, description, price }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-baseline gap-4 mb-1">
        <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors">
          {name}
        </h3>
        <div className="flex-grow border-b border-cream/20 group-hover:border-gold/30 transition-colors" />
        <span className="font-accent text-lg text-gold">{price}</span>
      </div>
      <p className="text-body text-sm italic">{description}</p>
    </motion.div>
  );
}
