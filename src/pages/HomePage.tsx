import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const symptoms = [
    'Chronic fatigue & low energy',
    'Digestive issues (bloating, IBS, SIBO)',
    'Hormone imbalances (PCOS, thyroid, irregular periods)',
    'Autoimmune conditions',
    'Anxiety & depression',
    'Brain fog & poor concentration',
    'Skin issues (acne, eczema, rosacea)',
    'Weight struggles despite healthy habits',
    'Sleep problems',
    'Chronic pain & inflammation',
  ];

  const testimonials = [
    {
      quote: "Dr. Amara changed my life. I struggled with IBS for 10 years and saw countless doctors. She ran tests, created a protocol, and within 3 months my symptoms were 90% gone. I'm forever grateful.",
      author: "Jasmine L.",
      condition: "IBS & Digestive Issues",
    },
    {
      quote: "I felt truly SEEN for the first time. She spent 90 minutes listening to my full story. She's brilliant, compassionate, and knows her stuff.",
      author: "Tiana M.",
      condition: "Hormone Imbalance",
    },
    {
      quote: "I was skeptical at first, but Dr. Amara's approach is backed by science and it WORKS. My hormones are balanced, my energy is back, and I feel like myself again.",
      author: "Keisha R.",
      condition: "Chronic Fatigue & Hormones",
    },
  ];

  const blogPosts = [
    {
      title: "5 Signs Your Gut Health Is Affecting Your Hormones",
      excerpt: "Discover the surprising connection between your digestive system and hormone balance...",
      category: "Gut Health",
      image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&h=500&fit=crop",
      slug: "gut-hormones-connection",
    },
    {
      title: "Why Your Doctor's Tests Came Back 'Normal' But You Still Feel Sick",
      excerpt: "Understanding the difference between conventional and functional medicine testing...",
      category: "Functional Medicine",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
      slug: "normal-tests-still-sick",
    },
    {
      title: "The Truth About Detoxes: What Actually Works",
      excerpt: "Separating wellness myths from evidence-based approaches to supporting your body...",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop",
      slug: "truth-about-detoxes",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920&h=1080&fit=crop"
            alt="Warm wellness space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3E9]/95 via-[#F7F3E9]/80 to-transparent"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="floating-leaf top-20 left-10 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#9CAF88] fill-current">
            <path d="M50 0 C20 30 0 60 0 80 C0 95 20 100 50 100 C80 100 100 95 100 80 C100 60 80 30 50 0 Z" />
          </svg>
        </div>
        <div className="floating-leaf bottom-20 right-10 w-24 h-24" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#C1876B] fill-current">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="badge badge-popular">Now Accepting New Clients</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-[#4A6741] leading-tight mb-6 animate-fade-in-up">
              Heal from Within.<br />
              <span className="text-[#C1876B]">Reclaim Your Radiance.</span>
            </h1>
            <p className="text-xl text-[#2D3748]/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Functional medicine and integrative health coaching that addresses the root cause of your symptoms. 
              Because you deserve to feel vibrant, energized, and whole again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-primary text-center">
                Book Your Free Discovery Call
              </Link>
              <Link to="/health-quiz" className="btn-secondary text-center">
                Take the Free Health Quiz
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#D4C5B9] border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-[#4A6741]">
                  <strong>300+</strong> clients healed
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex text-[#C9A86A]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#4A6741]">
                  <strong>4.9 stars</strong> (94 reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Are You Struggling With?" Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A6741] mb-4">
              Are You Struggling With...
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              You're not alone. These are the most common concerns Dr. Amara helps clients overcome every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className="reveal card flex items-center space-x-3"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-[#F7F3E9] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C1876B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[#2D3748] font-medium">{symptom}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <p className="text-lg text-[#2D3748]/80 mb-6">
              If you're experiencing any of these, there's likely a root cause that hasn't been addressed yet.
            </p>
            <Link to="/contact" className="btn-primary">
              Let's Find Your Root Cause Together
            </Link>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A6741] mb-6">
                A Different Kind of Healthcare
              </h2>
              <p className="text-lg text-[#2D3748]/80 mb-6 leading-relaxed">
                Dr. Amara combines the best of Western science with ancient healing wisdom. 
                She doesn't just treat symptoms—she uncovers the root causes and creates 
                personalized protocols that help you heal from within.
              </p>
              <div className="space-y-4">
                {[
                  { title: '90-Minute Initial Consultations', desc: 'Because your story matters and deserves to be heard' },
                  { title: 'Comprehensive Lab Testing', desc: 'Advanced functional tests that conventional doctors rarely order' },
                  { title: 'Personalized Protocols', desc: 'Tailored to YOUR body, lifestyle, and goals—not cookie-cutter plans' },
                  { title: 'Ongoing Support', desc: 'You are not alone. Dr. Amara walks with you every step of the way' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-[#9CAF88] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A6741]">{item.title}</h4>
                      <p className="text-[#2D3748]/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about" className="text-[#C1876B] font-semibold hover:underline inline-flex items-center">
                  Learn More About Dr. Amara's Approach
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative reveal">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop"
                  alt="Dr. Amara Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-4xl font-serif font-semibold text-[#C1876B] mb-2">4+</p>
                <p className="text-[#2D3748]/80 text-sm">Years helping clients heal chronic conditions their doctors said were "incurable"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A6741] mb-4">
              Services That Transform Lives
            </h2>
            <p className="text-lg text-[#2D3748]/70 max-w-2xl mx-auto">
              From one-on-one consultations to group programs and digital courses, 
              there's a path to healing that fits your needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Individual Sessions',
                desc: '90-minute comprehensive consultations and follow-up sessions',
                icon: '🌿',
                link: '/services',
              },
              {
                title: 'Programs & Packages',
                desc: '3-month and 6-month transformative healing programs',
                icon: '🌸',
                link: '/programs',
                popular: true,
              },
              {
                title: 'Group Programs',
                desc: 'Affordable cohort-based programs with community support',
                icon: '👥',
                link: '/group-programs',
              },
              {
                title: 'Digital Products',
                desc: 'Self-paced courses, guides, and membership community',
                icon: '📚',
                link: '/shop',
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="reveal service-card group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <span className="absolute -top-3 -right-3 badge badge-popular">Most Popular</span>
                )}
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-[#4A6741] mb-2 group-hover:text-[#C1876B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#2D3748]/70 text-sm mb-4">{service.desc}</p>
                <span className="text-[#C1876B] font-medium text-sm inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#4A6741] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
              Real Stories, Real Transformations
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what clients say about working with Dr. Amara.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="reveal testimonial-card"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="text-[#2D3748]/80 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#4A6741]">{testimonial.author}</p>
                    <p className="text-sm text-[#2D3748]/60">{testimonial.condition}</p>
                  </div>
                  <div className="flex text-[#C9A86A]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link to="/testimonials" className="inline-flex items-center text-white/90 hover:text-white font-medium">
              Read More Success Stories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Press & Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-sm text-[#2D3748]/60 uppercase tracking-wider mb-4">As Seen In</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {['Well+Good', 'MindBodyGreen', 'The Wellness Wisdom Podcast'].map((brand, index) => (
                <div key={index} className="text-2xl font-serif text-[#4A6741]">
                  {brand}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal">
            {[
              { number: '300+', label: 'Clients Healed' },
              { number: '94', label: 'Google Reviews' },
              { number: '4.9', label: 'Average Rating' },
              { number: '8.4K', label: 'Instagram Followers' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-serif font-semibold text-[#C1876B] mb-2">
                  {stat.number}
                </p>
                <p className="text-[#2D3748]/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-gradient-to-br from-[#C1876B] to-[#4A6741] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                Not Sure Where to Start?
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Take our free 2-minute health quiz to discover what might be at the root of your symptoms. 
                You'll get personalized insights and recommendations based on your answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/health-quiz" className="bg-white text-[#4A6741] px-8 py-4 rounded-full font-semibold hover:bg-[#F7F3E9] transition-colors text-center">
                  Take the Free Quiz
                </Link>
                <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-center">
                  Book Discovery Call
                </Link>
              </div>
            </div>
            <div className="reveal hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
                <div className="space-y-4">
                  {[
                    'Answer 8-10 questions about your symptoms',
                    'Get instant insights about potential root causes',
                    'Receive personalized service recommendations',
                    'Join our email list for weekly health tips',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12 reveal">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A6741] mb-2">
                Latest from the Blog
              </h2>
              <p className="text-[#2D3748]/70">Evidence-based wellness insights from Dr. Amara</p>
            </div>
            <Link to="/blog" className="hidden md:inline-flex items-center text-[#C1876B] font-semibold hover:underline">
              View All Posts
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="reveal blog-card group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#9CAF88] font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-[#4A6741] mt-2 mb-3 group-hover:text-[#C1876B] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#2D3748]/70 text-sm">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden reveal">
            <Link to="/blog" className="btn-secondary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A6741] mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-[#2D3748]/70">
              Get quick answers to the most frequently asked questions.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Do you take insurance?',
                a: 'Dr. Amara is a private pay practice and doesn\'t directly accept insurance. However, she provides superbills that you can submit to your insurance for possible reimbursement. Many clients have received partial reimbursement.',
              },
              {
                q: 'What\'s the difference between functional medicine and regular medicine?',
                a: 'Conventional medicine focuses on treating symptoms, often with medications. Functional medicine looks for the root cause of your symptoms and addresses underlying imbalances through nutrition, lifestyle, and targeted supplements.',
              },
              {
                q: 'Do I have to come in person or can we do virtual?',
                a: 'Dr. Amara offers both! You can meet at her Bronx wellness center or work with her virtually from anywhere in the US. Most services work equally well both ways.',
              },
            ].map((faq, index) => (
              <div key={index} className="reveal card" style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-lg font-semibold text-[#4A6741] mb-2">{faq.q}</h3>
                <p className="text-[#2D3748]/70">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 reveal">
            <Link to="/faq" className="text-[#C1876B] font-semibold hover:underline inline-flex items-center">
              View All FAQs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A6741] mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-lg text-[#2D3748]/80 mb-8 max-w-2xl mx-auto">
              Book a free 20-minute Discovery Call with Dr. Amara. No pressure, no sales pitch—just 
              a chance to see if you're a good fit and get clarity on your next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Book Your Free Discovery Call
              </Link>
              <Link to="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#2D3748]/60">
              Spring Special: $50 off any 3-month program (March-April)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
