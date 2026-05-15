import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Success Stories', id: 'testimonials' },
  { label: 'Blog', id: 'blog' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Shop', id: 'shop' },
];

export default function Navigation({ activePage, setActivePage }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(247, 243, 233, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 30px rgba(58,46,40,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => setActivePage('home')}
          className="flex items-center gap-3 group"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #C1876B, #9CAF88)' }}
          >
            <Leaf size={20} color="white" />
          </div>
          <div className="text-left">
            <div
              className="font-serif font-semibold leading-tight text-base"
              style={{ color: '#3A2E28', fontFamily: 'Lora, serif' }}
            >
              Radiant Roots
            </div>
            <div className="text-xs tracking-widest uppercase" style={{ color: '#9CAF88', letterSpacing: '0.12em' }}>
              Wellness
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`nav-link text-sm font-semibold transition-colors ${
                activePage === link.id ? 'active' : ''
              }`}
              style={{
                color: activePage === link.id ? '#C1876B' : '#3A2E28',
                fontFamily: 'Nunito Sans, sans-serif',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:6465559047"
            className="text-sm font-semibold"
            style={{ color: '#6B5B52', fontFamily: 'Nunito Sans, sans-serif' }}
          >
            (646) 555-9047
          </a>
          <button
            onClick={() => setActivePage('contact')}
            className="btn-primary animate-pulse-gentle"
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            Free Discovery Call
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: '#3A2E28' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${mobileOpen ? 'open' : ''}`} style={{ background: 'rgba(247, 243, 233, 0.98)', backdropFilter: 'blur(12px)' }}>
        <div className="px-6 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActivePage(link.id); setMobileOpen(false); }}
              className="text-left py-3 font-semibold text-base border-b"
              style={{
                color: activePage === link.id ? '#C1876B' : '#3A2E28',
                borderColor: 'rgba(212,197,185,0.3)',
                fontFamily: 'Nunito Sans, sans-serif',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { setActivePage('contact'); setMobileOpen(false); }}
            className="btn-primary mt-4 justify-center"
          >
            Book Free Discovery Call
          </button>
        </div>
      </div>
    </nav>
  );
}
