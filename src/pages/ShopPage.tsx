import React from 'react';

const ShopPage: React.FC = () => {
  const products = [
    {
      title: 'Heal Your Gut Self-Paced Course',
      price: '$197',
      description: '8-week comprehensive gut healing program you can do on your own time.',
      features: ['8 video modules', 'Meal plans & recipes', 'Supplement guide', 'Private community', 'Lifetime access'],
      image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=600&h=400&fit=crop',
      bestseller: true,
    },
    {
      title: 'Hormone Harmony Digital Guide + Meal Plan',
      price: '$67',
      description: 'Complete guide to balancing your hormones naturally with food and lifestyle.',
      features: ['50-page comprehensive guide', '4-week meal plan', 'Shopping lists', 'Recipe collection', 'Symptom tracker'],
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    },
    {
      title: '14-Day Anti-Inflammatory Reset',
      price: '$47',
      description: 'Quick start guide to reducing inflammation and feeling your best.',
      features: ['14-day meal plan', 'Anti-inflammatory food guide', 'Daily check-ins', 'Recipe collection', 'Shopping guide'],
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    },
    {
      title: 'Radiant Roots Collective Membership',
      price: '$47/month',
      description: 'Monthly membership with community, workshops, and exclusive resources.',
      features: ['Monthly live workshops', 'Private community', 'Resource library', 'Q&A calls with Dr. Amara', 'Exclusive discounts'],
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
      membership: true,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6">
            Digital Products & Resources
          </h1>
          <p className="text-xl text-[#2D3748]/80 max-w-3xl mx-auto">
            Self-paced courses, guides, and membership community. Affordable ways 
            to access Dr. Amara expertise and start your healing journey today.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="card group"
              >
                {product.bestseller && (
                  <span className="absolute -top-3 -right-3 badge badge-popular">Bestseller</span>
                )}
                {product.membership && (
                  <span className="absolute -top-3 -right-3 badge" style={{ background: '#C9A86A', color: 'white' }}>
                    Membership
                  </span>
                )}
                <div className="aspect-[3/2] overflow-hidden rounded-xl mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#4A6741] mb-2">{product.title}</h3>
                <p className="text-2xl font-serif font-semibold text-[#C1876B] mb-3">{product.price}</p>
                <p className="text-[#2D3748]/70 text-sm mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs text-[#2D3748]/80">
                      <svg className="w-4 h-4 text-[#9CAF88] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-primary w-full text-sm">
                  {product.membership ? 'Join Now' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            Why Choose Digital Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'Affordable Access',
                desc: 'Get Dr. Amara expertise at a fraction of individual session cost.',
              },
              {
                icon: '⏰',
                title: 'Learn at Your Pace',
                desc: 'Access content anytime, anywhere. No scheduling needed.',
              },
              {
                icon: '♾️',
                title: 'Lifetime Access',
                desc: 'Keep all materials forever and revisit whenever you need.',
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-serif font-semibold text-[#4A6741] mb-2">{benefit.title}</h3>
                <p className="text-[#2D3748]/70 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-20 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-[#C9A86A] text-white mb-6 inline-block">Special Offer</span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Complete Wellness Bundle
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get all three digital products (Gut Course + Hormone Guide + Anti-Inflammatory Reset) 
            for one low price.
          </p>
          <div className="flex items-center justify-center space-x-6 mb-8">
            <span className="text-3xl text-white/60 line-through">$311</span>
            <span className="text-5xl font-serif font-semibold text-[#C9A86A]">$247</span>
          </div>
          <button className="bg-white text-[#4A6741] px-8 py-4 rounded-full font-semibold hover:bg-[#F7F3E9] transition-colors">
            Get the Bundle
          </button>
          <p className="text-sm text-white/60 mt-4">Save $64 when you buy the bundle</p>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
