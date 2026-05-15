import { useState, useEffect } from 'react';
import { X, ArrowRight, Leaf } from 'lucide-react';

interface WelcomePopupProps {
  setActivePage: (page: string) => void;
}

export default function WelcomePopup({ setActivePage }: WelcomePopupProps) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (!visible) return null;

  return (
    <div className="popup-overlay" onClick={() => setVisible(false)}>
      <div className="popup-card" style={{ maxWidth: '480px' }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setVisible(false)}
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(212,197,185,0.3)', color: '#6B5B52' }}
        >
          <X size={16} />
        </button>

        <div className="text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: 'linear-gradient(135deg, #C1876B, #9CAF88)' }}
          >
            <Leaf size={28} color="white" />
          </div>

          {submitted ? (
            <>
              <h2 className="font-serif font-bold text-2xl mb-3" style={{ color: '#3A2E28' }}>Welcome to the Community! 🌿</h2>
              <p className="mb-4" style={{ color: '#6B5B52' }}>
                Your free guide is on its way. Check your inbox for the "14-Day Anti-Inflammatory Reset."
              </p>
              <button onClick={() => { setVisible(false); setActivePage('contact'); }} className="btn-primary w-full justify-center">
                Book Your Free Discovery Call
                <ArrowRight size={16} />
              </button>
            </>
          ) : (
            <>
              <div className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#C1876B' }}>
                Free Gift for You
              </div>
              <h2 className="font-serif font-bold text-2xl mb-3" style={{ color: '#3A2E28' }}>
                Download the Free<br />
                <span style={{ color: '#C1876B' }}>"14-Day Anti-Inflammatory Reset"</span>
              </h2>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#6B5B52' }}>
                Join 1,200+ subscribers getting Dr. Amara's weekly health wisdom — and get this
                free guide instantly. Day-by-day meals, movement, and healing strategies.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn-primary justify-center w-full">
                  Send Me the Free Guide
                  <ArrowRight size={16} />
                </button>
              </form>

              <p className="text-xs mt-4" style={{ color: '#9CAF88' }}>
                No spam. Unsubscribe anytime. No commitment required.
              </p>

              <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(212,197,185,0.4)' }}>
                <button
                  onClick={() => { setVisible(false); setActivePage('contact'); }}
                  className="text-sm font-semibold flex items-center gap-2 mx-auto"
                  style={{ color: '#C1876B' }}
                >
                  Or book a free 20-min discovery call
                  <ArrowRight size={14} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
