import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Star, ArrowRight, Play, CheckCircle, Leaf, Heart, Brain,
  Zap, Shield, Clock, MapPin, Phone, Award, ChevronDown, X
} from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: string) => void;
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const symptoms = [
  'Chronic gut issues & IBS', 'Hormonal imbalances', 'Chronic fatigue & burnout',
  'Autoimmune conditions', 'Anxiety & depression', 'Brain fog',
  'Weight & metabolic issues', 'Pre-diabetes & insulin resistance', 'Skin issues',
  'Sleep problems', 'Thyroid dysfunction', 'Food sensitivities',
];

const testimonials = [
  {
    quote: "Dr. Amara changed my life. I struggled with IBS for 10 years and saw countless doctors. She ran tests, created a protocol, and within 3 months my symptoms were 90% gone. I'm forever grateful.",
    name: "Jasmine L.",
    location: "Bronx, NY",
    condition: "Gut Health",
    stars: 5,
  },
  {
    quote: "I felt truly SEEN for the first time. She spent 90 minutes listening to my full story. She's brilliant, compassionate, and knows her stuff.",
    name: "Tiana M.",
    location: "Harlem, NY",
    condition: "Hormonal Imbalance",
    stars: 5,
  },
  {
    quote: "I was skeptical at first, but Dr. Amara's approach is backed by science and it WORKS. My hormones are balanced, my energy is back, and I feel like myself again.",
    name: "Keisha R.",
    location: "Brooklyn, NY",
    condition: "Fatigue & Hormones",
    stars: 5,
  },
  {
    quote: "She doesn't just give you a meal plan and send you off. She educates you, supports you, and genuinely cares about your healing.",
    name: "Maria G.",
    location: "Fordham, Bronx",
    condition: "Autoimmune",
    stars: 5,
  },
  {
    quote: "I've recommended her to everyone I know. She's the real deal. You will leave every session feeling empowered and hopeful.",
    name: "Carmen S.",
    location: "Queens, NY",
    condition: "Chronic Fatigue",
    stars: 5,
  },
];

const pressFeatures = [
  { name: 'Well+Good', detail: '"Wellness Practitioners to Follow" 2023' },
  { name: 'MindBodyGreen', detail: 'Contributing Author — Gut Health' },
  { name: 'The Wellness Wisdom Podcast', detail: 'Guest Expert, 2022' },
  { name: '94 Google Reviews', detail: '★★★★★ 4.9 Average Rating' },
];

const services = [
  {
    icon: <Heart size={28} />,
    title: 'Gut Health Programs',
    desc: 'Root-cause healing for IBS, bloating, leaky gut, SIBO, and digestive disorders.',
    color: '#C1876B',
    badge: 'Most Popular',
  },
  {
    icon: <Zap size={28} />,
    title: 'Hormone Reset',
    desc: 'Comprehensive hormone testing and protocols to restore balance naturally.',
    color: '#9CAF88',
    badge: null,
  },
  {
    icon: <Brain size={28} />,
    title: 'Burnout Recovery',
    desc: 'Stress, fatigue, anxiety, and mental health through integrative nutrition.',
    color: '#C9A86A',
    badge: null,
  },
  {
    icon: <Shield size={28} />,
    title: 'Autoimmune Support',
    desc: 'Anti-inflammatory protocols and functional testing for autoimmune conditions.',
    color: '#D4A5A5',
    badge: null,
  },
];

const stats = [
  { number: '300+', label: 'Clients Helped', icon: <Heart size={20} /> },
  { number: '4.9★', label: 'Google Rating', icon: <Star size={20} /> },
  { number: '94', label: 'Reviews', icon: <Award size={20} /> },
  { number: '4', label: 'Years in Practice', icon: <Clock size={20} /> },
];

