import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge badge-popular mb-6 inline-block">Meet Dr. Amara</span>
              <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6 leading-tight">
                Your Partner in<br />
                <span className="text-[#C1876B]">Root-Cause Healing</span>
              </h1>
              <p className="text-lg text-[#2D3748]/80 mb-8 leading-relaxed">
                Doctorate in Functional Medicine. Certified in Integrative Nutrition, Herbalism, 
                and Traditional Chinese Medicine. But more importantly: someone who truly listens 
                and believes in your body's ability to heal.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Work With Dr. Amara
                </Link>
                <Link to="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop"
                  alt="Dr. Amara Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex text-[#C9A86A]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-2xl font-serif font-semibold text-[#4A6741]">4.9</p>
                <p className="text-sm text-[#2D3748]/70">Average Google Rating (94 reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-serif font-semibold text-[#4A6741] mb-8">My Story</h2>
            <div className="space-y-6 text-[#2D3748]/80 leading-relaxed">
              <p>
                I'm a second-generation Chinese-American who grew up watching my grandmother practice 
                Traditional Chinese Medicine in our apartment in Chinatown while my mom worked as an 
                ER nurse. I saw both worlds — Western medicine's crisis intervention and Eastern 
                medicine's preventative holistic approach. Both saved lives in different ways, but 
                neither talked to each other.
              </p>
              <p>
                I went to Cornell for pre-med, then got my Doctorate in Functional Medicine and 
                certifications in nutrition, herbalism, and health coaching. I worked at a fancy 
                Manhattan integrative clinic for 3 years, helping wealthy clients optimize their health. 
                The work was meaningful but I felt a pull to serve MY community — working-class people, 
                immigrants, people of color who are dealing with chronic illness, stress, burnout, and 
                diet-related diseases but can't afford $500 consultations.
              </p>
              <p>
                I opened Radiant Roots in the Bronx in 2020 (literally two months before COVID hit). 
                My mission is to make holistic, preventative health accessible and culturally relevant. 
                I combine functional medicine, nutrition, Traditional Chinese Medicine, Ayurveda, and 
                modern science. I help people heal at the ROOT, not just mask symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Proud Of */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            What I'm Most Proud Of
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '300+',
                label: 'Clients helped reverse chronic conditions their doctors said were "incurable"',
              },
              {
                number: '60%',
                label: 'Of my clients are Black and Latinx women who have been dismissed by the medical system',
              },
              {
                number: '100%',
                label: 'Commitment to accessible care with sliding scale pricing and payment plans',
              },
              {
                number: '$280K',
                label: 'Revenue while staying mission-driven and community-focused',
              },
              {
                number: '94',
                label: 'Google reviews with a 4.9-star average rating',
              },
              {
                number: '4+',
                label: 'Years serving the Bronx community through the pandemic and beyond',
              },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center">
                <p className="text-5xl font-serif font-semibold text-[#C1876B] mb-4">{stat.number}</p>
                <p className="text-[#2D3748]/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            Credentials & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Doctorate in Functional Medicine',
                desc: 'Advanced training in root-cause medicine',
                icon: '🎓',
              },
              {
                title: 'Certified Integrative Nutrition Health Coach',
                desc: 'Holistic approach to nutrition and lifestyle',
                icon: '🥗',
              },
              {
                title: 'Certified Herbalist',
                desc: 'Traditional plant-based healing modalities',
                icon: '🌿',
              },
              {
                title: 'Traditional Chinese Medicine Training',
                desc: 'Ancient wisdom meets modern science',
                icon: '☯️',
              },
            ].map((cred, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{cred.icon}</div>
                <h3 className="font-serif font-semibold text-[#4A6741] mb-2">{cred.title}</h3>
                <p className="text-sm text-[#2D3748]/70">{cred.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-semibold text-[#4A6741] text-center mb-8">
              As Seen In
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              {['Well+Good', 'MindBodyGreen', 'The Wellness Wisdom Podcast'].map((brand, index) => (
                <div key={index} className="text-2xl font-serif text-[#4A6741]">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-semibold mb-8">My Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Whole-Person Care',
                desc: 'I look at everything — stress, sleep, relationships, trauma, environment, gut health, hormones, nutrition, movement. True healing is holistic.',
              },
              {
                title: 'Culturally Competent',
                desc: 'I understand the specific health challenges facing communities of color. I do not give cookie-cutter advice. I meet people where they are.',
              },
              {
                title: 'Evidence-Based + Holistic',
                desc: 'I run functional lab tests AND use ancient healing modalities. Best of both worlds — science-backed and rooted in tradition.',
              },
            ].map((phil, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-xl font-serif font-semibold mb-4">{phil.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{phil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A6741] mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-[#2D3748]/80 mb-8">
            Book a free 20-minute Discovery Call to see if we're a good fit. 
            No pressure, no sales pitch — just honest conversation about your health goals.
          </p>
          <Link to="/contact" className="btn-primary">
            Book Your Free Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
