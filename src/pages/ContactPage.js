import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

const offices = [
  // { city: 'Faridabad', address: 'Sec-7, Block-E', phone: '+91 87508 39802', email: 'Vashisht.ashwani@gmail.com' },
  
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 900);
  };

  return (
    <div style={{ paddingTop: 88, fontFamily: '"Jost", sans-serif' }}>
      {/* Hero */}
      <section
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1613 0%, #2a2520 100%)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1600&q=70"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative">
          <p className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">Reach Out</p>
          <h1
            className="text-white mb-4"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700 }}
          >
            Contact Us
          </h1>
          <p className="text-white/60">We'd love to hear from you. Let's start a conversation.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6" style={{ background: '#f9f5ef' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">Get In Touch</p>
              <h2
                className="text-charcoal-900 mb-4"
                style={{ fontFamily: '"Playfair Display", serif', fontSize: 34, fontWeight: 700, lineHeight: 1.2 }}
              >
                Let's Find Your<br />
                <span style={{ fontStyle: 'italic', color: '#c8901a' }}>Perfect Property</span>
              </h2>
              <p className="text-charcoal-500 text-sm leading-relaxed">
                Whether you're ready to buy, invest, or simply exploring options — our expert team is available to guide you with honest advice and unmatched market knowledge.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Call Us', value: '+91 87508 39802', sub: 'Mon–Sat 9:30 AM – 7:00 PM' },
                { icon: Mail, label: 'Email Us', value: 'Vashisht.ashwani@gmail.com', sub: 'We respond within 2 hours' },
                { icon: MapPin, label: 'Head Office', value: 'sec-7, Block-E, Faridabad', sub: 'Haryana 121006, India' },
                { icon: Clock, label: 'Office Hours', value: 'Monday – Saturday', sub: '9:30 AM to 7:00 PM IST' },
              ].map(({ icon: Icon, label, value, sub }, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-charcoal-100 hover:border-gold-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200/50 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-charcoal-400 text-xs tracking-wider uppercase mb-0.5">{label}</p>
                    <p className="text-charcoal-900 text-sm font-medium">{value}</p>
                    <p className="text-charcoal-400 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Offices */}
            <div>
              {/* <p className="text-charcoal-900 font-semibold text-sm tracking-wider uppercase mb-4"></p> */}
              <div className="space-y-3">
                {offices.map((o, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-charcoal-100">
                    <p className="text-gold-500 text-xs font-semibold tracking-wider uppercase mb-1">{o.city}</p>
                    <p className="text-charcoal-600 text-xs leading-relaxed">{o.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-charcoal-100 p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-gold-50 border-2 border-gold-300 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-gold-500" />
                  </div>
                  <h3
                    className="text-charcoal-900 mb-3"
                    style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 700 }}
                  >
                    Message Received!
                  </h3>
                  <p className="text-charcoal-400 text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. One of our property advisors will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', city: '', service: '', message: '' }); }}
                    className="mt-8 text-gold-500 text-sm hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3
                      className="text-charcoal-900 mb-1"
                      style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, fontWeight: 700 }}
                    >
                      Schedule a Consultation
                    </h3>
                    <p className="text-charcoal-400 text-sm">Fill out the form and we'll get back to you promptly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Ashwani Kumar"
                          className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-sm text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-sm text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-sm text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Preferred Location</label>
                        <select
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-sm text-charcoal-700 focus:outline-none focus:border-gold-400 bg-white"
                        >
                          <option value="">Select a city</option>
                          {['Noida', 'Faridabad', 'Greater Faridabad'].map(c => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-sm text-charcoal-700 focus:outline-none focus:border-gold-400 bg-white"
                      >
                        <option value="">Select a service</option>
                        {['Luxury Residential', 'Investment Advisory', 'NRI Services', 'Commercial Real Estate', 'Legal & Documentation', 'Interior Consultation'].map(s => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Your Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your property requirements, budget, timeline, or any questions you have..."
                        className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-sm text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-charcoal-900 font-semibold py-4 rounded-lg transition-all text-sm tracking-wider uppercase"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
