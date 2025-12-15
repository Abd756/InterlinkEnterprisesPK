import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    image: '/images/Services/Cable Management Systems.jpeg',
    title: 'Industrial Automation',
    desc: 'Cutting-edge automation solutions for process industries, improving efficiency and reliability.'
  },
  {
    image: '/images/Services/Electrical and Control Panel Commissioning and Installation.jpeg',
    title: 'Control Systems',
    desc: 'Design and implementation of advanced control systems for seamless industrial operations.'
  },
  {
    image: '/images/Services/Installation of Complete Projects and Products.jpeg',
    title: 'SCADA & Monitoring',
    desc: 'Real-time monitoring and control with robust SCADA systems tailored to your needs.'
  }
];

export default function HomeServicesSection() {
  return (
    <section className="w-full py-16 px-4 md:px-0 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-10 text-center drop-shadow-lg">Our Services</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white border border-gray-200 shadow-2xl rounded-3xl flex flex-col items-center p-7 group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-200/60 hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative z-10 flex flex-col items-center w-full">
                <img src={service.image} alt={service.title} className="w-full h-44 object-cover rounded-xl mb-4 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 ease-out shadow-lg" />
                {/* Icon placeholder: replace with real icons if available */}
                {/* <div className="mb-3 text-4xl">[icon]</div> */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center drop-shadow-sm group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 text-center text-base font-medium mb-4 group-hover:text-primary transition-colors duration-300">{service.desc}</p>
                <Link href="/services" className="inline-block bg-accent text-white font-semibold px-6 py-2 rounded shadow hover:bg-primary transition-colors duration-200 mt-2">Learn More</Link>
              </div>
              {/* Border glowing effect restored */}
              <span className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent group-hover:shadow-accent/40 group-hover:shadow-2xl transition-all duration-500 pointer-events-none z-10" />
            </motion.div>
          ))}
        </div>
        <Link href="/services" className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded shadow hover:bg-primary transition-colors duration-200">Explore More</Link>
      </div>
    </section>
  );
}
