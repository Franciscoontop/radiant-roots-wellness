import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FAQPageProps {
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

const faqCategories = [
  {
    category: 'Getting Started',
    faqs: [
      {
        q: 'Do you take insurance?',
        a: "I'm a private-pay practice and do not accept insurance directly. However, I provide superbills — detailed invoices that many clients submit to their insurance for possible partial reimbursement. I recommend checking with your insurance provider about out-of-network benefits. I offer sliding scale pricing and payment plans to make care accessible regardless of insurance.",
      },
      {
        q: "What's the difference between functional medicine and a regular doctor?",
        a: "Conventional medicine is excellent for acute care and emergencies. Functional medicine asks WHY — investigating the root causes of chronic conditions through comprehensive history-taking and functional lab testing. Where a regular doctor might prescribe medication to manage symptoms, I investigate your gut microbiome, hormone levels, nutrient deficiencies, toxic exposures, stress patterns, and more — then create a personalized protocol to address the underlying cause.",
      },
      {
        q: 'How do I know if Dr. Amara is the right fit for me?',
        a: "That's exactly what the free 20-minute discovery call is for. We'll talk about what you're experiencing, your health history, and your goals — and Dr. Amara will give you her honest assessment of whether she can help. There's no pressure and no commitment. Many clients say the discovery call itself was already more insightful than years of doctor visits.",
      },
      {
        q: 'Do I have to come in person, or can I do everything virtually?',
        a: "Both options are fully available. Dr. Amara sees clients in-person at her Bronx wellness center (Mon, Tue, Thu 10am–7pm; Wed 9am–3pm) and virtually via secure video for clients anywhere in the US. Virtually all services — including lab review, protocol sessions, and ongoing support — are available via video. Lab testing can be arranged through mail-in kits.",
      },
    ],
  },
  {
    category: 'About the Programs',
    faqs: [
      {
        q: 'How long does it take to see results?',
        a: "Every person is different — healing timelines depend on how long you've had symptoms, the root cause, and how committed you are to the protocol. Many clients feel meaningful improvements within 4–8 weeks. More complex chronic conditions typically improve significantly within 3–6 months. Dr. Amara won't promise specific timelines, but she'll give you her honest assessment based on your situation.",
      },
      {
        q: "What's included in a 3-month program?",
        a: "The 3-Month Gut Healing Program ($2,400) includes: 6 private sessions (virtual or in-person), Comprehensive Stool Analysis (GI-MAP), personalized meal plan and grocery guide, custom supplement protocol, Voxer messaging support between sessions, and a PDF protocols and resources library. The 3-Month Hormone Reset Program ($2,800) includes similar support with the DUTCH hormone panel, cycle-syncing nutrition, and herbal protocols.",
      },
      {
        q: 'Do you offer payment plans?',
        a: "Yes. For programs ($1,000+), we offer payment plans of 3–6 monthly installments. A 50% deposit reserves your spot, with the remainder due before the first session or spread across installments. We also offer sliding scale pricing for select clients on a limited income-based basis — please mention this on your discovery call.",
      },
      {
        q: 'What is functional lab testing and do I need it?',
        a: "Functional lab tests go far beyond standard bloodwork. They assess your gut microbiome (GI-MAP), comprehensive hormone levels (DUTCH), food sensitivities, metabolic function (Organic Acids Test), and thyroid health. Not every client needs every test — Dr. Amara recommends testing based on your specific symptoms and goals. Many clients find these tests provide answers they've been seeking for years.",
      },
    ],
  },
  {
    category: 'The Approach',
    faqs: [
      {
        q: 'Are you anti-medication or anti-Western medicine?',
        a: "Absolutely not. I'm integrative, not anti-medicine. I collaborate with MDs, refer clients to urgent care or specialists when needed, and deeply respect the life-saving role of conventional medicine. My work complements — not replaces — conventional care. I help people heal chronic conditions that aren't well-served by the conventional medical model, often working alongside their primary care physicians.",
      },
      {
        q: 'Can you prescribe medication?',
        a: "No. I hold a Doctorate in Functional Medicine but I'm not an MD — I don't prescribe pharmaceutical medications. My tools are nutrition, lifestyle medicine, herbal protocols, targeted supplementation, and functional lab testing. I collaborate with and refer to MDs when pharmaceutical support is needed.",
      },
      {
        q: 'Do you work with eating disorders?',
        a: "No — eating disorders require specialized therapeutic support that falls outside my scope. I refer clients with active eating disorders to specialized therapists and treatment programs. I do work with people healing their relationship with food in the context of gut health, food sensitivities, or anti-inflammatory eating, as long as there is no active disordered eating.",
      },
      {
        q: 'What conditions do you help with most?',
        a: "My specialties are gut health (IBS, SIBO, leaky gut, bloating, constipation/diarrhea), hormonal imbalances (PCOS, irregular cycles, perimenopause, low testosterone), chronic fatigue, burnout and adrenal dysfunction, autoimmune conditions, metabolic health and pre-diabetes, anxiety and depression (through the gut-brain axis), food sensitivities, and skin conditions connected to gut and hormonal health.",
      },
    ],
  },
  {
    category: 'Booking & Logistics',
    faqs: [
      {
        q: 'How do I book an appointment?',
        a: "The easiest way is through our online scheduler at radiantrootswellness.com/book (Acuity Scheduling). You can also email dr.amara@radiantrootswellness.com or call (646) 555-9047. Instagram DM also works for initial questions. We recommend booking 1–3 weeks ahead for initial consultations.",
      },
      {
        q: "What's your cancellation policy?",
        a: "Cancel or reschedule at least 48 hours before your appointment for a full credit or reschedule. Cancellations with less than 48 hours notice forfeit the session fee (or 50% for programs). No-shows are charged the full session fee. We understand life happens — please communicate with us as early as possible.",
      },
      {
        q: 'Is the wellness center wheelchair accessible?',
        a: "Yes. The wellness center is on the ground floor with wide doorways and an accessible bathroom. We're located at 2156 Bathgate Avenue, Bronx, NY 10457. Street parking is available (metered and free residential). The nearest subway stops are the 4/D trains at Fordham Road (6-min walk) and B/D trains at Tremont Ave (8-min walk).",
      },
      {
        q: 'Do you work with teenagers or children?',
        a: "I work primarily with adults (18+). For teens (13–17), I require parent or guardian involvement and participation in the process. I don't work with young children and refer to pediatric specialists for that age group.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-base pr-4" style={{ color: '#3A2E28', fontFamily: 'Nunito Sans, sans-serif' }}>{q}</h3>
        <ChevronDown
          size={20}
          style={{
            color: '#C1876B',
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="pt-4 pb-2 leading-relaxed text-sm" style={{ color: '#6B5B52' }}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage({ setActivePage }: FAQPageProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #EDE5D8 0%, #F7F3E9 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
              Frequently Asked Questions
            </p>
            <h1 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#3A2E28' }}>
              Got Questions? We Have Answers.
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B5B52' }}>
              Everything you need to know about working with Dr. Amara and Radiant Roots Wellness.
              Still have questions? Book a free discovery call.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-24 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((cat, ci) => (
            <AnimatedSection key={cat.category} delay={ci * 100} className="mb-16">
              <h2 className="font-serif font-bold text-2xl mb-6" style={{ color: '#3A2E28', borderBottom: '2px solid rgba(193,135,107,0.2)', paddingBottom: '12px' }}>
                {cat.category}
              </h2>
              <div>
                {cat.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #4A6741, #3D5535)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Still Have Questions?
            </h2>
            <p className="mb-8 text-lg" style={{ color: 'rgba(247,243,233,0.85)' }}>
              The best way to get answers is a free 20-minute discovery call with Dr. Amara.
              No obligation, no sales pitch — just clarity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => setActivePage('contact')} className="btn-primary" style={{ background: '#C9A86A', borderColor: '#C9A86A', fontSize: '16px', padding: '16px 36px' }}>
                Book Free Discovery Call
                <ArrowRight size={18} />
              </button>
              <a href="mailto:dr.amara@radiantrootswellness.com" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
