import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden font-sans selection:bg-orange-500 selection:text-white">
      <Head>
        <title>Interlink Group of Companies | Innovation & Excellence</title>
        <meta name="description" content="A leader in industrial automation, state-of-the-art manufacturing, and logistics solutions." />
      </Head>

      {/* Main Portal Container */}
      <div className="relative h-screen w-full flex flex-col md:flex-row">

        {/* Branding Overlay (Fixed Center) */}
        <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-black/60 backdrop-blur-xl border border-white/20 px-6 py-4 md:px-10 md:py-8 rounded-2xl shadow-2xl text-center max-w-[280px] md:max-w-md"
          >
            <h1 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-1 md:mb-2 text-glow">
              Interlink
            </h1>
            <div className="h-1 w-16 md:w-24 bg-orange-500 mx-auto mb-2 md:mb-4 rounded-full"></div>
            <p className="text-gray-300 text-[10px] md:text-base font-medium uppercase tracking-[0.2em] leading-tight">
              Group of Companies
            </p>
          </motion.div>
        </div>

        {/* Automation Division Section */}
        <Link
          href="/automation"
          className="group relative flex-1 h-1/2 md:h-full overflow-hidden flex items-center justify-center transition-all duration-700 ease-in-out"
        >
          {/* Background Image with Parallax effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[2000ms]"
            style={{ backgroundImage: "url('/images/corousel/corousel-1.jpg')" }}
          />

          {/* Dynamic Overlay */}
          <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-950/80 transition-colors duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center max-w-lg -translate-y-[20%] md:translate-y-0"
            >
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 group-hover:tracking-wider transition-all duration-500 drop-shadow-2xl">
                Automation
              </h2>
              <div className="flex flex-col items-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-10 md:group-hover:translate-y-0">
                <p className="text-white text-sm md:text-lg drop-shadow-md max-w-xs px-4">
                  Revolutionizing industries through intelligent robotic systems and precision engineering.
                </p>
                <div className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:bg-blue-50 transition-colors">
                  Explore Automation
                </div>
              </div>
            </motion.div>
          </div>
        </Link>

        {/* Manufacturing Division Section */}
        <Link
          href="/manufacturing"
          className="group relative flex-1 h-1/2 md:h-full overflow-hidden flex items-center justify-center transition-all duration-700 ease-in-out border-t md:border-t-0 md:border-l border-white/30"
        >
          {/* Background Image with Parallax effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[2000ms]"
            style={{ backgroundImage: "url('/images/Home_AboutUs.jpg')" }}
          />

          {/* Dynamic Overlay */}
          <div className="absolute inset-0 bg-orange-900/60 group-hover:bg-orange-950/80 transition-colors duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center max-w-lg translate-y-[20%] md:translate-y-0"
            >
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 group-hover:tracking-wider transition-all duration-500 drop-shadow-2xl">
                Manufacturing
              </h2>
              <div className="flex flex-col items-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:-translate-y-10 md:group-hover:translate-y-0">
                <p className="text-white text-sm md:text-lg drop-shadow-md max-w-xs px-4">
                  Superior quality production and cutting-edge industrial solutions for global markets.
                </p>
                <div className="px-8 py-3 bg-white text-orange-900 font-bold rounded-full shadow-lg hover:bg-orange-50 transition-colors">
                  Explore Manufacturing
                </div>
              </div>
            </motion.div>
          </div>
        </Link>

      </div>

      {/* Footer-like subtle info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-white/40 text-[10px] uppercase tracking-[0.3em] whitespace-nowrap hidden md:block"
      >
        © 2024 Interlink Enterprises • Pioneering the Future
      </motion.div>
    </div>
  );
}
