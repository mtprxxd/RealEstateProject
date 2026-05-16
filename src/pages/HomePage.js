import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, Award, Home, TrendingUp,
  Shield, Phone, ChevronLeft, Quote
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { featuredProperties, heroSlides, testimonials } from '../utils/data';

const stats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '300+', label: 'Properties Sold' },
  { value: '₹30cr+', label: 'Portfolio Value' },
  { value: '98%', label: 'Client Satisfaction' },
];

const services = [
  { icon: Home, title: 'Residential Luxury', desc: 'Curated villas, penthouses and premium apartments across India\'s most coveted addresses.' },
  { icon: TrendingUp, title: 'Investment Advisory', desc: 'Strategic property investment guidance with high-yield potential and ROI analysis.' },
  { icon: Shield, title: 'Legal & Documentation', desc: 'Complete due diligence, title verification and seamless documentation services.' },
  { icon: Award, title: 'NRI Services', desc: 'End-to-end property management and investment services for Non-Resident Indians.' },
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [testimIndex, setTestimIndex] = useState(0);
  const heroTimer = useRef(null);

  // Hero auto-advance
  useEffect(() => {
    heroTimer.current = setInterval(() => {
      setHeroIndex(i => (i + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(heroTimer.current);
  }, []);

  const goHero = (dir) => {
    clearInterval(heroTimer.current);
    setHeroIndex(i => (i + dir + heroSlides.length) % heroSlides.length);
    heroTimer.current = setInterval(() => {
      setHeroIndex(i => (i + 1) % heroSlides.length);
    }, 5500);
  };

  return (
    <div>
      {/* ── HERO SECTION ────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] overflow-hidden">
        {/* Background Video (uses YouTube embed as fallback) */}
        <div className="absolute inset-0">
          {/* Fallback: Slideshow images acting as "video" feel */}
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-1000"
              style={{ opacity: i === heroIndex ? 1 : 0 }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{
                  transform: i === heroIndex ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 6s ease-out',
                }}
              />
            </div>
          ))}
          {/* Dark cinematic overlay */}
          <div className="video-overlay absolute inset-0" />
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full pt-24">
            <div className="max-w-3xl">
              {/* Tag */}
              <div
                className="animate-fade-up delay-100 inline-flex items-center gap-2 mb-6 opacity-0"
                style={{ animationFillMode: 'forwards' }}
              >
                <div className="w-8 h-px bg-gold-400" />
                <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">
                  {heroSlides[heroIndex].tag}
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="animate-fade-up delay-200 opacity-0 text-white leading-none mb-4"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: 'clamp(48px, 7vw, 92px)',
                  fontWeight: 700,
                  animationFillMode: 'forwards',
                }}
                key={heroIndex}
              >
                {heroSlides[heroIndex].title}
              </h1>

              <p
                className="animate-fade-up delay-300 opacity-0 text-gold-300 text-xl md:text-2xl mb-3"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', animationFillMode: 'forwards' }}
                key={`sub-${heroIndex}`}
              >
                {heroSlides[heroIndex].subtitle}
              </p>

              <p
                className="animate-fade-up delay-400 opacity-0 text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
                style={{ animationFillMode: 'forwards' }}
              >
                India's most prestigious real estate consultancy. Discover extraordinary properties curated for extraordinary lives.
              </p>

              {/* CTAs */}
              <div className="animate-fade-up delay-600 opacity-0 flex flex-wrap gap-4" style={{ animationFillMode: 'forwards' }}>
                <Link
                  to="/properties"
                  className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-semibold px-8 py-4 rounded transition-all duration-200 tracking-wide text-sm uppercase"
                >
                  Explore Properties
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-white/30 hover:border-gold-400/60 text-white hover:text-gold-400 px-8 py-4 rounded transition-all duration-200 tracking-wide text-sm uppercase backdrop-blur-sm"
                >
                  <Phone size={15} />
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* Slide indicator */}
            <div className="absolute bottom-16 left-6 right-6 max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`carousel-dot ${i === heroIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goHero(-1)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold-400 hover:border-gold-400/50 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => goHero(1)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold-400 hover:border-gold-400/50 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────── */}
      <section style={{ background: 'linear-gradient(90deg, #1a1613 0%, #2a2520 50%, #1a1613 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center border-r border-white/10 last:border-0">
              <p
                className="text-gold-400 font-bold"
                style={{ fontFamily: '"Playfair Display", serif', fontSize: 28 }}
              >
                {s.value}
              </p>
              <p className="text-white/50 text-xs tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ─────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#f9f5ef' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-3">Handpicked Exclusives</p>
            <h2
              className="text-charcoal-900 mb-4"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700 }}
            >
              Featured Properties
            </h2>
            <div className="gold-divider max-w-xs mx-auto">
              <span className="text-gold-500 text-lg">◆</span>
            </div>
            <p className="text-charcoal-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Each property in our portfolio is meticulously selected for its architectural distinction, prime location, and investment potential.
            </p>
          </div>

          {/* Properties Grid */}
          {/* Properties Section */}
