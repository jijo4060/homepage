"use client";

import Link from 'next/link';
import type { NextPage } from 'next';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const AboutMe: NextPage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-row">
  <aside className="w-48 bg-gray-200 p-4 flex flex-col space-y-4">
    <Link href="/" className="text-blue-700 font-semibold hover:underline">🏠 Home</Link>
    <Link href="/about" className="text-blue-700 font-semibold hover:underline">👤 About Me</Link>
    <Link href="/blog" className="text-blue-700 font-semibold hover:underline">📝 Blog</Link>
    <Link href="/contact" className="text-blue-700 font-semibold hover:underline">📬 Contact</Link>
  </aside>

  <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
    <h1 className="text-4xl font-bold mb-4">About Me</h1>
    <p className="max-w-2xl text-lg text-gray-700 mb-6">
      I'm Jobin Joseph, a software engineer with a passion for DIY projects. I blend backend development with hands-on engineering to explore automation, hardware, and software solutions.
    </p>
    <div>
      <Document file="/resume.pdf">
      <Page pageNumber={1} />
      </Document>
    </div>
    <a
      href="/resume.pdf"
      download
      className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
    >
      Download Resume
    </a>
  </main>
  </div>
);
  
export default AboutMe;
