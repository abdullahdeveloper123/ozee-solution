import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps { isLoading: boolean; }

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          id="global-route-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-9999 grid place-items-center bg-yellow-500"
        >
          <motion.svg
            aria-label="Loading"
            viewBox="0 0 64 64"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
            className="h-24 w-24"
          >
            <circle
              cx="32"
              cy="32"
              r="22"
              fill="none"
              stroke="white"
              strokeDasharray="44 25 44 25"
              strokeLinecap="butt"
              strokeWidth="3"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
