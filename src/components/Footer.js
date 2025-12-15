import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a2a47] text-white pt-10 pb-4 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo & Company */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <img src="/images/Logo.jpg" alt="Interlink Logo" className="h-10 w-auto mb-2" />
          <span className="font-bold text-lg tracking-wide">Interlink Enterprises</span>
          <span className="text-sm mt-1">Empowering Industries with Automation</span>
        </div>
        {/* Address & Contact */}
        <div className="text-sm mb-6 md:mb-0">
          <span className="font-semibold">UK Office</span>
          <address className="not-italic mt-1 leading-6">
            Office 192<br />
            Unit 5<br />
            399-405 Oxford Street,<br />
            Mayfair<br />
            London<br />
            W1C 2BU
          </address>
          <div className="mt-2">
            <span>Email: </span><a href="mailto:info@interlink.com" className="underline hover:text-accent">info@interlink.com</a><br />
            <span>Phone: </span><a href="tel:+441234567890" className="underline hover:text-accent">+44 1234 567890</a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <span className="font-semibold text-base">Quick Links</span>
          <ul className="mt-2 space-y-1">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/products" className="hover:text-accent">Products</Link></li>
            <li><Link href="/services" className="hover:text-accent">Services</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <span className="font-semibold text-base">Follow Us</span>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="LinkedIn" className="hover:text-accent"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-accent"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.326-1.326z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white border-opacity-20 mt-8 pt-4 text-center text-xs text-white/80">
        © {new Date().getFullYear()} Interlink Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
