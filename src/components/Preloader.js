import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500); // Increased duration for impact

    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
        >
          {/* Background Ambient Light */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo/Text Mask Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter relative overflow-hidden group">
                <span className="relative z-10">Interlink</span>
                <motion.div
                  className="absolute inset-0 bg-blue-500 z-0"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                  style={{ mixBlendMode: 'overlay' }}
                />
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-orange-500 mx-auto mt-2 rounded-full"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gray-500 text-xs md:text-sm uppercase tracking-[0.4em] mt-4 font-medium"
              >
                Pioneering the Future
              </motion.p>
            </motion.div>

            {/* Progress Container */}
            <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 50 }}
              />
            </div>

            <motion.div
              className="mt-4 font-mono text-[10px] text-white/30 uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              System Initializing • {Math.min(100, Math.floor(progress))}%
            </motion.div>
          </div>

          {/* Decorative Corner Lines */}
          <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-white/5" />
          <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-white/5" />
          <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-white/5" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-white/5" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
