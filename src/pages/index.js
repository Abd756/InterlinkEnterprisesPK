import Carousel from '../components/Carousel';
import HomeAboutSection from '../components/HomeAboutSection';
import HomeServicesSection from '../components/HomeServicesSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50">
      <div className="w-full">
        <Carousel />
      </div>
      <HomeAboutSection />
      <HomeServicesSection />
      {/* ...other home page content can go here... */}
    </div>
  );
}
