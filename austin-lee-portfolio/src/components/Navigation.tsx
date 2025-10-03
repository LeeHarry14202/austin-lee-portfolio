'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm h-32 flex items-center">
      <div className="w-full relative" style={{ paddingLeft: '64px', paddingRight: '120px' }}>
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm tracking-wider">
            <li>
              <Link href="/" className="hover:opacity-60 transition-opacity">
                LATEST WORK
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:opacity-60 transition-opacity">
                WHO IS AUSTIN LEE?
              </Link>
            </li>
          </ul>
          
          {/* Spacer for mobile to push nothing */}
          <div className="md:flex-1"></div>
          
          {/* Right side - Name */}
          <Link href="/" className="text-lg md:text-xl font-bold tracking-widest hidden md:block">
            AUSTIN LEE
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-6 space-y-4 text-xs tracking-wider">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block">
                LATEST WORK
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block">
                WHO IS AUSTIN LEE?
              </Link>
            </li>
          </ul>
        )}
      </div>
      
      {/* Centered name - only visible on small screens */}
      <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold tracking-widest md:hidden">
        AUSTIN LEE
      </Link>
    </nav>
  );
}
