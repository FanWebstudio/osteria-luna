import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <motion.div
        className="w-16 h-16 border-4 border-gold rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        aria-label="Loading content"
      />
    </div>
  );
}
