import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: '5 Signs Your Gut Health Is Affecting Your Hormones',
      excerpt: 'Discover the surprising connection between your digestive system and hormone balance. Learn the key signs that your gut may be throwing your hormones out of whack.',
      category: 'Gut Health',
      image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&h=500&fit=crop',
      slug: 'gut-hormones-connection',
      date: 'March 15, 2024',
      readTime: '8 min read',
    },
    {
      title: 'Why Your Doctor Tests Came Back Normal But You Still Feel Sick',
      excerpt: 'Understanding the difference between conventional and functional medicine testing. Just because your labs are "normal" doesn mean you are healthy.',
      category: 'Functional Medicine',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
      slug: 'normal-tests-still-sick',
      date: 'March 10, 2024',
      readTime: '10 min read',
    },
    {
      title: 'The Truth About Detoxes: What Actually Works',
      excerpt: 'Separating wellness myths from evidence-based approaches to supporting your body natural detoxification pathways.',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop',
      slug: 'truth-about-detoxes',
      date: 'March 5, 2024',
      readTime: '7 min read',
    },
    {
      title: 'PCOS and Insulin Resistance: What You Need to Know',
      excerpt: 'A comprehensive guide to understanding the connection between PCOS and insulin resistance, and what you can do about it.',
      category: 'Hormones',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop',
      slug: 'pcos-insulin-resistance',
      date: 'February 28, 2024',
      readTime: '12 min read',
    },
    {
      title: 'The Gut-Brain Connection: How Your Digestive Health Affects Your Mood',
      excerpt: 'Exploring the fascinating link between your gut microbiome and mental health. Why they call your gut your "second brain".',
      category: 'Mental Health',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=500&fit=crop',
      slug: 'gut-brain-connection',
      date: 'February 20, 2024',
      readTime: '9 min read',
    },
    {
      title: 'Anti-Inflammatory Foods: A Complete Guide',
      excerpt: 'Learn which foods fight inflammation and which ones fuel it. Plus, a 7-day anti-inflammatory meal plan to get you started.',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop',
      slug: 'anti-inflammatory-foods',
      date: 'February 15, 2024',
      readTime: '11 min read',
    },
  ];

  const categories = ['All', 'Gut Health', 'Hormones', 'Functional Medicine', 'Nutrition', 'Wellness', 'Mental Health'];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6">
            The Radiant Roots Blog
          </h1>
          <p className="text-xl text-[#2D3748]/80 max-w-3xl mx-auto">
            Evidence-based wellness insights from Dr. Amara. No woo-woo, no BS—just 
            science-backed information to help you understand and heal your body.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-[#D4C5B9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-[#4A6741] text-white'
                    : 'bg-[#F7F3E9] text-[#4A6741] hover:bg-[#D4C5B9]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="blog-card group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-[#2D3748]/60 mb-3">
                    <span className="text-[#9CAF88] font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#4A6741] mb-3 group-hover:text-[#C1876B] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#2D3748]/70 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#2D3748]/60">{post.readTime}</span>
                    <span className="text-[#C1876B] text-sm font-medium inline-flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-semibold text-[#4A6741] mb-4">
            Get Weekly Health Tips
          </h2>
          <p className="text-lg text-[#2D3748]/80 mb-8">
            Join 1,200+ subscribers who receive evidence-based wellness insights, 
            recipes, and exclusive content from Dr. Amara.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 input-field"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-[#2D3748]/60 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
