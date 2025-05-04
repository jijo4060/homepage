import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const HeaderMenu = ({ toggleMenu }: { toggleMenu: () => void }) => (
  <header className="bg-gray-100 border-b px-6 py-4 shadow-sm">
        <nav className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="text-lg font-bold">Jobin Joseph</span>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <Bars3Icon className="h-6 w-6 text-gray-800" />
          </button>
        </nav>
      </header>
);

export default HeaderMenu;