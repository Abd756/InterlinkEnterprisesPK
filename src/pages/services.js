import Link from 'next/link';
import servicesData from '../data/servicesData';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">All Services</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
          Discover the comprehensive services we offer to help your business grow and achieve operational excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col group border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">{service.desc}</p>
                <Link href={'/contact'} className="inline-block text-center bg-gray-900 text-white font-medium py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="text-orange-600 font-semibold hover:text-orange-700 hover:underline text-lg">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
