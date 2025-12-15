import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    image: '/images/Services/Cable Management Systems.jpeg',
    title: 'Industrial Automation',
    desc: 'Cutting-edge automation solutions for process industries, improving efficiency and reliability.'
  },
  {
    image: '/images/Services/service2.jpg',
    title: 'Control Systems',
    desc: 'Design and implementation of advanced control systems for seamless industrial operations.'
  },
  {
    image: '/images/Services/service3.jpg',
    title: 'SCADA & Monitoring',
    desc: 'Real-time monitoring and control with robust SCADA systems tailored to your needs.'
  }
];

export default function HomeServicesSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 text-center">Our Services</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={service.image} alt={service.title} className="w-full h-44 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center mb-4">{service.desc}</p>
            </motion.div>
          ))}
        </div>
        <Link href="/services" className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded shadow hover:bg-primary transition-colors duration-200">Explore More</Link>
      </div>
    </section>
  );
}
