import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rich-black px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-display text-6xl md:text-7xl text-gold mb-6">404</h1>
        <h2 className="font-accent text-2xl md:text-3xl text-cream mb-8">Page Not Found</h2>
        <p className="text-cream/70 mb-8 max-w-md">
          The page you're looking for seems to have wandered off our menu. 
          Let's get you back to our main dining room.
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-gold text-rich-black font-accent uppercase tracking-wider hover:bg-cream transition-colors duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
