"use client";

import { useState } from 'react';
import type { NextPage } from 'next';
import { Document, Page, pdfjs } from "react-pdf";
import HeaderMenu from '@components/HeaderMenu';
import MobileMenu from '@components/MobileMenu';
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const AboutMe: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <HeaderMenu toggleMenu={toggleMenu} />
      <MobileMenu isOpen={menuOpen} toggle={toggleMenu} />


    <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="max-w-2xl text-lg text-gray-700 mb-6">
        I’m a senior software engineer with a passion for solving real-world problems through clean, reliable code and an iterative, hands-on approach. 
      </p>
      <p className="max-w-2xl text-lg text-gray-700 mb-6">
        I’ve spent the last several years designing backend systems, building scalable services, and collaborating across teams to ship features that make an impact.
      </p>
      <div>
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
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
}
  
export default AboutMe;
