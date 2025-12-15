import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeAboutSection() {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text Section with animation */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">About Interlink Enterprises</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            INTERLINK ENTERPRISES established in 1996, with a single powerful belief that professionally implemented Automation and Control solution backed up by comprehensive after-sale services could enhance and transform process industry in an amazing way. We established a long­term and stable business cooperation relationship with world-famous manufacturers at home and abroad. We endeavor to provide our customers with high-quality, 100% original products at competitive prices. We purchase advanced industrial products from Asia, Europe, and the United States and supply them to our customers all over Pakistan. INTERLINK ENTERPRISES has played for over 24 years in Pakistan. We at INTERLINK ENTERPRISES are specialists and pioneers in the field of manufacturing Orifice Assemblies, Auto Parts, and the supply of Automation, Control, and Instrumentation to industrial processes. Our specialties cover the Oil & Gas sector, Cement, Fertilizer, Chemical, Paper, Power Plant, Steel, Sugar, FMCG, packaging, and Textile industries.
          </p>
          <Link href="/about" className="inline-block bg-accent text-white font-semibold px-6 py-2 rounded shadow hover:bg-primary transition-colors duration-200">See More</Link>
        </motion.div>
        {/* Image Section with animation */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img 
            src="/images/Home_AboutUs.jpg" 
            alt="About Interlink Enterprises" 
            className="w-full max-w-xl h-72 md:h-96 object-cover rounded-xl shadow-lg border-4 border-white" 
          />
        </motion.div>
      </div>
    </section>
  );
}
