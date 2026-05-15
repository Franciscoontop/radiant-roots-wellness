import React from 'react';
import { Link } from 'react-router-dom';

const LabTestingPage: React.FC = () => {
  const tests = [
    {
      name: 'Comprehensive Stool Analysis (GI-MAP)',
      price: '$400',
      description: 'Advanced stool test that identifies gut pathogens, beneficial bacteria, yeast, parasites, and markers of digestion, inflammation, and immune function.',
      bestFor: ['Chronic digestive issues', 'IBS/SIBO', 'Bloating & gas', 'Autoimmune conditions', 'Skin issues'],
    },
    {
      name: 'DUTCH Hormone Test',
      price: '$350',
      description: 'Comprehensive dried urine test that measures cortisol patterns, sex hormones, and hormone metabolites for a complete picture of hormonal health.',
      bestFor: ['Irregular periods', 'PCOS', 'Thyroid issues', 'Adrenal fatigue', 'Mood swings', 'Sleep problems'],
      popular: true,
    },
    {
      name: 'Food Sensitivity Testing (IgG)',
      price: '$300',
      description: 'Identifies food sensitivities that may be contributing to inflammation, digestive issues, and other symptoms.',
      bestFor: ['Digestive discomfort after eating', 'Chronic inflammation', 'Migraines', 'Skin issues', 'Fatigue after meals'],
    },
    {
      name: 'Organic Acids Test (OAT)',
      price: '$350',
      description: 'Urine test that provides insight into metabolic function, nutrient deficiencies, gut bacteria balance, and more.',
      bestFor: ['Chronic fatigue', 'Brain fog', 'Mood disorders', 'Nutrient deficiencies', 'Metabolic issues'],
    },
    {
      name: 'Comprehensive Thyroid Panel',
      price: '$250',
      description: 'Full thyroid assessment including TSH, Free T3, Free T4, Reverse T3, and thyroid antibodies.',
      bestFor: ['Hypothyroid symptoms', 'Hair loss', 'Weight struggles', 'Temperature sensitivity', 'Fatigue'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6">
            Functional Lab Testing
          </h1>
          <p className="text-xl text-[#2D3748]/80 max-w-3xl mx-auto">
            Advanced diagnostic testing that goes beyond conventional labs to uncover 
            the root causes of your symptoms. These tests can be added to any consultation 
            or program.
          </p>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tests.map((test, index) => (
              <div
                key={index}
                className={`card ${test.popular ? 'border-2 border-[#C1876B] relative' : ''}`}
              >
                {test.popular && (
                  <span className="absolute -top-3 -right-3 badge badge-popular">Most Common</span>
                )}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-semibold text-[#4A6741]">{test.name}</h3>
                  <span className="text-2xl font-serif font-semibold text-[#C1876B]">{test.price}</span>
                </div>
                <p className="text-[#2D3748]/70 mb-6">{test.description}</p>
                <div>
                  <h4 className="font-semibold text-[#4A6741] text-sm mb-3">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {test.bestFor.map((condition, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#F7F3E9] text-[#4A6741] text-xs rounded-full"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            How Lab Testing Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                desc: 'Dr. Amara reviews your symptoms and health history to determine which tests are appropriate.',
              },
              {
                step: '02',
                title: 'Order Tests',
                desc: 'Tests are ordered and shipped to your home (or you can go to a local lab).',
              },
              {
                step: '03',
                title: 'Collect Samples',
                desc: 'Follow simple instructions to collect urine, stool, or blood samples at home.',
              },
              {
                step: '04',
                title: 'Review Results',
                desc: 'Dr. Amara analyzes your results and creates a personalized protocol based on findings.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center">
                <span className="text-4xl font-serif font-semibold text-[#C1876B]/30">{item.step}</span>
                <h3 className="text-lg font-serif font-semibold text-[#4A6741] mt-4 mb-3">{item.title}</h3>
                <p className="text-sm text-[#2D3748]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F3E9] p-8 rounded-2xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#C1876B] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-[#4A6741] mb-3">
                  Important Note About Lab Testing
                </h3>
                <p className="text-[#2D3748]/80 leading-relaxed">
                  Lab testing is most effective when done as part of a comprehensive program 
                  with Dr. Amara. She interprets results in the context of your full health 
                  picture and creates personalized protocols. Tests are not sold separately 
                  without a consultation. Payment for labs is due upfront when ordered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Ready to Get Answers?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book a free 20-minute Discovery Call to discuss which tests might be right for you.
          </p>
          <Link to="/contact" className="bg-white text-[#4A6741] px-8 py-4 rounded-full font-semibold hover:bg-[#F7F3E9] transition-colors inline-block">
            Book Free Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LabTestingPage;
