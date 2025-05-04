"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import HeaderMenu from '@components/HeaderMenu';
import MobileMenu from '@components/MobileMenu';

const HomePage: NextPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <HeaderMenu toggleMenu={toggleMenu} />
      <MobileMenu isOpen={menuOpen} toggle={toggleMenu} />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
        <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 drop-shadow-md">Hi, I'm Jobin Joseph</h1>
        <p className="text-xl text-gray-700 mb-6">Software Engineer • Builder • Lifelong Learner</p>
        <p className="text-lg mb-10 max-w-2xl text-gray-600">
          I specialize in backend engineering, cloud infrastructure, and solving real-world problems through software. When I'm not coding professionally, I'm diving into DIY tech projects that blend hardware and automation.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/jobin-joseph-a25595b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-800 transition"
          >
            Connect on LinkedIn
          </a>
        </div>

        <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="text-left text-gray-700">
            <h3 className="text-xl font-semibold mt-4 mb-1">Code & Wrench</h3>
            <p className="mb-2">
              My YouTube channel exploring challenge-based DIY projects—from smart home automations to car tech upgrades. I document the process: missteps, iterations, and small wins.
            </p>
            <a
              href="https://www.youtube.com/@codeandwrench"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-medium hover:underline"
            >
              Visit Code & Wrench on YouTube
            </a>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">🎬 Latest Videos</h4>
              <div className="grid grid-cols-1 gap-4">
                <iframe
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/videoseries?list=UUjqQ5yd2T_KvNf8zK-S98Bw"
                  title="Code & Wrench - Latest Videos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-sm text-gray-500">© 2025 Jobin Joseph — Built with Next.js & TailwindCSS</footer>
      </main>
    </div>
  );
};

export default HomePage;