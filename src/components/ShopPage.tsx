import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ShoppingCart, Check } from 'lucide-react';

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

const products = [
  {
    id: 1,
    name: '"Heal Your Gut" Self-Paced Course',
    desc: 'Dr. Amara\'s most comprehensive digital course. Learn the root causes of gut dysfunction, how to read your symptoms, what functional tests reveal, and how to build a personalized gut-healing protocol at home.',
    price: 197,
    originalPrice: null,
    emoji: '🎓',
    color: '#9CAF88',
    badge: 'Best Seller',
    includes: ['6 modules of video content', 'Gut health symptom tracker', 'Anti-inflammatory meal guide', 'Supplement reference guide', 'Private community access'],
  },
  {
    id: 2,
    name: '"Hormone Harmony" Digital Guide + Meal Plan',
    desc: 'A practical, science-backed guide to understanding your hormones — estrogen, progesterone, cortisol, thyroid, and insulin. Includes a 4-week hormone-balancing meal plan and lifestyle protocol.',
    price: 67,
    originalPrice: null,
    emoji: '🌙',
    color: '#D4A5A5',
    badge: null,
    includes: ['40-page digital guide', '4-week meal plan + recipes', 'Hormone-tracking journal', 'Supplement cheat sheet'],
  },
  {
    id: 3,
    name: '"14-Day Anti-Inflammatory Reset" Program',
    desc: 'Jump-start your healing in just two weeks. Day-by-day guide with meals, movement, stress reduction, and sleep optimization to dramatically reduce inflammation and boost energy.',
    price: 47,
    originalPrice: null,
    emoji: '🌿',
    color: '#C1876B',
    badge: 'Great Starter',
    includes: ['14-day meal plan', 'Shopping lists', 'Daily action steps', 'Recipe collection (30+ recipes)'],
  },
  {
    id: 4,
    name: 'Radiant Roots Collective Membership',
    desc: 'Join Dr. Amara\'s growing community of healers. Monthly live workshops, Q&A sessions, new resources every month, and a private community where healing happens together.',
    price: 47,
    priceLabel: '/month',
    originalPrice: null,
    emoji: '🌱',
    color: '#4A6741',
    badge: 'Community',
    includes: ['Monthly live workshop with Dr. Amara', 'Monthly Q&A session', 'Growing resource library', 'Private community forum', 'Early access to new courses'],
  },
];

function ProductCard({ product, onAddToCart, inCart }: { product: typeof products[0]; onAddToCart: () => void; inCart: boolean }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden h-full flex flex-col" style={{ boxShadow: '0 8px 40px rgba(58,46,40,0.08)', border: '1px solid rgba(212,197,185,0.2)' }}>
      <div className="h-2" style={{ background: product.color }} />
      <div className="p-8 flex flex-col flex-1">
        {product.badge && (
          <span className="text-xs font-bold px-3 py-1 rounded-full self-start mb-4" style={{ background: `${product.color}18`, color: product.color }}>
            {product.badge}
          </span>
        )}
        <div className="text-5xl mb-4">{product.emoji}</div>
        <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: '#3A2E28' }}>{product.name}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B5B52' }}>{product.desc}</p>

        <div className="space-y-2 mb-6 flex-1">
          {product.includes.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <Check size={14} style={{ color: product.color, flexShrink: 0, marginTop: '3px' }} />
              <span className="text-sm" style={{ color: '#6B5B52' }}>{item}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-5 mt-auto" style={{ borderColor: 'rgba(212,197,185,0.3)' }}>
          <div className="flex items-center justify-between">
            <div>
              <span className="price-tag">${product.price}</span>
              {(product as any).priceLabel && (
                <span className="text-sm ml-1" style={{ color: '#9CAF88' }}>{(product as any).priceLabel}</span>
              )}
            </div>
            <button
              onClick={onAddToCart}
              className="btn-primary flex items-center gap-2"
              style={{ padding: '10px 20px', fontSize: '13px', background: inCart ? '#4A6741' : product.color }}
            >
              {inCart ? <><Check size={14} /> Added!</> : <><ShoppingCart size={14} /> Get It</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [cart, setCart] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = (id: number) => {
    setCart((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const cartItems = products.filter(p => cart.includes(p.id));
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #EDE5D8 0%, #F7F3E9 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
              Digital Products
            </p>
            <h1 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#3A2E28' }}>
              The Radiant Roots Shop
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B5B52' }}>
              Dr. Amara's clinical expertise, distilled into accessible digital products.
              Start your healing journey from anywhere.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cart button */}
      {cart.length > 0 && (
        <div className="sticky top-20 z-40 px-6 py-3" style={{ background: 'rgba(74,103,65,0.95)', backdropFilter: 'blur(12px)' }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-white font-semibold text-sm">
              {cart.length} item{cart.length > 1 ? 's' : ''} in your cart · ${total}
            </span>
            <button onClick={() => setShowCart(true)} className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px', background: '#C9A86A', borderColor: '#C9A86A' }}>
              Checkout
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Products */}
      <section className="py-20 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 100}>
                <ProductCard
                  product={product}
                  onAddToCart={() => toggleCart(product.id)}
                  inCart={cart.includes(product.id)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cart modal */}
      {showCart && (
        <div className="popup-overlay" onClick={() => setShowCart(false)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(212,197,185,0.3)', color: '#6B5B52' }}
            >
              ✕
            </button>
            <h2 className="font-serif font-bold text-2xl mb-6" style={{ color: '#3A2E28' }}>Your Cart</h2>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(212,197,185,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-sm font-semibold" style={{ color: '#3A2E28' }}>{item.name}</span>
                  </div>
                  <span className="font-bold" style={{ color: '#C1876B' }}>${item.price}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold text-lg pt-4 border-t" style={{ borderColor: 'rgba(212,197,185,0.3)', color: '#3A2E28' }}>
                <span>Total</span>
                <span style={{ color: '#C1876B' }}>${total}</span>
              </div>
            </div>
            <button className="btn-primary w-full justify-center" style={{ fontSize: '15px' }}>
              Complete Purchase
              <ArrowRight size={16} />
            </button>
            <p className="text-xs text-center mt-3" style={{ color: '#9CAF88' }}>Secure checkout · Instant digital delivery</p>
          </div>
        </div>
      )}

      {/* Guarantee */}
      <section className="py-16 px-6" style={{ background: 'white', borderTop: '1px solid rgba(212,197,185,0.2)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { emoji: '🔒', title: 'Secure Checkout', desc: 'Encrypted payment processing. Your information is always safe.' },
              { emoji: '📱', title: 'Instant Access', desc: 'Digital products delivered immediately to your inbox after purchase.' },
              { emoji: '💙', title: 'Backed by a Doctorate', desc: 'Every product is created from Dr. Amara\'s clinical expertise and research.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div>
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#3A2E28' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: '#6B5B52' }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
