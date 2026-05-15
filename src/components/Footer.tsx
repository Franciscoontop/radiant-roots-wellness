import { Leaf, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  return (
    <footer style={{ background: '#2A2118', color: 'rgba(247,243,233,0.8)' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C1876B, #9CAF88)' }}>
                <Leaf size={20} color="white" />
              </div>
              <div>
                <div className="font-serif font-semibold text-white">Radiant Roots</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: '#9CAF88', letterSpacing: '0.1em' }}>Wellness</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(247,243,233,0.6)' }}>
              Functional medicine and integrative healing for the whole person —
              rooted in science, ancient wisdom, and deep compassion.
            </p>
            <div className="flex gap-3">
              {['IG', 'TK', 'FB'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                  style={{ background: 'rgba(247,243,233,0.1)', color: 'rgba(247,243,233,0.7)' }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Explore</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Dr. Amara', id: 'about' },
                { label: 'Services & Pricing', id: 'services' },
                { label: 'Success Stories', id: 'testimonials' },
                { label: 'Blog & Resources', id: 'blog' },
                { label: 'Shop', id: 'shop' },
                { label: 'FAQ', id: 'faq' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActivePage(link.id)}
                  className="text-sm text-left hover:text-white transition-colors"
                  style={{ color: 'rgba(247,243,233,0.6)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Services</h4>
            <div className="flex flex-col gap-3">
              {[
                'Initial Consultation', 'Gut Healing Program', 'Hormone Reset Program',
                '6-Month Transformation', 'Group Programs', 'Lab Testing', 'Digital Courses',
                'Membership Community',
              ].map((s) => (
                <button
                  key={s}
                  onClick={() => setActivePage('services')}
                  className="text-sm text-left hover:text-white transition-colors"
                  style={{ color: 'rgba(247,243,233,0.6)' }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contact</h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: <MapPin size={14} />, text: '2156 Bathgate Ave\nBronx, NY 10457' },
                { icon: <Phone size={14} />, text: '(646) 555-9047' },
                { icon: <Mail size={14} />, text: 'dr.amara@radiantrootswellness.com' },
                { icon: <Clock size={14} />, text: 'Mon–Fri: 10am–7pm\nSat: 10am–2pm (Groups)' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: '#9CAF88' }}>{item.icon}</span>
                  <span className="text-xs whitespace-pre-line leading-relaxed" style={{ color: 'rgba(247,243,233,0.6)' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA in footer */}
            <button
              onClick={() => setActivePage('contact')}
              className="mt-6 btn-primary w-full justify-center"
              style={{ padding: '12px 20px', fontSize: '13px' }}
            >
              Free Discovery Call
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Press strip */}
      <div style={{ borderTop: '1px solid rgba(247,243,233,0.08)', padding: '16px 24px' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
          {['Featured in Well+Good', 'MindBodyGreen Contributor', '94 Google Reviews ★★★★★', 'TikTok: @dr.amara.wellness'].map((item) => (
            <span key={item} className="text-xs" style={{ color: 'rgba(247,243,233,0.4)' }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(247,243,233,0.06)', padding: '16px 24px' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'rgba(247,243,233,0.35)' }}>
            © {new Date().getFullYear()} Radiant Roots Wellness · Dr. Amara Chen · All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(247,243,233,0.3)' }}>
            Not a substitute for medical advice. Radiant Roots Wellness is not an MD practice. Always consult your physician for medical emergencies.
          </p>
        </div>
      </div>
    </footer>
  );
}
