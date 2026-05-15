import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A6741] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#C1876B" strokeWidth="2" />
                  <path
                    d="M50 20 C50 20 45 35 45 45 C45 55 50 60 50 70 C50 60 55 55 55 45 C55 35 50 20 50 20"
                    fill="none"
                    stroke="#9CAF88"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 70 C40 75 30 80 25 85 M50 70 C60 75 70 80 75 85"
                    fill="none"
                    stroke="#9CAF88"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">Radiant Roots</h3>
                <p className="text-xs text-[#9CAF88] tracking-wider">WELLNESS</p>
              </div>
            </div>
            <p className="text-[#F7F3E9]/80 text-sm leading-relaxed">
              Holistic wellness and integrative health coaching in the Bronx and virtually nationwide. 
              Healing from within, reclaiming your radiance.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/radiantrootswellness" target="_blank" rel="noopener noreferrer" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@dr.amara.wellness" target="_blank" rel="noopener noreferrer" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.51.36-.95V.02h-3.91z"/>
                </svg>
              </a>
              <a href="https://facebook.com/radiantrootswellness" target="_blank" rel="noopener noreferrer" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">About Dr. Amara</Link></li>
              <li><Link to="/services" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">Services</Link></li>
              <li><Link to="/programs" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">Programs & Packages</Link></li>
              <li><Link to="/group-programs" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">Group Programs</Link></li>
              <li><Link to="/lab-testing" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">Lab Testing</Link></li>
              <li><Link to="/shop" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">Shop Digital Products</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">Blog</Link></li>
              <li><Link to="/testimonials" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">Success Stories</Link></li>
              <li><Link to="/faq" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/health-quiz" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">Health Quiz</Link></li>
              <li><Link to="/contact" className="text-[#F7F3E9]/80 hover:text-[#C1876B] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[#F7F3E9]/80">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#C1876B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>2156 Bathgate Avenue<br/>Bronx, NY 10457</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#C1876B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>dr.amara@radiantrootswellness.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#C1876B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(646) 555-9047</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-[#F7F3E9]/20">
              <p className="text-xs text-[#F7F3E9]/60">
                Serving the Bronx, NYC, and clients nationwide via virtual appointments.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#F7F3E9]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-[#F7F3E9]/60">
            © 2024 Radiant Roots Wellness. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-[#F7F3E9]/60">
            <Link to="#" className="hover:text-[#F7F3E9] transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#F7F3E9] transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-[#F7F3E9] transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
