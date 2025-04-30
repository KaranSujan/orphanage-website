import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-gray-200 py-3 px-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Orphanage Logo"
            className="h-8"
          />
          <span>Orphanage Care</span>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex space-x-6">
          <a href="tel:+1234567890" className="hover:text-white">
            +1 234 567 890
          </a>
          <a href="mailto:info@orphanage.org" className="hover:text-white">
            info@orphanage.org
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com/orphanage" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaFacebook size={18} />
          </a>
          <a href="https://linkedin.com/company/orphanage" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
