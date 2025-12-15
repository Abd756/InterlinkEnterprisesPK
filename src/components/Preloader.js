import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#2856a3] via-[#1a2a47] to-[#ff914d]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <motion.div
            className="relative w-20 h-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Spinner */}
            <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
              <circle
                cx="40" cy="40" r="32"
                stroke="#2856a3" strokeWidth="8" strokeDasharray="60 100" strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 40 40"
                  to="360 40 40"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="40" cy="40" r="24"
                stroke="#ff914d" strokeWidth="6" strokeDasharray="40 80" strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 40 40"
                  to="0 40 40"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
