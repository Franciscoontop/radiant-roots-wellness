import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      quote: "Dr. Amara changed my life. I struggled with IBS for 10 years and saw countless doctors. She ran tests, created a protocol, and within 3 months my symptoms were 90% gone. I'm forever grateful.",
      author: "Jasmine L.",
      condition: "IBS & Digestive Issues",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      quote: "I felt truly SEEN for the first time. She spent 90 minutes listening to my full story. She's brilliant, compassionate, and knows her stuff.",
      author: "Tiana M.",
      condition: "Hormone Imbalance",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      quote: "I was skeptical at first, but Dr. Amara approach is backed by science and it WORKS. My hormones are balanced, my energy is back, and I feel like myself again.",
      author: "Keisha R.",
      condition: "Chronic Fatigue & Hormones",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    },
    {
      quote: "She doesn't just give you a meal plan and send you off. She educates you, supports you, and genuinely cares about your healing.",
      author: "Maria G.",
      condition: "Weight & Metabolic Health",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop",
    },
    {
      quote: "I've recommended her to everyone I know. She's the real deal.",
      author: "Carmen S.",
      condition: "Autoimmune Condition",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
    },
    {
      quote: "After years of being told my symptoms were 'all in my head', Dr. Amara found the root cause. I finally have answers and a path forward.",
      author: "Nicole P.",
      condition: "Chronic Pain & Fatigue",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
    },
  ];

  const stats = [
    { number: '300+', label: 'Clients Healed' },
    { number: '94', label: 'Google Reviews' },
    { number: '4.9', label: 'Average Rating' },
    { number: '10+', label: 'Years Combined Experience' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-[#2D3748]/80 max-w-3xl mx-auto">
            Real transformations from real people. These are the stories of clients 
            who reclaimed their health with Dr. Amara guidance.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-serif font-semibold text-[#C1876B] mb-2">
                  {stat.number}
                </p>
                <p className="text-[#2D3748]/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#4A6741]">{testimonial.author}</p>
                    <p className="text-sm text-[#2D3748]/60">{testimonial.condition}</p>
                  </div>
                </div>
                <p className="text-[#2D3748]/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-[#C9A86A] mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-semibold text-[#4A6741] mb-4">
              Google Reviews
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex text-[#C9A86A]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-serif font-semibold text-[#4A6741]">4.9</span>
              <span className="text-[#2D3748]/60">(94 reviews)</span>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              Read All Google Reviews
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book a free 20-minute Discovery Call to start your healing journey.
          </p>
          <Link to="/contact" className="bg-white text-[#4A6741] px-8 py-4 rounded-full font-semibold hover:bg-[#F7F3E9] transition-colors inline-block">
            Book Free Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
