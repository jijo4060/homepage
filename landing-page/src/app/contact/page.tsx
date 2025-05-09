"use client";

import { useState } from 'react';
import type { NextPage } from 'next';
import HeaderMenu from '@components/HeaderMenu';
import MobileMenu from '@components/MobileMenu';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', access_key: '' });
  const [status, setStatus] = useState('');

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  
    if (res.ok) {
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '', access_key: '' });
    } else {
      setStatus('Something went wrong. Try again later.');
    }
  };

  return (   
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <HeaderMenu toggleMenu={toggleMenu} />
      <MobileMenu isOpen={menuOpen} toggle={toggleMenu} />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md text-left">
        <label className="block mb-2 text-sm font-semibold text-gray-600">Name</label>
        <input
          className="w-full p-2 mb-4 border rounded-md"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />

        <label className="block mb-2 text-sm font-semibold text-gray-600">Email</label>
        <input
          className="w-full p-2 mb-4 border rounded-md"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />

        <label className="block mb-2 text-sm font-semibold text-gray-600">Message</label>
        <textarea
          className="w-full p-2 mb-4 border rounded-md"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Let's connect..."
          required
        ></textarea>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
      </main>
    </div>
  );
};
  

  export default Contact;