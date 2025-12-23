import Head from 'next/head';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Head>
        <title>Interlink Group of Companies</title>
        <meta name="description" content="Leader in automation and logistics industry." />
      </Head>

      {/* Header */}
      <header className="bg-orange-500 py-8 text-center shadow-md z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
          Interlink Group of Companies
        </h1>
      </header>

      {/* About Section */}
      <section className="bg-slate-800 text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold mb-4">About Interlink Group of Companies</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            Interlink Group of Companies is a leader in the automation and logistics industry,
            providing innovative solutions to streamline processes and enhance efficiency. With a
            strong commitment to quality and customer satisfaction, we cater to diverse industrial
            and commercial needs through our comprehensive range of services.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            Our expertise spans across automation systems, state-of-the-art manufacturing processes,
            and logistics solutions, enabling businesses to achieve operational excellence and drive
            growth.
          </p>
        </div>
      </section>

      {/* Main Split Container */}
      <div className="flex-1 flex flex-col md:flex-row min-h-[600px]">
        {/* Automation Section */}
        <Link href="/automation" className="group relative flex-1 overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-gray-700">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('/images/corousel/corousel-1.jpg')" }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 p-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl border border-white/20 shadow-2xl transform transition-all duration-500 group-hover:-translate-y-2">
              <h2 className="text-4xl font-bold text-white mb-3">Automation</h2>
              <p className="text-gray-100 mb-6 text-lg">Click here to explore our Automation services.</p>
              <div className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg group-hover:bg-orange-600 transition-colors">
                Explore Automation
              </div>
            </div>
          </div>
        </Link>

        {/* Manufacturing Section */}
        <Link href="/manufacturing" className="group relative flex-1 overflow-hidden cursor-pointer">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('/images/Home_AboutUs.jpg')" }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 p-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl border border-white/20 shadow-2xl transform transition-all duration-500 group-hover:-translate-y-2">
              <h2 className="text-4xl font-bold text-white mb-3">Manufacturing</h2>
              <p className="text-gray-100 mb-6 text-lg">Click here to explore our Manufacturing services.</p>
              <div className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg group-hover:bg-orange-600 transition-colors">
                Explore Manufacturing
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
