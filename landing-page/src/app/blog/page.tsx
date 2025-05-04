"use client";

import { useState } from 'react';
import type { NextPage } from 'next';
import HeaderMenu from '@components/HeaderMenu';
import MobileMenu from '@components/MobileMenu';


const Blog: NextPage = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <HeaderMenu toggleMenu={toggleMenu} />
      <MobileMenu isOpen={menuOpen} toggle={toggleMenu} />


    <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Coming soon: technical write-ups, project breakdowns, and reflections on making things work.
      </p>
    </main>
    </div>
  );
}
export default Blog;