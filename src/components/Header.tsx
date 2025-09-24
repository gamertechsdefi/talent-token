// components/Header.tsx

import React from 'react';

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
          Presale
        </a>
      </nav>

      {/* Social Icons - Mobile Only */}
      <div className="flex gap-2 md:hidden">
        <a 
          href="https://twitter.com/talenttoken" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-amber-500 text-white rounded flex items-center justify-center hover:bg-amber-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a 
          href="https://t.me/talenttoken" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 bg-amber-500 text-white rounded flex items-center justify-center hover:bg-amber-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
      </div>

      {/* Get Started Button - Desktop Only */}
      <button className="hidden md:flex bg-amber-500 text-white px-6 py-2 rounded-r-full items-center relative overflow-hidden">
        Get Started
        <span className="ml-2">&rarr;</span>
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-amber-500 transform skew-x-[-30deg] origin-bottom-right"></div>
      </button>
    </header>
  );
};

export default Header;
