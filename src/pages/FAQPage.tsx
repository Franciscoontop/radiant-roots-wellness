import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'Do you take insurance?',
          a: 'Dr. Amara is a private pay practice and doesn\'t directly accept insurance. However, she provides superbills that you can submit to your insurance for possible reimbursement. Many clients have received partial reimbursement, especially for out-of-network benefits. We recommend checking with your insurance provider about out-of-network coverage for functional medicine services.',
        },
        {
          q: 'What\'s the difference between functional medicine and regular medicine?',
          a: 'Conventional medicine focuses on treating symptoms, often with medications. Functional medicine looks for the root cause of your symptoms and addresses underlying imbalances through nutrition, lifestyle, stress management, and targeted supplements. Think of it this way: conventional medicine asks "What drug treats this symptom?" while functional medicine asks "Why is this symptom happening in the first place?"',
        },
        {
          q: 'Do I have to come in person or can we do virtual?',
          a: 'Dr. Amara offers both! You can meet at her Bronx wellness center or work with her virtually from anywhere in the US. Most services work equally well both ways. Virtual appointments are conducted via secure video call. Lab testing can often be done at a local lab near you.',
        },
        {
          q: 'How long until I see results?',
          a: 'Everyone\'s journey is different, but many clients start noticing changes within 4-6 weeks of implementing their protocol. Significant improvements often happen within 3 months. Dr. Amara focuses on sustainable, root-cause healing rather than quick fixes. During your discovery call, she can give you a better idea based on your specific situation.',
        },
      ],
    },
    {
      category: 'Services & Pricing',
      questions: [
        {
          q: 'How much does a consultation cost?',
          a: 'Initial 90-minute consultations range from $350-$450 depending on the type. Follow-up sessions are $100-$200. Programs (3-month and 6-month) range from $2,400-$4,800 and include multiple sessions, lab testing, and ongoing support. Group programs and digital products are more affordable options starting at $47.',
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes! For programs, Dr. Amara offers payment plans with 50% deposit to reserve your spot and the remainder split into 3-6 monthly installments. She also offers limited sliding scale spots based on income. During your discovery call, you can discuss what option works best for your budget.',
        },
        {
          q: 'What\'s included in a program?',
          a: 'Programs include multiple one-on-one sessions with Dr. Amara, comprehensive lab testing, personalized protocols (nutrition, supplements, lifestyle), educational resources, and messaging support between sessions. The 6-month Whole-Body Transformation also includes unlimited messaging support and priority scheduling.',
        },
        {
          q: 'Do you prescribe medications?',
          a: 'Dr. Amara is not an MD and doesn\'t prescribe pharmaceutical medications. She focuses on nutrition, lifestyle, supplements, and natural therapies. However, she\'s integrative (not anti-medicine) and will collaborate with your existing doctors when needed. She never recommends stopping prescribed medications without consulting your prescribing physician.',
        },
      ],
    },
    {
      category: 'Lab Testing',
      questions: [
        {
          q: 'What kind of testing do you do?',
          a: 'Dr. Amara uses functional lab tests that go beyond conventional testing. This includes comprehensive stool analysis (GI-MAP), DUTCH hormone testing, food sensitivity testing, organic acids testing, and comprehensive thyroid panels. These tests provide detailed insight into gut health, hormone balance, nutrient status, and metabolic function.',
        },
        {
          q: 'How much does testing cost?',
          a: 'Lab testing ranges from $250-$400 per test depending on the type. Testing is typically done as part of a program, but can be added to individual consultations. Payment for labs is due upfront when ordered. Dr. Amara will only recommend tests that are truly necessary for your situation.',
        },
        {
          q: 'Do I have to come to your office for testing?',
          a: 'Most functional tests are done at home! You\'ll receive a kit with instructions for collecting urine, stool, or (in some cases) dried blood spot samples. You mail the samples back to the lab. Some tests may require a blood draw at a local lab, which Dr. Amara can arrange near you.',
        },
      ],
    },
    {
      category: 'What to Expect',
      questions: [
        {
          q: 'What happens during the first appointment?',
          a: 'Your initial 90-minute consultation is a deep dive into your health history, current symptoms, lifestyle, diet, stress, sleep, and goals. Dr. Amara listens to your full story (no rushing!), asks clarifying questions, and begins forming a picture of potential root causes. You\'ll leave with preliminary recommendations and a plan for next steps.',
        },
        {
          q: 'Do I need to do anything before my appointment?',
          a: 'Yes! After booking, you\'ll receive intake forms to complete. These ask about your health history, current symptoms, medications, supplements, diet, lifestyle, and goals. The more detailed you are, the better Dr. Amara can prepare for your session. Plan to spend 30-45 minutes on the forms.',
        },
        {
          q: 'What if I need to cancel or reschedule?',
          a: 'Please cancel or reschedule at least 48 hours before your appointment for a full credit or reschedule. Cancellations with less than 48 hours notice will forfeit the session (or 50% fee for programs). No-shows will be charged the full session fee. We understand life happens—just let us know as early as possible.',
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#2D3748]/80 max-w-3xl mx-auto">
            Get answers to common questions about Dr. Amara's services, 
            pricing, and approach to functional medicine.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-serif font-semibold text-[#4A6741] mb-8">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = faqs
                    .slice(0, categoryIndex)
                    .reduce((acc, cat) => acc + cat.questions.length, 0) + index;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div key={index} className="card">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full flex justify-between items-start text-left"
                      >
                        <h3 className="text-lg font-semibold text-[#4A6741] pr-8">
                          {faq.q}
                        </h3>
                        <svg
                          className={`w-6 h-6 text-[#C1876B] flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
                        }`}
                      >
                        <p className="text-[#2D3748]/80 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-[#4A6741] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            The best way to get your specific questions answered is to book 
            a free 20-minute Discovery Call with Dr. Amara.
          </p>
          <Link to="/contact" className="bg-white text-[#4A6741] px-8 py-4 rounded-full font-semibold hover:bg-[#F7F3E9] transition-colors inline-block">
            Book Free Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
