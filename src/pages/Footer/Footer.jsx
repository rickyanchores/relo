// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-white py-8" id="contact">
      <div className="container mx-auto text-center grid md:grid-cols-2 grid-cols-1">
        <h2 className="text-black text-2xl font-bold mb-4">Relo</h2>
        <p className="text-gray-600 mb-2">London, United Kingdom</p>
        <p className="text-gray-600 mb-2">Phone: +123 456 7890</p>
        <p className="text-gray-600 mb-2">Email: info@example.com</p>
        <p className="text-gray-600 mb-2">Developed by: Ricky A</p>
        <p className="text-gray-600 mb-2">Inspired by: semplice.com</p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-600 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v14m0-14V3a9 9 0 00-9 9h14a9 9 0 00-9-9z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
