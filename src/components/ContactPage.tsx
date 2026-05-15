import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

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

const hours = [
  { day: 'Monday', hours: '10am – 7pm', type: 'Virtual + In-Person' },
  { day: 'Tuesday', hours: '10am – 7pm', type: 'Virtual + In-Person' },
  { day: 'Wednesday', hours: '9am – 3pm', type: 'In-Person Only' },
  { day: 'Thursday', hours: '10am – 7pm', type: 'Virtual + In-Person' },
  { day: 'Friday', hours: '10am – 4pm', type: 'Virtual Only' },
  { day: 'Saturday', hours: '10am – 2pm', type: 'Group Sessions Only' },
  { day: 'Sunday', hours: 'Closed', type: 'Rest & Content Day' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', concern: '', callType: 'discovery', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const concerns = [
    'Gut Health & Digestive Issues', 'Hormonal Imbalances', 'Chronic Fatigue & Burnout',
    'Autoimmune Conditions', 'Anxiety & Mental Health', 'Weight & Metabolic Health',
    'Pre-Diabetes / Blood Sugar', 'Thyroid Issues', 'General Wellness Optimization', 'Other',
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #EDE5D8 0%, #F7F3E9 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
              Your First Step
            </p>
            <h1 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#3A2E28' }}>
              Book Your Free Discovery Call
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: '#6B5B52' }}>
              A free 20-minute call where you'll share what you're dealing with, and Dr. Amara will
              tell you honestly whether she can help — and what that looks like. No pressure, no sales pitch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="text-center py-16 px-8">
                    <div className="text-6xl mb-6">🌿</div>
                    <h2 className="font-serif font-bold text-3xl mb-4" style={{ color: '#3A2E28' }}>
                      You're on Your Way!
                    </h2>
                    <p className="text-lg mb-4" style={{ color: '#6B5B52' }}>
                      Thank you for reaching out. Dr. Amara's team will confirm your discovery call
                      within 24 hours. Check your email for scheduling details.
                    </p>
                    <p className="text-base" style={{ color: '#9CAF88' }}>
                      In the meantime, follow us on Instagram @radiantrootswellness for daily health tips.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl p-8" style={{ boxShadow: '0 8px 40px rgba(58,46,40,0.08)' }}>
                    <h2 className="font-serif font-bold text-2xl mb-6" style={{ color: '#3A2E28' }}>
                      Request Your Discovery Call
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2" style={{ color: '#3A2E28' }}>Full Name *</label>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your full name"
                            className="newsletter-input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2" style={{ color: '#3A2E28' }}>Email Address *</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Your email address"
                            className="newsletter-input"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#3A2E28' }}>Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(Optional) Your phone number"
                          className="newsletter-input"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#3A2E28' }}>Primary Health Concern *</label>
                        <select
                          required
                          value={formData.concern}
                          onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                          className="newsletter-input"
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="">Select your primary concern</option>
                          {concerns.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#3A2E28' }}>Session Preference</label>
                        <div className="flex gap-4">
                          {[
                            { value: 'discovery', label: 'Free Discovery Call (20 min)' },
                            { value: 'virtual', label: 'Virtual Session' },
                            { value: 'inperson', label: 'In-Person (Bronx)' },
                          ].map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="callType"
                                value={opt.value}
                                checked={formData.callType === opt.value}
                                onChange={(e) => setFormData({ ...formData, callType: e.target.value })}
                                style={{ accentColor: '#C1876B' }}
                              />
                              <span className="text-sm" style={{ color: '#6B5B52' }}>{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#3A2E28' }}>Tell Me More About What You're Experiencing</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Share a bit about your health journey, how long you've been struggling, what you've tried, and what you're hoping to achieve..."
                          rows={5}
                          className="newsletter-input"
                          style={{ borderRadius: '16px', resize: 'vertical' }}
                        />
                      </div>

                      <div className="rounded-2xl p-4" style={{ background: 'rgba(156,175,136,0.1)', border: '1px solid rgba(156,175,136,0.2)' }}>
                        <p className="text-xs" style={{ color: '#4A6741', lineHeight: '1.7' }}>
                          <strong>🌿 Spring Renewal Special:</strong> $50 off your first 3-month program when you book in March or April.
                          Mention this when you speak with Dr. Amara. Sliding scale and payment plans available — please mention on call.
                        </p>
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center" style={{ fontSize: '16px', padding: '16px' }}>
                        Request My Free Discovery Call
                        <ArrowRight size={18} />
                      </button>

                      <p className="text-xs text-center" style={{ color: '#9CAF88' }}>
                        We typically respond within 24 hours. Your information is private and never shared.
                      </p>
                    </form>
                  </div>
                )}
              </AnimatedSection>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  {/* Contact info */}
                  <div className="bg-white rounded-3xl p-6" style={{ boxShadow: '0 4px 20px rgba(58,46,40,0.06)' }}>
                    <h3 className="font-serif font-semibold text-xl mb-5" style={{ color: '#3A2E28' }}>Get in Touch</h3>
                    <div className="space-y-4">
                      {[
                        { icon: <MapPin size={18} />, label: '2156 Bathgate Ave, Bronx, NY 10457', sub: 'Ground floor · Wheelchair accessible' },
                        { icon: <Phone size={18} />, label: '(646) 555-9047', sub: 'Call or text for questions' },
                        { icon: <Mail size={18} />, label: 'dr.amara@radiantrootswellness.com', sub: 'Response within 24 hours' },
                        { icon: <Mail size={18} />, label: '@radiantrootswellness', sub: 'Instagram — DM for quick questions' },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(193,135,107,0.12)', color: '#C1876B' }}>
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold" style={{ color: '#3A2E28' }}>{item.label}</p>
                            <p className="text-xs" style={{ color: '#9CAF88' }}>{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-white rounded-3xl p-6" style={{ boxShadow: '0 4px 20px rgba(58,46,40,0.06)' }}>
                    <h3 className="font-serif font-semibold text-xl mb-5 flex items-center gap-2" style={{ color: '#3A2E28' }}>
                      <Clock size={18} style={{ color: '#9CAF88' }} /> Hours
                    </h3>
                    <div className="space-y-3">
                      {hours.map((h) => (
                        <div key={h.day} className="flex justify-between items-center" style={{ borderBottom: '1px solid rgba(212,197,185,0.2)', paddingBottom: '8px' }}>
                          <span className="text-sm font-semibold" style={{ color: '#3A2E28' }}>{h.day}</span>
                          <div className="text-right">
                            <p className="text-sm" style={{ color: h.hours === 'Closed' ? '#D4C5B9' : '#6B5B52' }}>{h.hours}</p>
                            <p className="text-xs" style={{ color: '#9CAF88' }}>{h.type}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Getting there */}
                  <div className="bg-white rounded-3xl p-6" style={{ boxShadow: '0 4px 20px rgba(58,46,40,0.06)' }}>
                    <h3 className="font-serif font-semibold text-xl mb-4" style={{ color: '#3A2E28' }}>Getting Here</h3>
                    <div className="space-y-3">
                      {[
                        '🚇 4/D trains at Fordham Rd (6-min walk)',
                        '🚇 B/D trains at Tremont Ave (8-min walk)',
                        '🚌 Bx12, Bx40 buses nearby',
                        '🚗 Street parking available (metered + free)',
                        '♿ Wheelchair accessible · accessible bathroom',
                      ].map((item) => (
                        <p key={item} className="text-sm" style={{ color: '#6B5B52' }}>{item}</p>
                      ))}
                    </div>
                  </div>

                  {/* Cancellation */}
                  <div className="rounded-2xl p-5" style={{ background: 'rgba(193,135,107,0.08)', border: '1px solid rgba(193,135,107,0.15)' }}>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#C1876B' }}>📋 Cancellation Policy</h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#6B5B52' }}>
                      Cancel/reschedule 48+ hours before = full credit. Less than 48 hours = session fee applies.
                      No-shows = full fee. Initial consultations require payment at booking.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #4A6741, #3D5535)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
              Current Offers
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: '🌸', title: 'Spring Renewal', desc: '$50 off any 3-month program. March–April only.' },
              { emoji: '📞', title: 'Free Discovery Call', desc: '20 minutes with Dr. Amara, completely free for new clients.' },
              { emoji: '🤝', title: 'Refer a Friend', desc: 'Both you and your friend get $50 credit toward services.' },
              { emoji: '⚡', title: 'Early Bird', desc: 'Save $100 on group programs when you enroll 2+ weeks early.' },
            ].map((offer, i) => (
              <AnimatedSection key={offer.title} delay={i * 80}>
                <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="text-3xl mb-3">{offer.emoji}</div>
                  <h3 className="font-serif font-semibold text-lg text-white mb-2">{offer.title}</h3>
                  <p className="text-sm" style={{ color: 'rgba(247,243,233,0.75)' }}>{offer.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
