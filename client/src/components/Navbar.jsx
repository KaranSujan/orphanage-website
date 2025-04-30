import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { 
      label: 'Donation', 
      isDropdown: true,
      items: [
        { label: 'Previous Donations', href: '#previous-donations' },
        { label: 'Make a Donation', href: '#donation' },
      ]
    },
    { label: 'Events', href: '#events' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">Orphanage Care</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link, idx) => {
            if (!link.isDropdown) {
              return (
                <li key={idx}>
                  <a href={link.href} className="hover:text-blue-500 transition">
                    {link.label}
                  </a>
                </li>
              );
            } else {
              return (
                <li key={idx} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setOpen(o => !o)}
                    className="flex items-center hover:text-blue-500 transition focus:outline-none"
                  >
                    {link.label}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {open && (
                    <ul className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded">
                      {link.items.map((item, i) => (
                        <li key={i}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
}
