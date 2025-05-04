import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Jobin Joseph</h1>
      <p className="text-xl mb-6">Engineer. Builder. DIY Enthusiast.</p>
      <p className="text-lg mb-8 max-w-xl">
        Follow my journey on <strong>Code & Wrench</strong> — where I share DIY projects at the intersection of software and hardware, from smart home hacks to car automation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.youtube.com/@codeandwrench"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-6 py-3 rounded-md text-lg hover:bg-red-700 transition"
        >
          YouTube Channel
        </a>
        <a
          href="https://www.linkedin.com/in/jobin-joseph/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-800 transition"
        >
          LinkedIn Profile
        </a>
      </div>
      <footer className="mt-12 text-sm text-gray-500">© 2025 Jobin Joseph | Code & Wrench</footer>
    </div>
  );
}
