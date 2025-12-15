import { motion } from 'framer-motion';
import { ExperienceIcon, TeamIcon, TechIcon, SupportIcon } from './WhyChooseUsIcons';

const features = [
  {
    icon: <ExperienceIcon />,
    title: '30+ Years Experience',
    desc: 'Decades of expertise in industrial automation solutions.'
  },
  {
    icon: <TeamIcon />,
    title: 'Certified Engineers',
    desc: 'Skilled, certified professionals for every project.'
  },
  {
    icon: <TechIcon />,
    title: 'Cutting-Edge Technology',
    desc: 'We use the latest technology for maximum efficiency.'
  },
  {
    icon: <SupportIcon />,
    title: '24/7 Support',
    desc: 'Reliable support whenever you need it.'
  }
];

export default function HomeWhyChooseUsSection() {
  return (
    <section className="relative w-full py-20 px-4 md:px-0 bg-white">
      <div className="relative max-w-6xl mx-auto flex flex-col items-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 text-center drop-shadow-lg">Why Choose Us</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col items-center group transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-primary"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.13 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Icon in colored circle */}
              <div className="bg-primary/10 text-primary rounded-full p-4 mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-white -mt-14 shadow-lg flex items-center justify-center" style={{ width: 64, height: 64 }}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 text-center">{feature.title}</h3>
              <div className="w-8 h-1 bg-primary rounded-full mb-3" />
              <p className="text-gray-600 text-center text-base font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
