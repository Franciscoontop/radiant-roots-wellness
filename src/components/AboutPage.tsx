import { useInView } from 'react-intersection-observer';
import { CheckCircle, Award, BookOpen, Heart, ArrowRight } from 'lucide-react';

interface AboutPageProps {
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

const credentials = [
  { icon: '🎓', title: 'Doctorate in Functional Medicine', subtitle: 'Comprehensive clinical training in root-cause medicine' },
  { icon: '🌿', title: 'Certified Integrative Nutrition Health Coach', subtitle: 'IIN — holistic nutrition and lifestyle medicine' },
  { icon: '🌱', title: 'Certified Herbalist', subtitle: 'Western herbalism and botanical medicine' },
  { icon: '☯️', title: 'Traditional Chinese Medicine Training', subtitle: 'Including acupressure and herbal formulation' },
  { icon: '🔬', title: 'Functional Lab Testing Expert', subtitle: 'GI-MAP, DUTCH hormone panel, OAT, food sensitivity testing' },
  { icon: '🧬', title: 'Cornell University Pre-Med', subtitle: 'Bachelor of Science, Human Biology' },
];

const milestones = [
  { year: '2020', title: 'Opened Radiant Roots Wellness', desc: 'Launched the wellness center in the Bronx, two months before COVID hit. Pivoted immediately to virtual care.' },
  { year: '2022', title: 'Featured on Wellness Wisdom Podcast', desc: 'Shared integrative approaches to gut health and hormone balance with thousands of listeners nationwide.' },
  { year: '2023', title: 'Well+Good Recognition', desc: 'Named one of the "Wellness Practitioners to Follow" — bringing visibility to accessible, culturally competent care.' },
  { year: '2024', title: '300+ Clients Transformed', desc: 'Helped over 300 clients reverse chronic conditions their doctors said were unmanageable or required lifelong medication.' },
];

const values = [
  {
    icon: <Heart size={28} />,
    title: 'Radical Inclusivity',
    desc: 'Wellness is not a luxury. I serve ALL bodies, ALL backgrounds. Sliding scale pricing, payment plans, and culturally competent care that meets you where you are.',
    color: '#D4A5A5',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Evidence-Based & Holistic',
    desc: "I'm not an Instagram wellness influencer. I have a doctorate, run real functional lab tests, and combine modern science with ancient healing traditions.",
    color: '#9CAF88',
  },
  {
    icon: <CheckCircle size={28} />,
    title: 'Root-Cause Healing',
    desc: 'I don\'t mask your symptoms. I look at your gut, hormones, stress, sleep, trauma, nutrition, environment — everything. True healing is holistic.',
    color: '#C1876B',
  },
  {
    icon: <Award size={28} />,
    title: 'Community First',
    desc: 'I left a lucrative Manhattan clinic to serve my community. Working-class people, immigrants, people of color deserve access to high-quality holistic care.',
    color: '#C9A86A',
  },
];

export default function AboutPage({ setActivePage }: AboutPageProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #EDE5D8 0%, #F7F3E9 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
                My Story
              </p>
              <h1 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', color: '#3A2E28' }}>
                Meet Dr. Amara Chen
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#6B5B52' }}>
                I grew up watching my grandmother practice Traditional Chinese Medicine in our Chinatown
                apartment while my mom worked night shifts as an ER nurse. Two worlds. Both healing.
                Neither talking to each other.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#6B5B52' }}>
                I spent years in elite Manhattan integrative clinics helping wealthy clients optimize their
                health. The work was meaningful — but I felt a pull to serve MY community. Working-class
                people, immigrants, women of color who were dealing with chronic illness, dismissal, and
                barriers to care. That pull brought me to the Bronx.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setActivePage('contact')} className="btn-primary">
                  Work With Dr. Amara
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => setActivePage('services')} className="btn-ghost">
                  View Services
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="img-zoom rounded-3xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(58,46,40,0.15)' }}>
                  <img src="/images/about.jpg" alt="Dr. Amara Chen" className="w-full h-[500px] object-cover" />
                </div>
                <div
                  className="glass-card absolute -bottom-6 -left-6 p-5"
                  style={{ animation: 'float 5s ease-in-out infinite', boxShadow: '0 10px 40px rgba(58,46,40,0.1)' }}
                >
                  <div className="text-center">
                    <div className="font-bold text-2xl" style={{ color: '#C1876B', fontFamily: 'Lora, serif' }}>4 Years</div>
                    <div className="text-sm font-semibold" style={{ color: '#6B5B52' }}>of Transforming Lives</div>
                  </div>
                </div>
                <div
                  className="glass-card absolute -top-6 -right-6 p-5"
                  style={{ animation: 'float 4s ease-in-out infinite 1.5s', boxShadow: '0 10px 40px rgba(58,46,40,0.1)' }}
                >
                  <div className="text-center">
                    <div className="font-bold text-2xl" style={{ color: '#4A6741', fontFamily: 'Lora, serif' }}>300+</div>
                    <div className="text-sm font-semibold" style={{ color: '#6B5B52' }}>Clients Healed</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6" style={{ background: '#4A6741' }}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="text-6xl font-serif mb-6" style={{ color: 'rgba(201,168,106,0.4)' }}>"</div>
            <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-6" style={{ fontStyle: 'italic' }}>
              I help people heal at the ROOT — not just manage symptoms.
              Wellness isn't just for rich white people in Tribeca. It's for US.
            </p>
            <p className="font-semibold" style={{ color: '#9CAF88' }}>— Dr. Amara Chen, Founder</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A2E28' }}>
              What I Stand For
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: '#6B5B52' }}>
              These aren't just values on a wall. They're the reason I left a lucrative Manhattan practice
              to serve the Bronx.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 120}>
                <div className="service-card h-full">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${value.color}20`, color: value.color }}
                  >
                    {value.icon}
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: '#3A2E28' }}>{value.title}</h3>
                  <p style={{ color: '#6B5B52', lineHeight: '1.7' }}>{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 px-6 bg-sage-light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#4A6741' }}>
              Training & Credentials
            </p>
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A2E28' }}>
              Real Training. Real Results.
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: '#6B5B52' }}>
              I'm not an Instagram wellness influencer. I have a doctorate, certifications, and years of
              clinical experience backing every protocol I create.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((cred, i) => (
              <AnimatedSection key={cred.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: '1px solid rgba(212,197,185,0.3)' }}>
                  <div className="text-3xl mb-3">{cred.icon}</div>
                  <h3 className="font-serif font-semibold text-lg mb-2" style={{ color: '#3A2E28' }}>{cred.title}</h3>
                  <p className="text-sm" style={{ color: '#6B5B52' }}>{cred.subtitle}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A2E28' }}>
              The Journey
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #C1876B, #9CAF88)' }} />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 150}>
                  <div className="flex gap-8">
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white z-10 relative"
                        style={{ background: 'linear-gradient(135deg, #C1876B, #9CAF88)' }}
                      >
                        {m.year.slice(2)}
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 flex-1" style={{ border: '1px solid rgba(212,197,185,0.3)', boxShadow: '0 4px 20px rgba(58,46,40,0.06)' }}>
                      <div className="text-sm font-bold mb-1" style={{ color: '#C1876B' }}>{m.year}</div>
                      <h3 className="font-serif font-semibold text-xl mb-2" style={{ color: '#3A2E28' }}>{m.title}</h3>
                      <p style={{ color: '#6B5B52', lineHeight: '1.7' }}>{m.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #C1876B, #B07560)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(247,243,233,0.88)' }}>
              Book a free 20-minute discovery call. We'll talk about what you're dealing with,
              and Dr. Amara will tell you honestly if she can help.
            </p>
            <button onClick={() => setActivePage('contact')} className="btn-primary" style={{ background: 'white', color: '#C1876B', fontSize: '16px', padding: '16px 40px' }}>
              Book Free Discovery Call
              <ArrowRight size={18} />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
