import React from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, Shield, Globe, FileText, Wrench, Star, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Luxury Residential',
    subtitle: 'Bespoke Home Finding',
    desc: 'Our residential team curates an exclusive selection of villas, penthouses, and premium apartments across India\'s most coveted addresses — from Delhi\'s Lutyens Bungalow Zone to Faridabad \'s OMAXE city .',
    features: ['Property search & shortlisting', 'Site visits with expert guidance', 'Neighbourhood analysis', 'Resale value assessment'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=85',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    subtitle: 'Strategic Returns',
    desc: 'Maximise your real estate portfolio with data-driven investment strategies. We identify high-yield opportunities in emerging micro-markets before they peak - giving our clients a decisive first-mover advantage.',
    features: ['Market analysis & forecasting', 'Portfolio diversification', 'ROI & yield projections', 'Exit strategy planning'],
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=700&q=85',
  },
  {
    icon: Shield,
    title: 'Legal & Documentation',
    subtitle: 'Complete Peace of Mind',
    desc: 'Navigate complex legal landscapes with confidence. Our in-house legal team conducts comprehensive due diligence, title verification, and ensures every transaction is airtight and protected.',
    features: ['Title & encumbrance check', 'Sale deed drafting', 'RERA compliance', 'Registration assistance'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=85',
  },
  {
    icon: Globe,
    title: 'NRI Services',
    subtitle: 'Your Homeland Investment',
    desc: 'We are the trusted partner for Non-Resident Indians looking to invest in India\'s booming luxury real estate. From FEMA compliance to remote property management - we handle everything end-to-end.',
    features: ['FEMA & RBI compliance', 'Power of attorney handling', 'Remote transaction management', 'Rental income management'],
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=85',
  },
  {
    icon: Wrench,
    title: 'Interior Consultation',
    subtitle: 'Crafted for You',
    desc: 'Transform your new property into a masterpiece. Our network of India\'s finest interior designers offers turnkey design solutions aligned with your lifestyle, taste, and budget.',
    features: ['Space planning', 'Material & finish selection', 'Furniture curation', 'Turnkey handover'],
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=700&q=85',
  },
  {
    icon: FileText,
    title: 'Commercial Real Estate',
    subtitle: 'Spaces That Work',
    desc: 'From premium office spaces to flagship retail locations and commercial complexes - we help businesses find spaces that enhance their brand, productivity, and bottom line.',
    features: ['Office space sourcing', 'Retail location scouting', 'Lease negotiation', 'Commercial portfolio management'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85',
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 88, fontFamily: '"Jost", sans-serif' }}>
      {/* Hero */}
      <section
        className="relative py-28 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1613 0%, #2a2520 100%)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=70"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">What We Offer</p>
          <h1
            className="text-white mb-5"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700 }}
          >
            Our Services
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Comprehensive real estate solutions crafted to serve India's most discerning clientele.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6" style={{ background: '#f9f5ef' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 group border border-charcoal-100/50"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
                      <svc.icon size={18} className="text-charcoal-900" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm" style={{ fontFamily: '"Playfair Display", serif' }}>{svc.title}</p>
                      <p className="text-gold-300 text-xs">{svc.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-6">{svc.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {svc.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Star size={10} className="text-gold-500 shrink-0" />
                        <span className="text-charcoal-600 text-xs">{f}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 flex items-center gap-2 text-gold-500 hover:text-gold-600 text-sm font-medium tracking-wide transition-colors group-hover:gap-3">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #1a1613, #2a2520)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-4">Get Started</p>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700 }}
          >
            Ready to Experience the KARYA Difference?
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Schedule a complimentary consultation with our experts and let us understand your vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-semibold px-10 py-4 rounded transition-all text-sm tracking-widest uppercase"
          >
            Book Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