export default function HomePage({ setActivePage }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <div className="absolute inset-0 z-0">
          <div ref={heroRef} className="absolute inset-0">
            <img
              src="/images/hero.jpg"
              alt="Radiant Roots Wellness Center"
              className="w-full h-full object-cover"
              style={{ minHeight: '120%', top: '-10%', position: 'absolute' }}
            />
          </div>
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to right, rgba(58,46,40,0.82) 0%, rgba(58,46,40,0.55) 55%, rgba(58,46,40,0.15) 100%)' }}
          />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 right-16 w-64 h-64 rounded-full opacity-10 z-10" style={{ background: '#9CAF88', filter: 'blur(60px)' }} />
        <div className="absolute bottom-20 right-32 w-48 h-48 rounded-full opacity-10 z-10" style={{ background: '#C1876B', filter: 'blur(50px)' }} />

        {/* Hero content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-semibold"
              style={{
                background: 'rgba(156, 175, 136, 0.2)',
                border: '1px solid rgba(156,175,136,0.5)',
                color: '#9CAF88',
                animation: 'fadeInUp 0.8s ease both',
                animationDelay: '0.1s',
              }}
            >
              <Leaf size={14} />
              Holistic & Integrative Health · Bronx, NY + Virtual
            </div>

            {/* Headline */}
            <h1
              className="font-serif font-bold text-white mb-6 leading-tight"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                animation: 'fadeInUp 0.8s ease both',
                animationDelay: '0.2s',
              }}
            >
              Heal From Within.{' '}
              <span style={{ color: '#C9A86A' }}>Reclaim Your Radiance.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{
                color: 'rgba(247,243,233,0.88)',
                animation: 'fadeInUp 0.8s ease both',
                animationDelay: '0.35s',
                maxWidth: '520px',
              }}
            >
              Dr. Amara Chen combines functional medicine, ancient healing traditions, and modern science
              to help you heal at the <em>root</em> — not just manage symptoms.
              Serving the Bronx & nationwide virtually.
            </p>

            {/* Credentials row */}
            <div
              className="flex flex-wrap gap-3 mb-10"
              style={{ animation: 'fadeInUp 0.8s ease both', animationDelay: '0.45s' }}
            >
              {['Doctorate in Functional Medicine', 'Certified Herbalist', 'Traditional Chinese Medicine'].map((c) => (
                <span key={c} className="credential-badge text-xs">
                  <CheckCircle size={13} style={{ color: '#9CAF88' }} />
                  {c}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 items-center"
              style={{ animation: 'fadeInUp 0.8s ease both', animationDelay: '0.55s' }}
            >
              <button onClick={() => setActivePage('contact')} className="btn-primary animate-pulse-gentle" style={{ fontSize: '16px', padding: '16px 36px' }}>
                Book Free Discovery Call
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-3 text-white font-semibold"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)' }}
                >
                  <Play size={16} fill="white" />
                </div>
                Watch My Story
              </button>
            </div>

            {/* Stats strip */}
            <div
              className="flex flex-wrap gap-6 mt-12"
              style={{ animation: 'fadeInUp 0.8s ease both', animationDelay: '0.7s' }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif font-bold text-2xl text-white">{stat.number}</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(247,243,233,0.65)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-white/60 uppercase">Scroll</span>
          <ChevronDown size={20} color="rgba(255,255,255,0.5)" className="animate-bounce" />
        </div>
      </section>

      {/* ── ARE YOU STRUGGLING? ── */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B', fontFamily: 'Nunito Sans, sans-serif' }}>
              You're Not Alone
            </p>
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A2E28' }}>
              Are You Struggling With…
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B5B52' }}>
              If you've been to doctor after doctor and still don't have answers, you're exactly who I help.
              Conventional medicine often misses the root cause.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {symptoms.map((symptom, i) => (
              <AnimatedSection key={symptom} delay={i * 60}>
                <div
                  className="flex items-center gap-3 rounded-2xl p-4 cursor-pointer card-hover"
                  style={{ background: 'white', border: '1px solid rgba(212,197,185,0.3)' }}
                >
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(193,135,107,0.12)' }}>
                    <CheckCircle size={16} style={{ color: '#C1876B' }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#3A2E28', fontFamily: 'Nunito Sans, sans-serif' }}>
                    {symptom}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300} className="text-center mt-12">
            <p className="text-lg font-semibold mb-6" style={{ color: '#4A6741', fontFamily: 'Lora, serif', fontStyle: 'italic' }}>
              "I help people heal at the ROOT — not just mask symptoms."
            </p>
            <button onClick={() => setActivePage('contact')} className="btn-secondary">
              Let's Find Your Root Cause
              <ArrowRight size={16} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MY APPROACH ── */}
      <section className="py-24 px-6 bg-sage-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="img-zoom rounded-3xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(58,46,40,0.15)' }}>
                  <img src="/images/about.jpg" alt="Dr. Amara Chen reviewing lab results" className="w-full h-96 object-cover" />
                </div>
                {/* Floating badge */}
                <div
                  className="floating-badge glass-card absolute -bottom-6 -right-6 p-5"
                  style={{ boxShadow: '0 10px 40px rgba(58,46,40,0.12)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#C1876B' }}>
                      <Star size={20} color="white" fill="white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg" style={{ color: '#3A2E28', fontFamily: 'Lora, serif' }}>4.9 Stars</div>
                      <div className="text-xs" style={{ color: '#6B5B52' }}>94 Google Reviews</div>
                    </div>
                  </div>
                </div>
                {/* Second badge */}
                <div
                  className="glass-card absolute -top-6 -left-6 p-4"
                  style={{ boxShadow: '0 10px 40px rgba(58,46,40,0.1)', animation: 'float 5s ease-in-out infinite 1s' }}
                >
                  <div className="text-center">
                    <div className="font-bold text-2xl" style={{ color: '#C1876B', fontFamily: 'Lora, serif' }}>300+</div>
                    <div className="text-xs font-semibold" style={{ color: '#6B5B52' }}>Clients Transformed</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
                My Philosophy
              </p>
              <h2 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#3A2E28' }}>
                Whole-Person Healing.<br />
                <em style={{ color: '#4A6741' }}>Not Just Symptom Management.</em>
              </h2>
              <p className="text-base mb-5 leading-relaxed" style={{ color: '#6B5B52' }}>
                I grew up witnessing two healing worlds — my grandmother's Traditional Chinese Medicine
                in Chinatown and my mother's ER nursing in Western medicine. Both saved lives. Neither
                talked to each other.
              </p>
              <p className="text-base mb-8 leading-relaxed" style={{ color: '#6B5B52' }}>
                I bridge those worlds. I combine functional medicine, nutrition, herbalism, Traditional
                Chinese Medicine, and modern science to help you understand <em>why</em> your body isn't
                functioning — then heal at the root.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Functional Medicine', 'Traditional Chinese Medicine',
                  'Integrative Nutrition', 'Herbal Medicine',
                  'Functional Lab Testing', 'Ayurveda',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(74,103,65,0.15)' }}>
                      <CheckCircle size={12} style={{ color: '#4A6741' }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: '#3A2E28' }}>{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => setActivePage('about')} className="btn-secondary">
                My Full Story
                <ArrowRight size={16} />
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
              How I Help You Heal
            </p>
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A2E28' }}>
              Services Built for Real Healing
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B5B52' }}>
              From comprehensive 1-on-1 programs to accessible group courses — there's a path for everyone.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="service-card h-full">
                  {service.badge && (
                    <div
                      className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: '#C1876B', color: 'white' }}
                    >
                      {service.badge}
                    </div>
                  )}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${service.color}18`, color: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: '#3A2E28' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B5B52' }}>{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <button onClick={() => setActivePage('services')} className="btn-primary">
              View All Services & Pricing
              <ArrowRight size={16} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHO I HELP ── */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #3D5535 0%, #4A6741 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#9CAF88' }}>
              Inclusive. Accessible. For You.
            </p>
            <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Wellness Is For Everyone
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(247,243,233,0.8)' }}>
              60% of my clients are Black and Latinx women who've been dismissed by the medical system.
              You deserve to be heard, believed, and healed.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                emoji: '🌿',
                title: 'You\'ve tried everything',
                desc: 'Multiple doctors, diets, supplements — nothing worked. You need root-cause answers, not another band-aid.',
              },
              {
                emoji: '💊',
                title: 'You want more than pills',
                desc: 'You want to understand WHY your body is struggling and heal it naturally through food, lifestyle, and targeted support.',
              },
              {
                emoji: '🙏',
                title: 'You want to be seen',
                desc: 'You\'re tired of being dismissed. You deserve a practitioner who listens, believes you, and builds a plan around YOUR life.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 150}>
                <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-serif font-semibold text-xl text-white mb-3">{item.title}</h3>
                  <p style={{ color: 'rgba(247,243,233,0.75)', lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
              {['Sliding Scale Available', 'Payment Plans', 'Virtual + In-Person', 'All Backgrounds Welcome'].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
                  style={{ background: 'rgba(156,175,136,0.2)', border: '1px solid rgba(156,175,136,0.4)', color: '#9CAF88' }}>
                  <CheckCircle size={14} />
                  {item}
                </span>
              ))}
            </div>
            <button onClick={() => setActivePage('contact')} className="btn-primary mt-6" style={{ background: '#C9A86A', borderColor: '#C9A86A' }}>
              Start Your Healing Journey
              <ArrowRight size={16} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
              Real Transformations
            </p>
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A2E28' }}>
              What My Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={22} fill="#C9A86A" color="#C9A86A" />)}
              <span className="font-bold ml-2" style={{ color: '#3A2E28' }}>4.9</span>
              <span style={{ color: '#6B5B52' }}>• 94 Google Reviews</span>
            </div>
          </AnimatedSection>

          {/* Featured testimonial */}
          <div className="relative mb-12 overflow-hidden">
            <div
              className="rounded-3xl p-10 md:p-14 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(193,135,107,0.08) 0%, rgba(156,175,136,0.08) 100%)', border: '1px solid rgba(193,135,107,0.15)' }}
            >
              <div className="text-6xl font-serif mb-6" style={{ color: '#C1876B', opacity: 0.3 }}>"</div>
              <p
                className="font-serif text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
                style={{ color: '#3A2E28', fontStyle: 'italic', transition: 'opacity 0.5s ease' }}
                key={currentTestimonial}
              >
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg" style={{ background: 'linear-gradient(135deg, #C1876B, #9CAF88)' }}>
                  {testimonials[currentTestimonial].name[0]}
                </div>
                <div className="text-left">
                  <div className="font-bold" style={{ color: '#3A2E28' }}>{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm" style={{ color: '#6B5B52' }}>{testimonials[currentTestimonial].location} · {testimonials[currentTestimonial].condition}</div>
                </div>
              </div>
              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === currentTestimonial ? '24px' : '8px',
                      height: '8px',
                      background: i === currentTestimonial ? '#C1876B' : 'rgba(193,135,107,0.3)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 100}>
                <div className="testimonial-card h-full">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#C9A86A" color="#C9A86A" />)}
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B5B52' }}>{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(135deg, #C1876B, #D4A5A5)' }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: '#3A2E28' }}>{t.name}</div>
                      <div className="text-xs" style={{ color: '#9CAF88' }}>{t.condition}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300} className="text-center mt-10">
            <button onClick={() => setActivePage('testimonials')} className="btn-ghost">
              Read All Success Stories
              <ArrowRight size={16} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRESS ── */}
      <section className="py-16 px-6" style={{ background: 'white', borderTop: '1px solid rgba(212,197,185,0.3)', borderBottom: '1px solid rgba(212,197,185,0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#9CAF88' }}>
              As Featured In
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {pressFeatures.map((press, i) => (
              <AnimatedSection key={press.name} delay={i * 100}>
                <div className="text-center">
                  <div className="font-serif font-bold text-xl mb-1" style={{ color: '#3A2E28' }}>{press.name}</div>
                  <div className="text-xs" style={{ color: '#9CAF88' }}>{press.detail}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELLNESS CENTER ── */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={100}>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
                The Space
              </p>
              <h2 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#3A2E28' }}>
                A Sanctuary for Your Healing
              </h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: '#6B5B52' }}>
                Located in the heart of the Bronx at 2156 Bathgate Avenue, our wellness center is designed
                to feel like a warm embrace — not a sterile clinic. Natural light, living plants, herbal
                teas, and a space where you can finally exhale.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  { icon: <MapPin size={18} />, text: '2156 Bathgate Ave, Bronx, NY 10457' },
                  { icon: <Phone size={18} />, text: '(646) 555-9047' },
                  { icon: <Clock size={18} />, text: 'Mon–Fri 10am–7pm · Sat Group Sessions · Virtual available nationwide' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="mt-0.5" style={{ color: '#9CAF88' }}>{item.icon}</div>
                    <span className="text-sm" style={{ color: '#6B5B52' }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setActivePage('contact')} className="btn-primary">
                  Visit Us
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => setActivePage('contact')} className="btn-ghost">
                  Book Virtual Session
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom rounded-3xl overflow-hidden col-span-2" style={{ height: '240px' }}>
                  <img src="/images/wellness-center.jpg" alt="Radiant Roots wellness center interior" className="w-full h-full object-cover" />
                </div>
                <div className="img-zoom rounded-3xl overflow-hidden" style={{ height: '180px' }}>
                  <img src="/images/herbs-flat.jpg" alt="Healing herbs and botanicals" className="w-full h-full object-cover" />
                </div>
                <div className="img-zoom rounded-3xl overflow-hidden" style={{ height: '180px' }}>
                  <img src="/images/consultation.jpg" alt="Dr. Amara consulting with client" className="w-full h-full object-cover" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FREE GUIDE CTA ── */}
      <section className="py-24 px-6 bg-terracotta-light">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="text-5xl mb-6">🌿</div>
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#3A2E28' }}>
              Free: "14-Day Anti-Inflammatory Reset"
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#6B5B52' }}>
              Discover which foods are fueling inflammation in your body — and what to eat instead.
              My most popular free resource, delivered straight to your inbox.
            </p>
            <FreeGuideForm />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONSULTATION IMAGE ── */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="img-zoom rounded-3xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(58,46,40,0.12)' }}>
                <img src="/images/consultation.jpg" alt="Compassionate consultation with Dr. Amara" className="w-full h-96 object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#3A2E28' }}>
                Your First Step:<br />
                <span style={{ color: '#C1876B' }}>A Free 20-Minute Discovery Call</span>
              </h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: '#6B5B52' }}>
                Not sure if functional medicine is right for you? Let's talk. On this free call, we'll
                discuss what you're dealing with, and I'll tell you honestly if I think I can help.
                No pressure. No sales pitch. Just clarity.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Share your health story in a judgment-free space',
                  'Learn how a root-cause approach differs from conventional care',
                  'Get Dr. Amara\'s honest assessment of how she can help',
                  'See if we\'re the right fit — no commitment required',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: '#9CAF88', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ color: '#6B5B52' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setActivePage('contact')} className="btn-primary animate-pulse-gentle" style={{ fontSize: '16px', padding: '16px 36px' }}>
                Book My Free Call Today
                <ArrowRight size={18} />
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="popup-overlay" onClick={() => setShowVideo(false)}>
          <div
            className="bg-black rounded-3xl overflow-hidden w-full max-w-3xl relative"
            onClick={(e) => e.stopPropagation()}
            style={{ aspectRatio: '16/9' }}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <X size={18} color="white" />
            </button>
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <div className="text-center text-white p-12">
                <div className="text-5xl mb-4">🎥</div>
                <p className="font-serif text-xl mb-2">Dr. Amara's Story</p>
                <p className="text-white/60 text-sm">Video introduction coming soon.</p>
                <p className="text-white/60 text-sm mt-1">Book a free discovery call to meet Dr. Amara directly.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FreeGuideForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="text-4xl">🎉</div>
        <p className="font-serif text-xl font-semibold" style={{ color: '#3A2E28' }}>Check your inbox!</p>
        <p style={{ color: '#6B5B52' }}>Your free guide is on its way. Welcome to the Radiant Roots community.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="newsletter-input flex-1"
        required
      />
      <button type="submit" className="btn-primary whitespace-nowrap">
        Get Free Guide
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
