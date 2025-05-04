"use client";

import Link from 'next/link';
import type { NextPage } from 'next';


const Blog: NextPage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-row">
  <aside className="w-48 bg-gray-200 p-4 flex flex-col space-y-4">
    <Link href="/" className="text-blue-700 font-semibold hover:underline">🏠 Home</Link>
    <Link href="/about" className="text-blue-700 font-semibold hover:underline">👤 About Me</Link>
    <Link href="/blog" className="text-blue-700 font-semibold hover:underline">📝 Blog</Link>
    <Link href="/contact" className="text-blue-700 font-semibold hover:underline">📬 Contact</Link>
  </aside>

  <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
    <h1 className="text-4xl font-bold mb-4">Blog</h1>
    <p className="text-lg text-gray-700 max-w-2xl">
      Coming soon: technical write-ups, project breakdowns, and reflections on making things work.
    </p>
  </main>
</div>
);

export default Blog;