import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const clientLogos = [
  '/images/clients/ABBOTT PAKISTAN LIMITED.png',
  '/images/clients/ATTOCK CEMENT LIMITED.png',
  '/images/clients/byco.jpg',
  '/images/clients/COCA COLA.png',
  '/images/clients/Descon_logo.png',
  '/images/clients/ENAR.jpg',
  '/images/clients/ENGRO POWER GEN.jpg',
  '/images/clients/HALEEB FOODS LIMITED.jpg',
  '/images/clients/KNN FOODS (PVT.) LTD..png',
  '/images/clients/Package solutions.png',
  '/images/clients/PARCO.jpg',
  '/images/clients/client12.png',   
];

export default function ClientLogoSlider() {
  return (
    <section className="w-full py-12 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-8">Our Clients</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        loop={true}
        speed={800}
        autoplay={{ delay: 1800, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="w-full max-w-5xl mx-auto"
      >
        {clientLogos.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Client ${idx + 1}`}
              className="h-16 w-auto transition duration-300 object-contain"
              style={{ maxWidth: 140 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
