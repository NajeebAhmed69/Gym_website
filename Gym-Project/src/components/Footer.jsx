import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Logo / Name */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700">Najeeb GYM</h2>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} Najeeb GYM. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#" className="hover:text-blue-300 transition">Home</a>
          <a href="#" className="hover:text-blue-300 transition">About</a>
          <a href="#" className="hover:text-blue-300 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-300 transition" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-300 transition" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-blue-300 transition" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
