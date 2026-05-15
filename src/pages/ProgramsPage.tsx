import React from 'react';
import { Link } from 'react-router-dom';

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      title: '3-Month Gut Healing Program',
      price: '$2,400',
      originalPrice: '$2,450',
      description: 'Comprehensive gut healing protocol with testing, personalized meal plans, and ongoing support.',
      features: [
        '6 one-on-one sessions with Dr. Amara',
        'Comprehensive Stool Analysis (GI-MAP) - $400 value',
        'Personalized meal plans & nutrition guidance',
        'Custom supplement protocol',
        'Voxer messaging support between sessions',
        'Educational resources & recipes',
      ],
      popular: true,
      savings: 'Spring Special: Save $50',
    },
    {
      title: '3-Month Hormone Reset Program',
      price: '$2,800',
      description: 'Complete hormone balancing program with comprehensive testing and personalized protocol.',
      features: [
        '6 one-on-one sessions with Dr. Amara',
        'DUTCH Hormone Test - $350 value',
        'Personalized hormone balancing protocol',
        'Cycle tracking & symptom management',
        'Stress management strategies',
        'Voxer messaging support between sessions',
      ],
    },
    {
      title: '6-Month Whole-Body Transformation',
      price: '$4,800',
      description: 'Our most comprehensive program for deep, lasting transformation.',
      features: [
        '12 one-on-one sessions with Dr. Amara',
        'Comprehensive lab panel (multiple tests)',
        'Full personalized protocols',
        'Unlimited messaging support',
        'Priority scheduling',
        'Complete lifestyle transformation plan',
        'Bonus: Digital course access',
      ],
      premium: true,
    },
  ];

  const paymentOptions = [
    {
      title: 'Pay in Full',
      desc: 'Pay the full amount upfront',
      benefit: 'Simple and straightforward',
    },
    {
      title: 'Payment Plan',
      desc: '3-6 monthly installments',
      benefit: '50% deposit to reserve spot, remainder split into monthly payments',
    },
    {
      title: 'Sliding Scale',
      desc: 'Income-based pricing',
      benefit: 'Limited spots available for those who qualify',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge badge-popular mb-6 inline-block">Most Popular Option</span>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6">
            Programs & Packages
          </h1>
          <p className="text-xl text-[#2D3748]/80 max-w-3xl mx-auto">
            Transformative healing programs that provide comprehensive support over 
            several months. Because real healing takes time, consistency, and guidance.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`pricing-card ${program.popular ? 'featured border-2 border-[#C1876B]' : ''} ${program.premium ? 'bg-gradient-to-b from-[#F7F3E9] to-white' : ''}`}
              >
                {program.popular && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 badge badge-popular">
                    Most Popular
                  </span>
                )}
                {program.premium && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 badge" style={{ background: '#C9A86A', color: 'white' }}>
                    Premium
                  </span>
                )}
                <h3 className="text-2xl font-serif font-semibold text-[#4A6741] mb-4">{program.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-serif font-semibold text-[#C1876B]">{program.price}</span>
                  {program.originalPrice && (
                    <span className="text-lg text-[#2D3748]/50 line-through ml-2">{program.originalPrice}</span>
                  )}
                </div>
                {program.savings && (
                  <p className="text-sm text-[#9CAF88] font-medium mb-4">{program.savings}</p>
                )}
                <p className="text-[#2D3748]/70 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-8 text-left">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-[#2D3748]/80">
                      <svg className="w-5 h-5 text-[#9CAF88] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary w-full block">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            Payment Options
          </h2>
          <p className="text-center text-[#2D3748]/80 mb-12 max-w-2xl mx-auto">
            Dr. Amara is committed to making healing accessible. Multiple payment options 
            are available to fit your budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center">
                <h3 className="text-xl font-serif font-semibold text-[#4A6741] mb-2">{option.title}</h3>
                <p className="text-[#2D3748]/70 mb-4">{option.desc}</p>
                <p className="text-sm text-[#9CAF88] font-medium">{option.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            What Makes These Programs Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🕐',
                title: 'Time & Attention',
                desc: '90-minute sessions mean Dr. Amara truly hears your full story.',
              },
              {
                icon: '🔬',
                title: 'Advanced Testing',
                desc: 'Functional lab tests that conventional doctors rarely order.',
              },
              {
                icon: '📋',
                title: 'Personalized Protocols',
                desc: 'Tailored specifically to YOUR body, not cookie-cutter plans.',
              },
              {
                icon: '💬',
                title: 'Ongoing Support',
                desc: 'Messaging support between sessions so you are never alone.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-serif font-semibold text-[#4A6741] mb-2">{item.title}</h3>
                <p className="text-[#2D3748]/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book a free 20-minute Discovery Call to discuss which program is right for you 
            and explore payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#4A6741] px-8 py-4 rounded-full font-semibold hover:bg-[#F7F3E9] transition-colors">
              Book Free Discovery Call
            </Link>
            <Link to="/group-programs" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
              View Group Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
