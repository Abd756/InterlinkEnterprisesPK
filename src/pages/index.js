import Carousel from '../components/Carousel';
import HomeAboutSection from '../components/HomeAboutSection';

import HomeServicesSection from '../components/HomeServicesSection';
import dynamic from 'next/dynamic';
const HomeWhyChooseUsSection = dynamic(() => import('../components/HomeWhyChooseUsSection'), { ssr: false });
import ClientLogoSlider from '../components/ClientLogoSlider';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white">
      <div className="w-full">
        <Carousel />
      </div>
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeWhyChooseUsSection />
      <ClientLogoSlider />
      {/* ...other home page content can go here... */}
    </div>
  );
}
