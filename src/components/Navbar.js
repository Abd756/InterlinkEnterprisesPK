
import Link from 'next/link';
import ActiveLink from './ActiveLink';
import { useState } from 'react';


import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  // If we are in the manufacturing section, Home links there. Otherwise default to Automation.
  const homeLink = router.pathname.startsWith('/manufacturing') ? '/manufacturing' : '/automation';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full flex items-center h-16 px-4">
        <div className="flex items-center flex-shrink-0 ml-2 md:ml-6">
          <Link href="/" className="flex items-center">
            <img src="/images/Logo.jpg" alt="Interlink Enterprises Logo" className="h-12 w-auto" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            <ActiveLink href={homeLink}>Home</ActiveLink>
            <ActiveLink href="/about">About Us</ActiveLink>
            <ActiveLink href="/products">Products</ActiveLink>
            <ActiveLink href="/services">Services</ActiveLink>
            <ActiveLink href="/contact">Contact Us</ActiveLink>
          </div>
          {/* Mobile menu button and menu */}
          <div className="md:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  const router = useRouter();
  const homeLink = router.pathname.startsWith('/manufacturing') ? '/manufacturing' : '/automation';
  const [open, setOpen] = useState(false);
  // Helper to close drawer on link click
  const handleLinkClick = () => setOpen(false);
  return (
    <div className="relative z-50">
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {/* Overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-2xl flex flex-col py-8 px-6 space-y-4 animate-slide-in z-50">
            <button
              className="self-end mb-4 text-primary hover:text-accent focus:outline-none"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ActiveLink href={homeLink} >
              <span onClick={handleLinkClick}>Home</span>
            </ActiveLink>
            <ActiveLink href="/about">
              <span onClick={handleLinkClick}>About Us</span>
            </ActiveLink>
            <ActiveLink href="/products">
              <span onClick={handleLinkClick}>Products</span>
            </ActiveLink>
            <ActiveLink href="/services">
              <span onClick={handleLinkClick}>Services</span>
            </ActiveLink>
            <ActiveLink href="/contact">
              <span onClick={handleLinkClick}>Contact Us</span>
            </ActiveLink>
          </div>
        </>
      )}
      {/* Drawer animation */}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
}
