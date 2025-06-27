'use client';
import React, { useState } from 'react';

const menuItems = [
  { label: 'Services', hasDropdown: true },
  { label: 'Industries', hasDropdown: true },
  { label: 'Success Stories' },
  { label: 'Our People' },
  { label: 'Company', hasDropdown: true },
  { label: 'Pricing' },
  { label: 'Events' },
];

const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={`w-full flex items-center justify-between px-16 py-6 text-white font-bold text-sm tracking-wide fixed top-0 left-0 z-30 transition-colors duration-300 ${isHovered ? 'bg-black' : 'bg-transparent'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{backdropFilter: 'none'}}
    >
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
        {/* Placeholder SVG logo */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#fff" fillOpacity="0.1"/>
          <path d="M8 20L16 10L24 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
                    <span className="ml-2 text-lg font-extrabold tracking-widest">BARBARIKA</span>
      </div>
      {/* Menu */}
      <ul className="flex gap-6 items-center mx-auto">
        {menuItems.map((item) => (
          <li key={item.label} className="relative flex items-center cursor-pointer hover:text-pink-400 transition text-sm font-semibold capitalize">
            <span>{item.label}</span>
            {item.hasDropdown && (
              <svg className="ml-1" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </li>
        ))}
      </ul>
      {/* CTA Button */}
      <button
        className="rounded-md px-6 py-2 font-semibold bg-transparent border-2 text-transparent bg-clip-text transition-all duration-300 group"
        style={{
          background: 'linear-gradient(90deg, #FF8BA7, #7F5CFF)',
          borderImage: 'linear-gradient(90deg, #FF8BA7, #7F5CFF) 1',
          borderStyle: 'solid',
          borderRadius: '8px',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        } as React.CSSProperties}
        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.currentTarget as HTMLElement;
          target.style.background = 'linear-gradient(90deg, #FF8BA7, #7F5CFF)';
          target.style.backgroundClip = 'border-box';
          (target.style as CSSStyleDeclaration).webkitBackgroundClip = 'border-box';
          (target.style as CSSStyleDeclaration).webkitTextFillColor = 'white';
          target.style.color = 'white';
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.currentTarget as HTMLElement;
          target.style.background = 'linear-gradient(90deg, #FF8BA7, #7F5CFF)';
          target.style.backgroundClip = 'text';
          (target.style as CSSStyleDeclaration).webkitBackgroundClip = 'text';
          (target.style as CSSStyleDeclaration).webkitTextFillColor = 'transparent';
          target.style.color = 'transparent';
        }}
      >
        Book Intro Call
      </button>
    </nav>
  );
};

export default Navbar; 