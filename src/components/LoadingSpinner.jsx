import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[200px] space-y-4">
      <motion.div
        className="w-16 h-16 border-4 border-gold/30 rounded-full border-t-gold"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear"
        }}
        aria-label="Loading content"
      />
      <p className="text-cream/70 font-accent tracking-wider">Loading...</p>
    </div>
  );
}
