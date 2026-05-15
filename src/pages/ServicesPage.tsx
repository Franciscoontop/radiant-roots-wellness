import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: '90-Minute Comprehensive Health Assessment',
      price: '$350',
      description: 'Deep dive into your health history, symptoms, lifestyle, and goals. Includes personalized recommendations and next steps.',
      features: ['90 minutes one-on-one with Dr. Amara', 'Comprehensive health history review', 'Personalized初步 recommendations', 'Follow-up plan'],
      virtual: true,
      inPerson: true,
    },
    {
      title: 'New Client Gut Health Intensive',
      price: '$450',
      description: 'Specialized 90-minute consultation focused on digestive health with personalized protocol.',
      features: ['90 minutes focused on gut health', 'Digestive symptom analysis', 'Personalized gut healing protocol', 'Dietary recommendations'],
      virtual: true,
      inPerson: true,
      popular: true,
    },
    {
      title: 'Hormone Balance Assessment',
      price: '$400',
      description: 'Comprehensive hormone evaluation with lab review and personalized balancing protocol.',
      features: ['90 minutes hormone-focused consultation', 'Lab test review (if available)', 'Hormone balancing protocol', 'Lifestyle recommendations'],
      virtual: true,
      inPerson: true,
    },
    {
      title: '60-Minute Follow-Up Session',
      price: '$200',
      description: 'Ongoing support to track progress, adjust protocols, and address new concerns.',
      features: ['60 minutes with Dr. Amara', 'Progress review', 'Protocol adjustments', 'Ongoing support'],
      virtual: true,
      inPerson: true,
    },
    {
      title: '30-Minute Check-In Session',
      price: '$100',
      description: 'Quick check-in for minor adjustments and accountability.',
      features: ['30 minutes with Dr. Amara', 'Quick progress check', 'Minor protocol tweaks', 'Accountability support'],
      virtual: true,
      inPerson: true,
    },
    {
      title: 'Traditional Chinese Medicine Consultation',
      price: '$250',
      description: 'TCM-based assessment with herbal protocol recommendations.',
      features: ['TCM diagnosis', 'Herbal protocol design', 'Acupressure recommendations', 'Lifestyle guidance'],
      virtual: true,
      inPerson: true,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6">
            Individual Services
          </h1>
          <p className="text-xl text-[#2D3748]/80 max-w-3xl mx-auto">
            One-on-one consultations with Dr. Amara, available both in-person at the Bronx 
            wellness center and virtually nationwide.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card relative ${service.popular ? 'border-[#C1876B] border-2' : ''}`}
              >
                {service.popular && (
                  <span className="absolute -top-3 -right-3 badge badge-popular">Most Popular</span>
                )}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-semibold text-[#4A6741]">{service.title}</h3>
                </div>
                <p className="text-3xl font-serif font-semibold text-[#C1876B] mb-4">{service.price}</p>
                <p className="text-[#2D3748]/70 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-[#2D3748]/80">
                      <svg className="w-5 h-5 text-[#9CAF88] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center space-x-4 text-xs text-[#2D3748]/60 mb-6">
                  {service.virtual && (
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Virtual</span>
                    </span>
                  )}
                  {service.inPerson && (
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>In-Person</span>
                    </span>
                  )}
                </div>
                <Link to="/contact" className="btn-primary w-full text-center block">
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Before Your Session',
                desc: 'Complete intake forms detailing your health history, current symptoms, and goals. This helps Dr. Amara prepare for your session.',
              },
              {
                step: '02',
                title: 'During Your Session',
                desc: 'Spend 90 minutes (for initial consults) diving deep into your health story. Dr. Amara listens, asks questions, and begins forming a picture of root causes.',
              },
              {
                step: '03',
                title: 'After Your Session',
                desc: 'Receive personalized recommendations, protocol suggestions, and a clear plan for moving forward. Schedule follow-ups as needed.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl">
                <span className="text-5xl font-serif font-semibold text-[#C1876B]/30">{item.step}</span>
                <h3 className="text-xl font-serif font-semibold text-[#4A6741] mt-4 mb-4">{item.title}</h3>
                <p className="text-[#2D3748]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A6741] mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-[#2D3748]/80 mb-8">
            Book a free 20-minute Discovery Call to discuss which service is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Book Free Discovery Call
            </Link>
            <Link to="/programs" className="btn-secondary">
              View Programs & Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
