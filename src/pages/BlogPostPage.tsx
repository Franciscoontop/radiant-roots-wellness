import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostPage: React.FC = () => {

  const post = {
    title: '5 Signs Your Gut Health Is Affecting Your Hormones',
    category: 'Gut Health',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=1200&h=600&fit=crop',
    content: `
      <p class="text-lg text-[#2D3748]/80 leading-relaxed mb-6">
        Your gut and your hormones are in constant conversation. When your digestive system is out 
        of balance, it can throw your entire hormonal system into chaos. Here's what you need to know 
        about this critical connection.
      </p>

      <h2 class="text-2xl font-serif font-semibold text-[#4A6741] mt-12 mb-6">The Gut-Hormone Connection Explained</h2>
      <p class="text-[#2D3748]/80 leading-relaxed mb-6">
        Your gut microbiome—the trillions of bacteria living in your digestive tract—plays a crucial 
        role in hormone regulation. These bacteria help metabolize hormones, regulate estrogen levels, 
        and even influence insulin sensitivity. When your gut is imbalanced (a state called dysbiosis), 
        it can lead to hormonal imbalances throughout your body.
      </p>

      <h2 class="text-2xl font-serif font-semibold text-[#4A6741] mt-12 mb-6">Sign #1: Irregular or Painful Periods</h2>
      <p class="text-[#2D3748]/80 leading-relaxed mb-6">
        If your cycles are unpredictable, excessively heavy, or accompanied by severe cramping, your 
        gut may be to blame. Poor gut health can interfere with estrogen metabolism, leading to 
        estrogen dominance—a common cause of menstrual irregularities.
      </p>

      <h2 class="text-2xl font-serif font-semibold text-[#4A6741] mt-12 mb-6">Sign #2: Unexplained Weight Gain</h2>
      <p class="text-[#2D3748]/80 leading-relaxed mb-6">
        Struggling to lose weight despite eating well and exercising? Your gut bacteria influence 
        how your body stores fat, regulates blood sugar, and responds to insulin. An imbalanced 
        microbiome can make weight loss nearly impossible.
      </p>

      <h2 class="text-2xl font-serif font-semibold text-[#4A6741] mt-12 mb-6">Sign #3: Mood Swings and Anxiety</h2>
      <p class="text-[#2D3748]/80 leading-relaxed mb-6">
        About 90% of your serotonin (the "happy hormone") is produced in your gut. When your gut 
        is inflamed or imbalanced, it can directly impact your mood, leading to anxiety, depression, 
        and emotional instability.
      </p>

      <h2 class="text-2xl font-serif font-semibold text-[#4A6741] mt-12 mb-6">Sign #4: Fatigue and Low Energy</h2>
      <p class="text-[#2D3748]/80 leading-relaxed mb-6">
        Chronic fatigue can be a sign that your gut isn't properly absorbing nutrients needed for 
        hormone production. Additionally, gut imbalances can affect your thyroid function, which 
        regulates your metabolism and energy levels.
      </p>

      <h2 class="text-2xl font-serif font-semibold text-[#4A6741] mt-12 mb-6">Sign #5: Skin Issues</h2>
      <p class="text-[#2D3748]/80 leading-relaxed mb-6">
        Acne, rosacea, eczema, and other skin conditions are often reflections of gut health. When 
        your gut is inflamed, it shows up on your skin. Hormonal acne, in particular, is often 
        linked to gut dysbiosis.
      </p>

      <h2 class="text-2xl font-serif font-semibold text-[#4A6741] mt-12 mb-6">What You Can Do</h2>
      <p class="text-[#2D3748]/80 leading-relaxed mb-6">
        The good news? Healing your gut can restore hormonal balance. Here's where to start:
      </p>
      <ul class="list-disc list-inside text-[#2D3748]/80 leading-relaxed mb-6 space-y-2">
        <li>Eliminate inflammatory foods (sugar, processed foods, industrial seed oils)</li>
        <li>Eat plenty of fiber-rich vegetables to feed beneficial bacteria</li>
        <li>Consider probiotic and prebiotic supplementation</li>
        <li>Manage stress (chronic stress damages your gut lining)</li>
        <li>Get comprehensive gut testing to identify specific imbalances</li>
      </ul>

      <div class="bg-[#F7F3E9] p-8 rounded-2xl mt-12">
        <h3 class="text-xl font-serif font-semibold text-[#4A6741] mb-4">Ready to Address Your Gut Health?</h3>
        <p class="text-[#2D3748]/80 mb-6">
          Dr. Amara specializes in gut healing and has helped hundreds of clients restore their 
          digestive health and balance their hormones. Book a free discovery call to learn more.
        </p>
        <Link to="/contact" class="btn-primary inline-block">
          Book Free Discovery Call
        </Link>
      </div>
    `,
  };

  const relatedPosts = [
    {
      title: 'The Gut-Brain Connection: How Your Digestive Health Affects Your Mood',
      slug: 'gut-brain-connection',
      category: 'Mental Health',
    },
    {
      title: 'Anti-Inflammatory Foods: A Complete Guide',
      slug: 'anti-inflammatory-foods',
      category: 'Nutrition',
    },
    {
      title: 'PCOS and Insulin Resistance: What You Need to Know',
      slug: 'pcos-insulin-resistance',
      category: 'Hormones',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A6741]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#9CAF88] font-semibold uppercase tracking-wider text-sm">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white mt-4 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-white/80 text-sm">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-16 bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop"
              alt="Dr. Amara Chen"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-serif font-semibold text-[#4A6741]">Dr. Amara Chen</h3>
              <p className="text-[#2D3748]/70 text-sm mb-3">
                Doctorate in Functional Medicine, Certified Integrative Nutrition Health Coach
              </p>
              <p className="text-[#2D3748]/80 text-sm">
                Dr. Amara combines Western science with ancient healing wisdom to help clients 
                heal at the root cause. She specializes in gut health, hormone balance, and 
                autoimmune conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold text-[#4A6741] mb-12">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related, index) => (
              <Link
                key={index}
                to={`/blog/${related.slug}`}
                className="group"
              >
                <span className="text-xs text-[#9CAF88] font-semibold uppercase tracking-wider">
                  {related.category}
                </span>
                <h3 className="text-lg font-serif font-semibold text-[#4A6741] mt-2 group-hover:text-[#C1876B] transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