<div className="relative">

  {/* Mobile + Tablet Carousel */}
  <div className="lg:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
    <div className="flex gap-5 px-1 pb-4 w-max">
      {featuredProperties.map((property) => (
        <div
          key={property.id}
          className="snap-center w-[88vw] sm:w-[420px] flex-shrink-0"
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  </div>

  {/* Desktop Grid */}
  <div className="hidden lg:grid grid-cols-3 gap-8">
    {featuredProperties.map((property) => (
      <PropertyCard key={property.id} property={property} />
    ))}
  </div>
</div>

          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-flex items-center gap-3 border-2 border-gold-500/40 text-gold-600 hover:bg-gold-500 hover:text-charcoal-900 px-10 py-4 rounded transition-all duration-200 font-medium tracking-wider uppercase text-sm"
            >
              View All Properties
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT BAND ──────────────────────────────── */}
      <section className="py-24 px-6 overflow-hidden" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&q=85"
                alt="Interior"
                className="rounded-xl w-full h-64 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=85"
                alt="Pool"
                className="rounded-xl w-full h-64 object-cover shadow-lg mt-10"
              />
              <img
                src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&q=85"
                alt="Living"
                className="rounded-xl w-full h-52 object-cover shadow-lg -mt-6"
              />
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=85"
                alt="Bedroom"
                className="rounded-xl w-full h-52 object-cover shadow-lg"
              />
            </div>
            {/* Gold accent card */}
            <div
              className="absolute -bottom-6 -right-6 bg-gold-500 text-charcoal-900 rounded-xl p-6 shadow-2xl"
              style={{ width: 160 }}
            >
              <p style={{ fontFamily: '"Playfair Display", serif', fontSize: 36, fontWeight: 700, lineHeight: 1 }}>10+</p>
              <p className="text-xs font-medium tracking-wider uppercase mt-1 opacity-80">Years of Trust</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">About KARYA Realty</p>
            <h2
              className="text-charcoal-900 mb-6"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, lineHeight: 1.15 }}
            >
              Building Dreams,<br />
              <span style={{ fontStyle: 'italic', color: '#c8901a' }}>Crafting Legacies</span>
            </h2>
            <p className="text-charcoal-500 leading-relaxed mb-4">
              Ashwani Vashisht has been synonymous with excellence in Indian luxury real estate for over 18 years. Our philosophy is simple: every client deserves the finest property, matched perfectly to their vision and lifestyle.
            </p>
            <p className="text-charcoal-500 leading-relaxed mb-8">
             From the established residential sectors of Faridabad to the modern high-rise developments along the city’s evolving skyline, we have facilitated some of the region’s most significant property transactions with integrity, expertise, and unmatched market knowledge
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {[['240+', 'Happy Families'], ['₹30 Cr+', 'Total Value'], ['20+', 'Cities Covered']].map(([v, l]) => (
                <div key={l}>
                  <p className="text-gold-500 font-bold text-2xl" style={{ fontFamily: '"Playfair Display", serif' }}>{v}</p>
                  <p className="text-charcoal-400 text-xs tracking-wider">{l}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-charcoal-900 hover:bg-gold-500 text-white hover:text-charcoal-900 px-8 py-4 rounded transition-all duration-200 font-medium tracking-wider text-sm uppercase"
            >
              Our Story
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#f9f5ef' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-3">What We Offer</p>
            <h2
              className="text-charcoal-900"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 700 }}
            >
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-charcoal-100/50"
              >
                <div className="w-14 h-14 rounded-full bg-gold-50 border border-gold-200/50 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                  <svc.icon size={22} className="text-gold-500 group-hover:text-charcoal-900 transition-colors duration-300" />
                </div>
                <h3
                  className="text-charcoal-900 font-semibold mb-3"
                  style={{ fontFamily: '"Playfair Display", serif', fontSize: 18 }}
                >
                  {svc.title}
                </h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER IMAGE ────────────────────────────── */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85"
          alt="Luxury building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/70 flex items-center justify-center">
          <div className="text-center px-6">
            <p
              className="text-white mb-3"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700 }}
            >
              Your Perfect Property Awaits
            </p>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Speak with our expert consultants and take the first step toward your dream address.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-semibold px-10 py-4 rounded transition-all text-sm tracking-widest uppercase"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#1a1613' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-3">Client Stories</p>
            <h2
              className="text-white"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700 }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="relative">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="transition-all duration-500"
                style={{ display: i === testimIndex ? 'block' : 'none' }}
              >
                <div className="text-center px-8 md:px-20">
                  <Quote size={40} className="text-gold-500/30 mx-auto mb-6" />
                  <p
                    className="text-white/80 text-xl leading-relaxed mb-8"
                    style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 22 }}
                  >
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
                      <span className="text-charcoal-900 font-bold text-sm">{t.avatar}</span>
                    </div>
                    <div className="text-left">
                      <p className="text-white font-medium text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

           {/* Dots + Feedback */}
