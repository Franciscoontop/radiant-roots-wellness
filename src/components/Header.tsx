import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Programs', path: '/programs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-[#F7F3E9]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#C1876B" strokeWidth="2" />
                <path
                  d="M50 20 C50 20 45 35 45 45 C45 55 50 60 50 70 C50 60 55 55 55 45 C55 35 50 20 50 20"
                  fill="none"
                  stroke="#4A6741"
                  strokeWidth="2"
                  className="animate-pulse-gentle"
                />
                <path
                  d="M50 70 C40 75 30 80 25 85"
                  fill="none"
                  stroke="#9CAF88"
                  strokeWidth="2"
                />
                <path
                  d="M50 70 C60 75 70 80 75 85"
                  fill="none"
                  stroke="#9CAF88"
                  strokeWidth="2"
                />
                <path
                  d="M50 70 C45 80 40 90 35 95"
                  fill="none"
                  stroke="#9CAF88"
                  strokeWidth="2"
                />
                <path
                  d="M50 70 C55 80 60 90 65 95"
                  fill="none"
                  stroke="#9CAF88"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-semibold text-[#4A6741] group-hover:text-[#C1876B] transition-colors">
                Radiant Roots
              </h1>
              <p className="text-xs text-[#9CAF88] tracking-wider">WELLNESS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm ${
                  location.pathname === link.path ? 'text-[#C1876B]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-primary text-sm"
            >
              Free Discovery Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#4A6741]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#F7F3E9]/98 z-40 transition-transform duration-400 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            className="absolute top-6 right-6 p-2 text-[#4A6741]"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-serif ${
                location.pathname === link.path ? 'text-[#C1876B]' : 'text-[#4A6741]'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-lg mt-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Free Discovery Call
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
