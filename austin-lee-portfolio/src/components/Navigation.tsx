'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { clearScrollPosition } = useScrollPosition();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${
        isScrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-black/90 backdrop-blur-sm'
      }`}>
        <div className="w-full relative" style={{ paddingLeft: '64px', paddingRight: '48px' }}>
          {/* Desktop & Mobile Header */}
          <div className="h-16 flex items-center justify-between">
            {/* Left Navigation - Desktop only */}
            <ul className="hidden md:flex items-center gap-8 text-sm tracking-wider">
              <li>
                <Link 
                  href="/" 
                  className="hover:opacity-60 transition-opacity"
                  onClick={clearScrollPosition}
                >
                  WORK
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-60 transition-opacity">
                  ABOUT
                </Link>
              </li>
            </ul>
            
            {/* Centered name - Mobile only */}
            {!isMenuOpen && (
              <Link 
                href="/" 
                className="flex-1 text-center text-lg font-bold tracking-widest md:hidden"
                onClick={clearScrollPosition}
              >
                AUSTIN LE
              </Link>
            )}
            
            {/* Spacer for mobile when menu is open */}
            {isMenuOpen && <div className="flex-1 md:hidden"></div>}
            
            {/* Right side - Name (Desktop) */}
            <Link 
              href="/" 
              className="text-lg md:text-xl font-bold tracking-widest hidden md:block"
              onClick={clearScrollPosition}
            >
              AUSTIN LE
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-[60] absolute right-6 top-1/2 -translate-y-1/2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isMenuOpen ? "black" : "currentColor"}
                strokeWidth="2"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay - Mobile only */}
      <div
        className={`fixed inset-0 bg-white z-[55] md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Close Button - Same exact position as menu button */}
        <div className="fixed top-0 left-0 right-0">
          <div className="w-full relative" style={{ paddingLeft: '64px', paddingRight: '48px' }}>
            <div className="h-16 flex items-center justify-between">
              <div></div>
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-12 text-2xl tracking-wider text-black">
            <li>
              <Link 
                href="/" 
                onClick={() => {
                  setIsMenuOpen(false);
                  clearScrollPosition();
                }} 
                className="block hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                WORK
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => setIsMenuOpen(false)} 
                className="block hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
