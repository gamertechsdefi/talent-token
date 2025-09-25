// components/Header.tsx

import React from 'react';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';

const Header: React.FC = () => {
  return (
    <header className="bg-amber-100 text-gray-800 py-2 px-4 flex items-center justify-between md:px-6">
      {/* Logo Section */}
      <div className="flex items-center">
        {/* Placeholder for the amber blob icon - replace with actual image or SVG */}
        <img
          src="/images/logo.png" // Replace with your image path
          alt="Teddy Icon"
          className="w-12 h-12 mr-2"
        />
      </div>

      {/* Navigation Links - Desktop Only */}
      <nav className="hidden md:flex space-x-8">
        <a href="#about" className="hover:text-amber-600 transition-colors">
          About
        </a>
        <a href="#tokenomics" className="hover:text-amber-600 transition-colors">
          Tokenomics
        </a>
        <a href="#road-map" className="hover:text-amber-600 transition-colors">
          Road Map
        </a>
        <a href="#presale" className="hover:text-amber-600 transition-colors">
          How to Buy
        </a>
        <a href="#faq" className="hover:text-amber-600 transition-colors">
          FAQs
        </a>
      </nav>

      {/* Social Icons - Mobile Only */}
      <div className="flex gap-2 md:hidden">
        <a 
          href="https://twitter.com/talenttoken" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-amber-700 text-white rounded flex items-center justify-center hover:bg-amber-600 transition-colors"
        >
          <FaXTwitter size={20} />
        </a>
        <a 
          href="https://t.me/talenttoken" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-amber-700 text-white rounded flex items-center justify-center hover:bg-amber-600 transition-colors"
        >
         <FaTelegram size={20} />
        </a>
      </div>

      {/* Get Started Button - Desktop Only */}
      <button className="hidden md:flex bg-amber-700 font-bold text-white px-6 py-2 rounded-r-full items-center relative overflow-hidden">
        Enter the Verse
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-amber-500 transform skew-x-[-30deg] origin-bottom-right"></div>
      </button>
    </header>
  );
};

export default Header;
