import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-4 min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
