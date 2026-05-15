import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#4A6741] mb-6">
            Start Your Healing Journey
          </h1>
          <p className="text-xl text-[#2D3748]/80 max-w-3xl mx-auto">
            Book your free 20-minute Discovery Call with Dr. Amara. No pressure, 
            no sales pitch—just honest conversation about your health goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-semibold text-[#4A6741] mb-6">
                Book Your Free Discovery Call
              </h2>
              {submitted ? (
                <div className="bg-[#F7F3E9] p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-[#9CAF88] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#4A6741] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-[#2D3748]/80">
                    We've received your request. Our team will reach out within 24 hours 
                    to schedule your free discovery call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="(646) 555-9047"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-2">
                      Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Select a service</option>
                      <option value="discovery">Free Discovery Call</option>
                      <option value="individual">Individual Consultation</option>
                      <option value="gut">Gut Healing Program</option>
                      <option value="hormone">Hormone Reset Program</option>
                      <option value="transformation">6-Month Transformation</option>
                      <option value="group">Group Program</option>
                      <option value="digital">Digital Products</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-2">
                      What brings you here? (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="input-field"
                      placeholder="Tell us a bit about what you're dealing with..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Request Discovery Call
                  </button>
                  <p className="text-xs text-[#2D3748]/60 text-center">
                    We'll respond within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-semibold text-[#4A6741] mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7F3E9] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C1876B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A6741] mb-1">Wellness Center</h3>
                    <p className="text-[#2D3748]/80">
                      2156 Bathgate Avenue<br />
                      Bronx, NY 10457
                    </p>
                    <p className="text-sm text-[#2D3748]/60 mt-2">
                      In-person and virtual appointments available
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7F3E9] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C1876B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A6741] mb-1">Email</h3>
                    <p className="text-[#2D3748]/80">dr.amara@radiantrootswellness.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7F3E9] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C1876B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A6741] mb-1">Phone</h3>
                    <p className="text-[#2D3748]/80">(646) 555-9047</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#F7F3E9] p-6 rounded-2xl">
                <h3 className="font-serif font-semibold text-[#4A6741] mb-4">Hours of Operation</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#2D3748]/80">Monday - Tuesday</span>
                    <span className="text-[#4A6741] font-medium">10am - 7pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2D3748]/80">Wednesday</span>
                    <span className="text-[#4A6741] font-medium">9am - 3pm (In-person only)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2D3748]/80">Thursday</span>
                    <span className="text-[#4A6741] font-medium">10am - 7pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2D3748]/80">Friday</span>
                    <span className="text-[#4A6741] font-medium">10am - 4pm (Virtual only)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2D3748]/80">Saturday</span>
                    <span className="text-[#4A6741] font-medium">10am - 2pm (Group sessions)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2D3748]/80">Sunday</span>
                    <span className="text-[#4A6741] font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#9CAF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2D3748]/80">Wheelchair accessible</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#9CAF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2D3748]/80">Near Fordham Road subway (4/D trains)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#9CAF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2D3748]/80">Street parking available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold text-[#4A6741] text-center mb-12">
            Find Us in the Bronx
          </h2>
          <div className="aspect-[2/1] bg-[#D4C5B9] rounded-2xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-[#C1876B] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[#4A6741] font-medium">2156 Bathgate Avenue, Bronx, NY 10457</p>
                <p className="text-sm text-[#2D3748]/60 mt-2">Serving Tremont, Fordham, Belmont, Morris Heights, University Heights</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
