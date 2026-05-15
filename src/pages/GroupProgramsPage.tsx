import React from 'react';
import { Link } from 'react-router-dom';

const GroupProgramsPage: React.FC = () => {
  const programs = [
    {
      title: '8-Week Gut Reset Group Program',
      price: '$697',
      duration: '8 weeks',
      description: 'Transform your digestive health with a supportive community and expert guidance.',
      features: [
        '8 weekly group coaching calls with Dr. Amara',
        'Private community for support & accountability',
        'Meal plans & recipes',
        'Supplement guidance',
        'Educational modules on gut health',
        'Q&A access',
      ],
      nextStart: 'Next cohort starts May 15',
      spots: 'Limited to 15 participants',
    },
    {
      title: '6-Week Stress & Burnout Recovery Program',
      price: '$497',
      duration: '6 weeks',
      description: 'Reclaim your energy and find balance with holistic stress management strategies.',
      features: [
        '6 weekly group coaching calls',
        'Stress assessment & personalized strategies',
        'Nervous system regulation techniques',
        'Sleep optimization protocols',
        'Community support',
        'Bonus: Meditation audio library',
      ],
      nextStart: 'Next cohort starts June 1',
      spots: 'Limited to 15 participants',
    },
    {
      title: '4-Week Anti-Inflammatory Nutrition Bootcamp',
      price: '$397',
      duration: '4 weeks',
      description: 'Learn to eat for reduced inflammation and improved energy.',
      features: [
        '4 weekly group nutrition sessions',
        'Anti-inflammatory meal plans',
        'Grocery guides & recipes',
        'Understanding food triggers',
        'Community cookbook',
        'Lifetime access to recordings',
      ],
      nextStart: 'Next cohort starts April 20',
      spots: 'Limited to 20 participants',
    },
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'More Affordable',
      desc: 'Get Dr. Amara expertise at a fraction of individual program cost.',
    },
    {
      icon: '👥',
      title: 'Community Support',
      desc: 'Connect with others on similar healing journeys.',
    },
    {
      icon: '📚',
      title: 'Educational Content',
      desc: 'Learn the why behind the protocols for lasting change.',
    },
    {
      icon: '🎥',
      title: 'Lifetime Access',
      desc: 'Keep all recordings and materials forever.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge badge-new mb-6 inline-block">Early Bird Pricing Available</span>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6">
            Group Programs
          </h1>
          <p className="text-xl text-[#2D3748]/80 max-w-3xl mx-auto">
            Affordable cohort-based programs with Dr. Amara. Get expert guidance, 
            educational content, and community support—all at a more accessible price point.
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
                className="pricing-card bg-gradient-to-b from-[#F7F3E9] to-white"
              >
                <h3 className="text-xl font-serif font-semibold text-[#4A6741] mb-2">{program.title}</h3>
                <p className="text-sm text-[#9CAF88] mb-4">{program.duration}</p>
                <div className="mb-4">
                  <span className="text-4xl font-serif font-semibold text-[#C1876B]">{program.price}</span>
                </div>
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
                <div className="bg-white p-4 rounded-xl mb-6">
                  <p className="text-sm text-[#4A6741] font-medium">{program.nextStart}</p>
                  <p className="text-xs text-[#2D3748]/60">{program.spots}</p>
                </div>
                <Link to="/contact" className="btn-primary w-full block">
                  Enroll Now
                </Link>
                <p className="text-xs text-[#2D3748]/60 mt-3">
                  Save $100 with early bird pricing (enroll 2+ weeks before start)
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            Why Choose a Group Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-serif font-semibold text-[#4A6741] mb-2">{benefit.title}</h3>
                <p className="text-[#2D3748]/70 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            Group Program FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What if I can make it live?',
                a: 'All calls are recorded and you get lifetime access. You can also submit questions in advance.',
              },
              {
                q: 'Is this as effective as individual work?',
                a: 'Group programs provide excellent education and support. For complex conditions, individual work may be more appropriate. Dr. Amara can help you decide during a discovery call.',
              },
              {
                q: 'Can I get a refund if I change my mind?',
                a: 'Refunds are available up to 7 days before the program start date. After that, no refunds but you can transfer to a future cohort.',
              },
              {
                q: 'Do I need to have done lab testing before joining?',
                a: 'No, lab testing is not required for group programs. Dr. Amara provides general guidance that works for most people.',
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-[#4A6741] mb-2">{faq.q}</h3>
                <p className="text-[#2D3748]/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Ready to Join a Cohort?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Spaces are limited to ensure personalized attention. Enroll early to secure your spot 
            and save with early bird pricing.
          </p>
          <Link to="/contact" className="bg-white text-[#4A6741] px-8 py-4 rounded-full font-semibold hover:bg-[#F7F3E9] transition-colors inline-block">
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GroupProgramsPage;
