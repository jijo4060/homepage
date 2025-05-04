"use client";
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/solid';

const MobileMenu = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
  <div className={`fixed inset-0 bg-white z-50 p-6 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Menu</h2>
      <button onClick={toggle}><XMarkIcon className="h-6 w-6 text-gray-800" /></button>
    </div>
    <nav className="flex flex-col space-y-4 text-lg">
      <Link href="/" onClick={toggle} className="hover:text-blue-600">🏠 Home</Link>
      <Link href="/about" onClick={toggle} className="hover:text-blue-600">👤 About</Link>
      <Link href="/blog" onClick={toggle} className="hover:text-blue-600">📝 Blog</Link>
      <Link href="/contact" onClick={toggle} className="hover:text-blue-600">📬 Contact</Link>
    </nav>
  </div>
);

export default MobileMenu;
