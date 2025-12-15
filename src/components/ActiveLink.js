import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ActiveLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded transition-colors duration-200 font-semibold text-primary hover:text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
        isActive ? 'bg-accent text-white shadow' : ''
      }`}
    >
      {children}
    </Link>
  );
}
