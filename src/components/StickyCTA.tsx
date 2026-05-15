import React from 'react';
import { Link } from 'react-router-dom';

const StickyCTA: React.FC = () => {
  return (
    <Link
      to="/contact"
      className="sticky-cta hidden lg:flex items-center space-x-2 btn-primary z-40"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="font-medium">Book Free Discovery Call</span>
    </Link>
  );
};

export default StickyCTA;
