import React from 'react';

import { Award, Users, Globe, TrendingUp, } from 'lucide-react';



const milestones = [
  { year: '2020', title: 'Founded in Faridabad', desc: 'Ashwini Vashisht established KARYA with a vision to redefine luxury property consultancy in India.' },
  { year: '2021', title: 'NCR Expansion', desc: 'Expanded operations to Delhi, covering all major luxury real estate markets.' },
  { year: '2023', title: '₹12 Cr Milestone', desc: 'Crossed 12 crore in total property transactions, cementing our position as a market leader.' },
  { year: '2024', title: 'NRI Services Launch', desc: 'Launched dedicated NRI property services, bridging Indian diaspora with their dream homes.' },
  { year: '2026', title: '₹30cr Portfolio', desc: 'Reached ₹30cr crore in managed portfolio value with over 2,40 successful transactions.' },
];

const team = [
  { name: 'Ashwani Vashisht', role: 'Founder & Principal Consultant', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85', initials: 'AV' },
  { name: 'Vikram Malhotra', role: 'Head of Luxury Residential', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85', initials: 'VM' },
  { name: 'Priya Sharma', role: 'Senior Property Advisor', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=85', initials: 'PS' },
  { name: 'Arjun Mehta', role: 'Investment Strategist', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85', initials: 'AM' },
];

const values = [
  { icon: Award, title: 'Excellence', desc: 'We set the gold standard in every client interaction, property selection, and transaction.' },
  { icon: Users, title: 'Client First', desc: 'Your vision drives everything we do. We listen, understand, and deliver beyond expectations.' },
  { icon: Globe, title: 'Integrity', desc: 'Transparent dealings, honest advice, and ethical practices are the foundation of our legacy.' },
  { icon: TrendingUp, title: 'Expertise', desc: '10 years of market intelligence, network, and insight - at your service.' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 88, fontFamily: '"Jost", sans-serif' }}>
      {/* Hero */}
      <section
        className="relative py-28 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1613 0%, #2a2520 100%)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=70"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">Our Story</p>
         <h1
  className="text-white mb-5"
>
  About Ashwani Vashisht
</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            10 years of passion, expertise, and an unwavering commitment to connecting India's finest properties with discerning clients.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">The Vision</p>
            <h2
              className="text-charcoal-900 mb-6"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, lineHeight: 1.2 }}
            >
              Redefining Luxury<br />
              <span style={{ fontStyle: 'italic', color: '#c8901a' }}>Real Estate in India</span>
            </h2>
            <p className="text-charcoal-500 leading-relaxed mb-5">
              When Ashwanni Vashisht founded KARYA in 2020, she had one clear mission: to bring world-class property consultancy standards to India's burgeoning luxury real estate market. With a background in architecture and a deep passion for beautiful spaces, she understood that buying a premium property is not just a transaction — it's the beginning of a legacy.
            </p>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              Today, KARYA stands as India's most trusted name in luxury real estate, with a portfolio spanning Delhi NCR, Faridabad, Gurugram and beyond. Our team of 60+ specialists brings together legal expertise, market analytics, architectural insight, and decades of relationship capital.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: '300+', l: 'Properties Sold' },
                { v: '20+', l: 'Cities Covered' },
                { v: '5+', l: 'Expert Team' },
                { v: '98%', l: 'Client Retention' },
              ].map(({ v, l }) => (
                <div key={l} className="p-5 rounded-xl bg-cream border border-charcoal-100">
                  <p className="text-gold-500 font-bold text-2xl" style={{ fontFamily: '"Playfair Display", serif' }}>{v}</p>
                  <p className="text-charcoal-400 text-xs tracking-wider uppercase mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85"
              alt="AV's Office"
              className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
            />
            <div
              className="absolute -bottom-6 -left-6 rounded-xl p-6 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #c8901a, #e6aa28)', width: 200 }}
            >
              <p style={{ fontFamily: '"Playfair Display", serif', fontSize: 42, fontWeight: 700, color: '#1a1613', lineHeight: 1 }}>10</p>
              <p style={{ color: '#1a1613', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: '#f9f5ef' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-3">What Drives Us</p>
            <h2
              className="text-charcoal-900"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700 }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group border border-charcoal-100/50">
                <div className="w-16 h-16 rounded-full bg-gold-50 border border-gold-200/50 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500 transition-colors">
                  <v.icon size={24} className="text-gold-500 group-hover:text-charcoal-900 transition-colors" />
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20 }} className="text-charcoal-900 font-semibold mb-3">{v.title}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6" style={{ background: '#fff' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-3">Our Journey</p>
            <h2
              className="text-charcoal-900"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700 }}
            >
              Key Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300 via-gold-500 to-gold-300 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:text-right">
                    {i % 2 === 0 ? (
                      <div className="bg-cream rounded-xl p-6 border border-charcoal-100">
                        <p className="text-gold-500 font-bold text-2xl mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>{m.year}</p>
                        <h3 className="text-charcoal-900 font-semibold mb-2">{m.title}</h3>
                        <p className="text-charcoal-400 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    ) : <div className="hidden md:block" />}
                  </div>
                  <div className="relative z-10 hidden md:flex w-5 h-5 rounded-full bg-gold-500 border-4 border-white shadow-lg items-center justify-center shrink-0">
                  </div>
                  <div className="flex-1">
                    {i % 2 !== 0 ? (
                      <div className="bg-cream rounded-xl p-6 border border-charcoal-100">
                        <p className="text-gold-500 font-bold text-2xl mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>{m.year}</p>
                        <h3 className="text-charcoal-900 font-semibold mb-2">{m.title}</h3>
                        <p className="text-charcoal-400 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    ) : <div className="hidden md:block" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6" style={{ background: '#f9f5ef' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-3">The Experts</p>
            <h2
              className="text-charcoal-900"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700 }}
            >
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-5 overflow-hidden rounded-2xl">
                  <div className="w-full h-72 bg-charcoal-100 overflow-hidden rounded-2xl">
                    <div
                      className="w-full h-full flex items-center justify-center text-4xl font-bold text-gold-500 group-hover:scale-105 transition-transform duration-500"
                      style={{
                        background: 'linear-gradient(135deg, #2a2520, #3f3830)',
                        fontFamily: '"Playfair Display", serif',
                      }}
                    >
                      {member.initials}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-charcoal-900/80 backdrop-blur-sm rounded-lg px-4 py-2">
                      <p className="text-white font-medium text-sm">{member.name}</p>
                      <p className="text-gold-400 text-xs">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
