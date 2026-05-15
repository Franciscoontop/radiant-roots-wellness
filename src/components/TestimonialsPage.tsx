import { useInView } from 'react-intersection-observer';
import { Star, ArrowRight, Quote } from 'lucide-react';

interface TestimonialsPageProps {
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

const testimonials = [
  {
    quote: "Dr. Amara changed my life. I struggled with IBS for 10 years and saw countless doctors. She ran tests, created a protocol, and within 3 months my symptoms were 90% gone. I'm forever grateful.",
    name: "Jasmine L.",
    location: "Bronx, NY",
    condition: "Gut Health & IBS",
    stars: 5,
    source: "Google Review",
  },
  {
    quote: "I felt truly SEEN for the first time. She spent 90 minutes listening to my full story. She's brilliant, compassionate, and knows her stuff. No doctor has EVER done that.",
    name: "Tiana M.",
    location: "Harlem, NY",
    condition: "Hormonal Imbalance",
    stars: 5,
    source: "Google Review",
  },
  {
    quote: "I was skeptical at first, but Dr. Amara's approach is backed by science and it WORKS. My hormones are balanced, my energy is back, and I feel like myself again after years of suffering.",
    name: "Keisha R.",
    location: "Brooklyn, NY",
    condition: "Fatigue & Hormones",
    stars: 5,
    source: "Google Review",
  },
  {
    quote: "She doesn't just give you a meal plan and send you off. She educates you, supports you, and genuinely cares about your healing. This is the most supported I've ever felt in a healthcare setting.",
    name: "Maria G.",
    location: "Fordham, Bronx",
    condition: "Autoimmune & Nutrition",
    stars: 5,
    source: "Google Review",
  },
  {
    quote: "I've recommended her to everyone I know. She's the real deal. You will leave every session feeling empowered, hopeful, and like someone actually believes in your body's ability to heal.",
    name: "Carmen S.",
    location: "Queens, NY",
    condition: "Chronic Fatigue",
    stars: 5,
    source: "Google Review",
  },
  {
    quote: "I understand my body for the first time in my life. I've struggled with anxiety and gut issues for years. Dr. Amara connected the dots in a way no one ever had. I feel like myself again.",
    name: "DeShawn T.",
    location: "Morris Heights, Bronx",
    condition: "Anxiety & Gut Health",
    stars: 5,
    source: "Client Testimonial",
  },
  {
    quote: "She helped me reverse pre-diabetes through food and lifestyle changes alone. My A1C dropped from 6.1 to 5.4 in 4 months. My MD was shocked. I couldn't believe it.",
    name: "Rosa M.",
    location: "University Heights, Bronx",
    condition: "Pre-Diabetes & Metabolic Health",
    stars: 5,
    source: "Client Testimonial",
  },
  {
    quote: "I had been dismissed by so many doctors. Dr. Amara ran tests they never ran and found the root cause. I'm not just managing my autoimmune condition — I'm actually healing.",
    name: "Alicia B.",
    location: "Washington Heights, NY",
    condition: "Autoimmune",
    stars: 5,
    source: "Client Testimonial",
  },
  {
    quote: "This is the best investment I've ever made in myself. I was skeptical about holistic medicine but Dr. Amara's approach is scientific. She changed my relationship with food and my body.",
    name: "Michelle W.",
    location: "Virtual Client — Chicago, IL",
    condition: "Nutrition & Metabolic Health",
    stars: 5,
    source: "Google Review",
  },
];

const transformations = [
  {
    title: "From IBS to Freedom",
    summary: "10 years of IBS. Countless doctors. Dozens of diets. Nothing worked until she came to Dr. Amara.",
    result: "90% reduction in IBS symptoms in 3 months through GI-MAP testing and targeted gut protocol.",
    icon: "🌱",
    color: "#9CAF88",
  },
  {
    title: "Pre-Diabetes Reversed",
    summary: "Her A1C had been creeping up for years. She was told medication was inevitable.",
    result: "A1C dropped from 6.1 to 5.4 in 4 months through anti-inflammatory nutrition and targeted lifestyle changes.",
    icon: "💪",
    color: "#C1876B",
  },
  {
    title: "Hormone Harmony Restored",
    summary: "Irregular cycles, crushing fatigue, and mood swings for 5 years. Multiple normal bloodwork reports.",
    result: "DUTCH hormone test revealed underlying cortisol dysregulation. 3-month reset restored energy and cycles.",
    icon: "⚡",
    color: "#C9A86A",
  },
  {
    title: "Anxiety Through the Gut-Brain Axis",
    summary: "Anxiety and depression that weren't responding to therapy alone — connected to poor gut health.",
    result: "Targeted gut healing protocol improved mental health symptoms by 70% alongside therapy.",
    icon: "🧠",
    color: "#D4A5A5",
  },
];

export default function TestimonialsPage({ setActivePage }: TestimonialsPageProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #EDE5D8 0%, #F7F3E9 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
              Real Results. Real People.
            </p>
            <h1 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#3A2E28' }}>
              Stories of Transformation
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={28} fill="#C9A86A" color="#C9A86A" />)}
              <span className="font-bold text-2xl ml-2" style={{ color: '#3A2E28' }}>4.9</span>
            </div>
            <p className="text-lg" style={{ color: '#6B5B52' }}>94 Google Reviews · 300+ Clients Helped</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Transformation stories */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A2E28' }}>
              Client Transformations
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: '#6B5B52' }}>
              These aren't just testimonials — these are lives changed through root-cause healing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {transformations.map((t, i) => (
              <AnimatedSection key={t.title} delay={i * 120}>
                <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(58,46,40,0.08)' }}>
                  <div className="h-2" style={{ background: t.color }} />
                  <div className="p-8">
                    <div className="text-4xl mb-4">{t.icon}</div>
                    <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: '#3A2E28' }}>{t.title}</h3>
                    <p className="text-base mb-4" style={{ color: '#6B5B52', lineHeight: '1.7' }}>{t.summary}</p>
                    <div className="rounded-2xl p-4" style={{ background: `${t.color}15`, border: `1px solid ${t.color}30` }}>
                      <p className="text-sm font-semibold" style={{ color: t.color }}>✓ Result: {t.result}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All testimonials */}
      <section className="py-24 px-6 bg-sage-light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A2E28' }}>
              What Clients Are Saying
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 80}>
                <div className="testimonial-card h-full flex flex-col">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={15} fill="#C9A86A" color="#C9A86A" />)}
                    <span className="ml-2 text-xs font-semibold" style={{ color: '#9CAF88' }}>{t.source}</span>
                  </div>
                  <Quote size={24} style={{ color: '#C1876B', opacity: 0.3, marginBottom: '8px' }} />
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#6B5B52' }}>
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base"
                      style={{ background: 'linear-gradient(135deg, #C1876B, #D4A5A5)' }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: '#3A2E28' }}>{t.name}</div>
                      <div className="text-xs" style={{ color: '#9CAF88' }}>{t.location}</div>
                      <div className="text-xs font-semibold" style={{ color: '#C1876B' }}>{t.condition}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Big quote */}
      <section className="py-20 px-6" style={{ background: '#4A6741' }}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="text-6xl font-serif mb-6" style={{ color: 'rgba(201,168,106,0.3)' }}>"</div>
            <p className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-6" style={{ fontStyle: 'italic' }}>
              Girl, you NEED to see Dr. Amara. She actually listened to me for 90 minutes, ran tests my regular doctor never did,
              and figured out what was wrong with my gut. I feel better than I have in years. She's not like those Instagram wellness
              people — she's the real deal. She's changing my life.
            </p>
            <p className="font-semibold" style={{ color: '#9CAF88' }}>— What our clients say to their friends</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#3A2E28' }}>
              Ready to Write Your Own Story?
            </h2>
            <p className="text-lg mb-8" style={{ color: '#6B5B52' }}>
              Book a free discovery call and take the first step toward healing.
            </p>
            <button onClick={() => setActivePage('contact')} className="btn-primary animate-pulse-gentle" style={{ fontSize: '16px', padding: '16px 40px' }}>
              Book My Free Discovery Call
              <ArrowRight size={18} />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