<div className="mt-10 flex flex-col items-center">
  
  {/* Dots */}
  <div className="flex justify-center gap-2">
    {testimonials.map((_, i) => (
      <button
        key={i}
        onClick={() => setTestimIndex(i)}
        className={`carousel-dot ${i === testimIndex ? 'active' : ''}`}
      />
    ))}
  </div>

  {/* Feedback Button
  <Link
    to="/contact"
    className="mt-5 inline-flex items-center gap-3 text-white hover:text-gold-300 text-charcoal-900 font-semibold px-5 py-2 rounded-xl transition-all text-sm tracking-widest uppercase"
  >
    Your Feedback?
  </Link> */}

</div>
          </div>
        </div>
      </section>

      {/* ── LUXURY GALLERY STRIP ────────────────────── */}
      <section className="py-4 overflow-hidden" style={{ background: '#fff' }}>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-6">
          {[
            'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
            'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=400&q=80',
          ].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden shadow-md">
              <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA CONTACT ─────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: '#f9f5ef' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">Let's Talk</p>
          <h2
            className="text-charcoal-900 mb-6"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700 }}
          >
            Begin Your Property Journey Today
          </h2>
          <p className="text-charcoal-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're seeking a first home, an investment portfolio, or a legacy estate - our team is ready to guide you with expertise, integrity, and passion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold px-10 py-4 rounded transition-all text-sm tracking-widest uppercase"
            >
              Book Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 border border-charcoal-200 text-charcoal-700 hover:border-gold-500 hover:text-gold-600 px-10 py-4 rounded transition-all text-sm tracking-widest uppercase"
            >
              <Phone size={15} />
              +91 87508 39802
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
