import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Clock, Video, MapPin, Star } from 'lucide-react';

interface ServicesPageProps {
  setActivePage: (page: string) => void;
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(25px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const consultations = [
  { name: '90-Min Comprehensive Health Assessment', desc: 'Virtual or in-person deep dive into your full health history, symptoms, lifestyle, and goals.', price: '$350', time: '90 min', popular: false },
  { name: 'New Client Gut Health Intensive', desc: '90-minute consultation plus a personalized gut-healing protocol tailored to your unique needs.', price: '$450', time: '90 min', popular: true },
  { name: 'Hormone Balance Assessment', desc: '90-minute consultation with lab review, focusing on hormonal imbalances, cycles, and thyroid health.', price: '$400', time: '90 min', popular: false },
];

const followUps = [
  { name: '60-Min Follow-Up Session', desc: 'Review progress, adjust protocols, and deepen your healing plan. Virtual or in-person.', price: '$200', time: '60 min' },
  { name: '30-Min Check-In Session', desc: 'Quick progress check, questions answered, minor protocol adjustments.', price: '$100', time: '30 min' },
];

const programs = [
  {
    name: '3-Month Gut Healing Program',
    desc: 'Most comprehensive gut transformation program. Includes 6 sessions, functional lab testing, personalized meal plans, supplement protocol, and Voxer support.',
    price: '$2,400',
    badge: 'Most Popular',
    color: '#C1876B',
    includes: [
      '6 private sessions (virtual or in-person)',
      'Comprehensive stool analysis (GI-MAP)',
      'Personalized meal plan + grocery guide',
      'Custom supplement protocol',
      'Voxer messaging support',
      'PDF protocols & resources library',
    ],
  },
  {
    name: '3-Month Hormone Reset Program',
    desc: 'Comprehensive hormone-balancing protocol with DUTCH hormone testing, personalized nutrition, and lifestyle interventions.',
    price: '$2,800',
    badge: null,
    color: '#9CAF88',
    includes: [
      '6 private sessions',
      'DUTCH comprehensive hormone panel',
      'Cycle syncing nutrition plan',
      'Custom supplement & herbal protocol',
      'Stress & sleep optimization plan',
      'Voxer support between sessions',
    ],
  },
  {
    name: '6-Month Whole-Body Transformation',
    desc: 'The complete healing experience. Addresses gut, hormones, metabolism, stress, and more with comprehensive labs and unlimited messaging support.',
    price: '$4,800',
    badge: 'Highest Impact',
    color: '#4A6741',
    includes: [
      '12 private sessions',
      'Comprehensive functional lab panel',
      'Custom meal plans & protocols',
      'Unlimited messaging support',
      'Full library of resources & guides',
      'Priority scheduling & access',
    ],
  },
];

const groupPrograms = [
  { name: '8-Week Gut Reset Group Program', price: '$697', desc: 'A cohort-based virtual program where you heal your gut alongside a supportive community.' },
  { name: '6-Week Stress & Burnout Recovery', price: '$497', desc: 'Functional and holistic strategies to heal adrenal fatigue, nervous system dysregulation, and chronic stress.' },
  { name: '4-Week Anti-Inflammatory Nutrition Bootcamp', price: '$397', desc: 'Learn which foods fuel inflammation and how to eat for healing, energy, and longevity.' },
];

const labTests = [
  { name: 'Comprehensive Stool Analysis (GI-MAP)', price: '$400', desc: 'The gold standard gut microbiome and pathogen test.' },
  { name: 'DUTCH Hormone Test', price: '$350', desc: 'Comprehensive hormone panel — sex hormones, adrenals, cortisol rhythms.' },
  { name: 'Food Sensitivity Testing (IgG)', price: '$300', desc: 'Identify hidden food triggers contributing to inflammation, gut issues, and more.' },
  { name: 'Organic Acids Test (OAT)', price: '$350', desc: 'Assess metabolic function, nutrient deficiencies, mitochondrial health.' },
  { name: 'Comprehensive Thyroid Panel', price: '$250', desc: 'Full thyroid evaluation beyond standard TSH — T3, T4, antibodies, and more.' },
];

const digitalProducts = [
  { name: '"Heal Your Gut" Self-Paced Course', price: '$197', desc: 'Everything you need to understand and begin healing your gut health at home.' },
  { name: '"Hormone Harmony" Digital Guide + Meal Plan', price: '$67', desc: 'A practical guide to understanding and balancing your hormones through food and lifestyle.' },
  { name: '"14-Day Anti-Inflammatory Reset" Program', price: '$47', desc: 'Jump-start your healing with this accessible two-week anti-inflammatory nutrition protocol.' },
  { name: 'Radiant Roots Collective Membership', price: '$47/mo', desc: 'Monthly community workshops, Q&As with Dr. Amara, and a growing resource library.' },
];

export default function ServicesPage({ setActivePage }: ServicesPageProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #EDE5D8 0%, #F7F3E9 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
              Your Healing Path
            </p>
            <h1 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#3A2E28' }}>
              Services & Pricing
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#6B5B52' }}>
              From 1-on-1 comprehensive programs to accessible group courses and digital products —
              there's a path for every stage of your healing journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full" style={{ background: 'rgba(193,135,107,0.1)', color: '#C1876B', border: '1px solid rgba(193,135,107,0.2)' }}>
                <Video size={14} /> Virtual + In-Person Available
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full" style={{ background: 'rgba(74,103,65,0.1)', color: '#4A6741', border: '1px solid rgba(74,103,65,0.2)' }}>
                <CheckCircle size={14} /> Sliding Scale Available
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full" style={{ background: 'rgba(156,175,136,0.15)', color: '#4A6741', border: '1px solid rgba(156,175,136,0.3)' }}>
                <Star size={14} /> Payment Plans Available
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Spring Promo Banner */}
      <div className="px-6 py-4" style={{ background: 'linear-gradient(90deg, #C1876B, #9CAF88)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white font-semibold text-sm">
            🌸 Spring Renewal Special: $50 off any 3-month program (March–April) · Free 20-min Discovery Call for new clients
          </p>
        </div>
      </div>

      {/* Initial Consultations */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif font-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#3A2E28' }}>
              Initial Consultations
            </h2>
            <p style={{ color: '#6B5B52' }}>Your first step. A comprehensive 90-minute session where Dr. Amara listens to your FULL story.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {consultations.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 100}>
                <div className="service-card h-full relative">
                  {s.popular && (
                    <div className="absolute -top-3 left-6 text-xs font-bold px-4 py-1 rounded-full text-white" style={{ background: '#C1876B' }}>
                      Most Booked
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={16} style={{ color: '#9CAF88' }} />
                    <span className="text-xs font-semibold" style={{ color: '#9CAF88' }}>{s.time}</span>
                    <span className="text-xs ml-1" style={{ color: '#D4C5B9' }}>·</span>
                    <span className="text-xs" style={{ color: '#9CAF88' }}>Virtual or In-Person</span>
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: '#3A2E28' }}>{s.name}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B5B52' }}>{s.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="price-tag">{s.price}</span>
                    <button onClick={() => setActivePage('contact')} className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
                      Book Now
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 px-6 bg-sage-light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif font-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#3A2E28' }}>
              Signature Programs
            </h2>
            <p style={{ color: '#6B5B52' }}>Comprehensive healing programs that address root causes through testing, protocols, and ongoing support.</p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 120}>
                <div className="bg-white rounded-3xl overflow-hidden h-full flex flex-col" style={{ boxShadow: '0 8px 40px rgba(58,46,40,0.08)', border: '1px solid rgba(212,197,185,0.2)' }}>
                  <div className="h-2" style={{ background: p.color }} />
                  <div className="p-8 flex flex-col flex-1">
                    {p.badge && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full self-start mb-4" style={{ background: `${p.color}18`, color: p.color }}>
                        {p.badge}
                      </span>
                    )}
                    <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: '#3A2E28' }}>{p.name}</h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B5B52' }}>{p.desc}</p>
                    <div className="space-y-3 mb-6 flex-1">
                      {p.includes.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle size={16} style={{ color: p.color, flexShrink: 0, marginTop: '2px' }} />
                          <span className="text-sm" style={{ color: '#6B5B52' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-6" style={{ borderColor: 'rgba(212,197,185,0.3)' }}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="price-tag">{p.price}</div>
                          <div className="text-xs mt-1" style={{ color: '#9CAF88' }}>Payment plans available</div>
                        </div>
                        <button onClick={() => setActivePage('contact')} className="btn-primary" style={{ padding: '12px 22px', fontSize: '13px', background: p.color }}>
                          Apply Now
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Follow-ups */}
      <section className="py-16 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <h2 className="font-serif font-bold mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#3A2E28' }}>
              Ongoing Support Sessions
            </h2>
            <p style={{ color: '#6B5B52' }}>For existing clients maintaining their healing progress.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {followUps.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 100}>
                <div className="service-card">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={16} style={{ color: '#9CAF88' }} />
                    <span className="text-xs font-semibold" style={{ color: '#9CAF88' }}>{s.time}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2" style={{ color: '#3A2E28' }}>{s.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#6B5B52' }}>{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="price-tag">{s.price}</span>
                    <button onClick={() => setActivePage('contact')} className="btn-ghost" style={{ padding: '8px 18px', fontSize: '13px' }}>
                      Book
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Group Programs */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #3D5535 0%, #4A6741 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif font-bold text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
              Group Programs
            </h2>
            <p style={{ color: 'rgba(247,243,233,0.75)' }}>Heal in community. More affordable, equally powerful. Virtual cohorts with live Q&A and group support.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {groupPrograms.map((g, i) => (
              <AnimatedSection key={g.name} delay={i * 100}>
                <div className="rounded-3xl p-8 h-full flex flex-col" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <h3 className="font-serif font-semibold text-xl text-white mb-3">{g.name}</h3>
                  <p className="text-sm flex-1 mb-6" style={{ color: 'rgba(247,243,233,0.75)', lineHeight: '1.7' }}>{g.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl" style={{ color: '#C9A86A', fontFamily: 'Lora, serif' }}>{g.price}</span>
                    <button onClick={() => setActivePage('contact')} className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px', background: '#C9A86A', borderColor: '#C9A86A' }}>
                      Enroll
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Testing */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif font-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#3A2E28' }}>
              Functional Lab Testing
            </h2>
            <p style={{ color: '#6B5B52' }}>Evidence-based testing that goes far beyond what your regular doctor orders. Add-on to any service.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labTests.map((lab, i) => (
              <AnimatedSection key={lab.name} delay={i * 80}>
                <div className="service-card h-full">
                  <div className="text-2xl mb-3">🔬</div>
                  <h3 className="font-semibold text-base mb-2" style={{ color: '#3A2E28', fontFamily: 'Nunito Sans, sans-serif' }}>{lab.name}</h3>
                  <p className="text-sm mb-4 flex-1" style={{ color: '#6B5B52' }}>{lab.desc}</p>
                  <span className="price-tag">{lab.price}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Products */}
      <section className="py-24 px-6 bg-terracotta-light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif font-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#3A2E28' }}>
              Digital Products & Courses
            </h2>
            <p style={{ color: '#6B5B52' }}>Start your healing journey from anywhere. Accessible, self-paced, and backed by Dr. Amara's clinical expertise.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalProducts.map((d, i) => (
              <AnimatedSection key={d.name} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col card-hover" style={{ border: '1px solid rgba(212,197,185,0.3)' }}>
                  <div className="text-3xl mb-3">📱</div>
                  <h3 className="font-serif font-semibold text-lg mb-2" style={{ color: '#3A2E28' }}>{d.name}</h3>
                  <p className="text-sm flex-1 mb-4" style={{ color: '#6B5B52' }}>{d.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="price-tag">{d.price}</span>
                    <button onClick={() => setActivePage('shop')} className="btn-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>
                      Get It
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty */}
      <section className="py-16 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <h2 className="font-serif font-bold mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#3A2E28' }}>
              Specialty Services
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'TCM Consultation + Herbal Protocol', price: '$250', emoji: '☯️' },
              { name: 'Personalized Supplement Protocol', price: '$150', emoji: '💊' },
              { name: 'Meal Planning & Nutrition Coaching (4 weeks)', price: '$600', emoji: '🥗' },
              { name: 'Corporate Wellness Workshop (1–2 hrs)', price: '$800–$1,500', emoji: '🏢' },
            ].map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 80}>
                <div className="service-card">
                  <div className="text-3xl mb-3">{s.emoji}</div>
                  <h3 className="font-semibold text-base mb-2" style={{ color: '#3A2E28' }}>{s.name}</h3>
                  <span className="price-tag">{s.price}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location info */}
      <section className="py-16 px-6 bg-sage-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MapPin size={24} />, title: 'In-Person', desc: '2156 Bathgate Ave, Bronx, NY\nMon, Tue, Thu 10am–7pm\nWed 9am–3pm' },
              { icon: <Video size={24} />, title: 'Virtual', desc: 'Nationwide via secure video\nMon–Fri flexible hours\nEvening slots available' },
              { icon: <CheckCircle size={24} />, title: 'Accessibility', desc: 'Ground floor wellness center\nWheelchair accessible\nSliding scale available' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(193,135,107,0.15)', color: '#C1876B' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#3A2E28' }}>{item.title}</h3>
                    <p className="text-sm whitespace-pre-line" style={{ color: '#6B5B52', lineHeight: '1.8' }}>{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #C1876B, #B07560)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Not Sure Where to Start?
            </h2>
            <p className="mb-8 text-lg" style={{ color: 'rgba(247,243,233,0.88)' }}>
              Book a free 20-minute discovery call. Dr. Amara will listen to your story and recommend
              the best path forward — with no obligation.
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
