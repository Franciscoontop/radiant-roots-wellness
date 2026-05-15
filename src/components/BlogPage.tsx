import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock, Tag } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface BlogPageProps {
  setActivePage?: (page: string) => void;
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

const featured = {
  title: "The Gut-Brain Connection: Why Your Anxiety Might Start in Your Gut",
  excerpt: "If you've ever had 'butterflies' before a big event, or felt nauseated when stressed, you've felt the gut-brain axis in action. But this connection goes far deeper than most people realize — and for millions dealing with anxiety, depression, and brain fog, the gut may be where healing begins.",
  category: "Gut Health",
  readTime: "8 min read",
  date: "March 15, 2024",
  color: "#9CAF88",
  emoji: "🧠",
};

const articles = [
  {
    title: "What Your Period Is Trying to Tell You: A Functional Medicine Perspective",
    excerpt: "Your menstrual cycle is a vital sign. Painful, irregular, or absent periods aren't just inconvenient — they're your body's communication system signaling hormonal imbalances that can be addressed at the root.",
    category: "Hormones",
    readTime: "6 min read",
    date: "March 8, 2024",
    color: "#D4A5A5",
    emoji: "🌙",
  },
  {
    title: "5 Wellness Myths I'm Tired of Debunking (And the Truth Behind Them)",
    excerpt: "As a functional medicine practitioner with a social media presence, I see dangerous health misinformation every day. Let's set the record straight on detoxes, alkaline diets, adrenal fatigue treatments, and more.",
    category: "Myth-Busting",
    readTime: "7 min read",
    date: "February 28, 2024",
    color: "#C1876B",
    emoji: "🚫",
  },
  {
    title: "The Anti-Inflammatory Grocery List: What to Buy and Why",
    excerpt: "Anti-inflammatory eating doesn't have to mean expensive or complicated. Here's what to prioritize at the grocery store — and the simple swaps that make the biggest difference for chronic inflammation.",
    category: "Nutrition",
    readTime: "5 min read",
    date: "February 20, 2024",
    color: "#C9A86A",
    emoji: "🥦",
  },
  {
    title: "Understanding Leaky Gut: Is It Real, and Do You Have It?",
    excerpt: "Leaky gut (intestinal permeability) has become a buzzword, but the science behind it is real and significant. Here's what functional medicine actually says about leaky gut, how to test for it, and what to do.",
    category: "Gut Health",
    readTime: "9 min read",
    date: "February 12, 2024",
    color: "#9CAF88",
    emoji: "🔬",
  },
  {
    title: "Why Black and Latinx Women Are Disproportionately Dismissed by Healthcare — and What We Can Do",
    excerpt: "Medical gaslighting is a systemic problem. Studies show that women — especially women of color — have their symptoms dismissed, undertreated, and misdiagnosed at significantly higher rates. Here's the data, and here's what you can do.",
    category: "Health Equity",
    readTime: "10 min read",
    date: "February 5, 2024",
    color: "#C1876B",
    emoji: "✊",
  },
  {
    title: "Cortisol, Burnout, and Your Hormones: The Stress-Health Connection",
    excerpt: "Chronic stress doesn't just make you feel terrible — it physically alters your hormone levels, gut function, immune system, and metabolism. Here's what happens in your body when stress becomes chronic, and how to heal.",
    category: "Stress & Burnout",
    readTime: "8 min read",
    date: "January 28, 2024",
    color: "#D4A5A5",
    emoji: "😮‍💨",
  },
];

const categories = ['All', 'Gut Health', 'Hormones', 'Nutrition', 'Myth-Busting', 'Health Equity', 'Stress & Burnout', 'Recipes'];

export default function BlogPage(_props: BlogPageProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #EDE5D8 0%, #F7F3E9 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C1876B' }}>
              Knowledge is Healing
            </p>
            <h1 className="font-serif font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#3A2E28' }}>
              The Radiant Roots Blog
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: '#6B5B52' }}>
              Evidence-based articles on gut health, hormones, functional medicine, nutrition,
              and holistic wellness — written by Dr. Amara, not AI.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 px-6" style={{ background: 'white', borderBottom: '1px solid rgba(212,197,185,0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-2 scroll-x">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all"
                style={{
                  background: cat === 'All' ? '#C1876B' : 'rgba(212,197,185,0.3)',
                  color: cat === 'All' ? 'white' : '#6B5B52',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden" style={{ background: 'white', boxShadow: '0 8px 40px rgba(58,46,40,0.08)' }}>
              <div className="grid lg:grid-cols-2 items-center">
                <div
                  className="h-64 lg:h-full min-h-64 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${featured.color}20, ${featured.color}40)` }}
                >
                  <div className="text-9xl">{featured.emoji}</div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${featured.color}20`, color: featured.color }}>
                      Featured · {featured.category}
                    </span>
                    <span className="text-xs flex items-center gap-1" style={{ color: '#9CAF88' }}>
                      <Clock size={12} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif font-bold text-3xl mb-4" style={{ color: '#3A2E28' }}>{featured.title}</h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#6B5B52' }}>{featured.excerpt}</p>
                  <button className="btn-primary">
                    Read Article
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 px-6" style={{ background: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <AnimatedSection key={article.title} delay={i * 100}>
                <div className="bg-white rounded-3xl overflow-hidden h-full flex flex-col card-hover" style={{ boxShadow: '0 4px 20px rgba(58,46,40,0.06)', border: '1px solid rgba(212,197,185,0.2)' }}>
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${article.color}15, ${article.color}30)` }}
                  >
                    <div className="text-6xl">{article.emoji}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1" style={{ background: `${article.color}15`, color: article.color }}>
                        <Tag size={10} /> {article.category}
                      </span>
                      <span className="text-xs flex items-center gap-1" style={{ color: '#9CAF88' }}>
                        <Clock size={10} /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif font-semibold text-xl mb-3 flex-1" style={{ color: '#3A2E28', lineHeight: '1.4' }}>
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B5B52' }}>
                      {article.excerpt.slice(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs" style={{ color: '#D4C5B9' }}>{article.date}</span>
                      <button className="text-sm font-semibold flex items-center gap-1" style={{ color: '#C1876B' }}>
                        Read More <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #EDE5D8 0%, #F7F3E9 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="text-5xl mb-4">📬</div>
            <h2 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#3A2E28' }}>
              Get Health Wisdom in Your Inbox
            </h2>
            <p className="text-lg mb-8" style={{ color: '#6B5B52' }}>
              Weekly evidence-based health tips, new articles, recipes, and exclusive resources
              from Dr. Amara — delivered with warmth, not spam.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="newsletter-input flex-1" />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Free
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-xs mt-4" style={{ color: '#9CAF88' }}>No spam. Unsubscribe anytime. Currently reaching 1,200+ subscribers.</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
