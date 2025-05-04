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
          Software engineer with a passion for solving real-world problems through clean, reliable code and an iterative, hands-on approach. 
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/jobin-joseph-a25595b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.975.784-1.768 1.75-1.768s1.75.793 1.75 1.768c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.5c0-3.038-4-2.804-4 0v5.5h-3v-10h3v1.528c1.396-2.586 7-2.777 7 2.476v5.996z"/>
          </svg>
          LinkedIn
        </a>

        <a
          href="https://github.com/jijo4060"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M12 0a12 12 0 00-3.795 23.399c.6.111.82-.261.82-.58 0-.287-.012-1.242-.018-2.25-3.338.725-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.204.085 1.84 1.236 1.84 1.236 1.07 1.832 2.808 1.303 3.492.996.108-.79.418-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.124-.302-.536-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.289-1.552 3.294-1.23 3.294-1.23.656 1.654.244 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.823 1.103.823 2.222 0 1.606-.014 2.902-.014 3.296 0 .321.216.697.825.579a12.003 12.003 0 00-3.82-23.399z"/>
          </svg>
          GitHub
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
                  src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UUjqQ5yd2T_KvNf8zK-S98Bw"
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