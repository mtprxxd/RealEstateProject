import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Bed, Bath, Maximize2, ArrowLeft, ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';

export default function PropertyCard({ property }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const images = property.images || [property.image];

  useEffect(() => {
    if (isHovered && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % images.length);
      }, 1800);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isHovered, images.length]);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent(c => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent(c => (c + 1) % images.length);
  };

  return (
    <div
  className="property-card rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl cursor-pointer group transition-all duration-500 hover:-translate-y-2 border border-white/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setCurrent(0); }}
    >
      {/* Image Carousel */}
<div className="relative h-56 sm:h-64 overflow-hidden">
  {images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={property.name}
      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out"
      style={{
        opacity: i === current ? 1 : 0,
        transform: i === current ? 'scale(1.03)' : 'scale(1)',
      }}
      loading="lazy"
    />
  ))}

  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />

  <div className="absolute top-4 left-4">
    <span className="bg-gold-500 text-charcoal-900 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded tracking-wider uppercase">
      {property.tag}
    </span>
  </div>

  {images.length > 1 && (
    <>
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center"
      >
        <ArrowLeft size={14} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center"
      >
        <ArrowRight size={14} />
      </button>
    </>
  )}

  {images.length > 1 && (
    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={(e) => {
            e.stopPropagation();
            setCurrent(i);
          }}
          className={`carousel-dot transition-all duration-300 ${
  i === current ? 'active scale-110' : 'opacity-70'
}`}
        />
      ))}
    </div>
  )}
</div>

      {/* Card Body */}
      <div className="p-6" style={{ fontFamily: '"Jost", sans-serif' }}>
        <h3
          className="text-charcoal-900 font-semibold text-lg leading-tight mb-1 group-hover:text-gold-600 transition-colors"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {property.name}
        </h3>
        <div className="flex items-center gap-1.5 text-charcoal-400 text-sm mb-4">
          <MapPin size={12} className="text-gold-500" />
          <span>{property.location}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-5 py-4 border-t border-b border-charcoal-100 mb-4">
          <div className="flex items-center gap-1.5 text-charcoal-600 text-sm">
            <Bed size={14} className="text-gold-500" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-charcoal-600 text-sm">
            <Bath size={14} className="text-gold-500" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-charcoal-600 text-sm">
            <Maximize2 size={14} className="text-gold-500" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {property.features?.slice(0, 3).map(f => (
            <span
              key={f}
              className="text-xs text-charcoal-500 bg-cream px-2.5 py-1 rounded-full border border-charcoal-100"
            >
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        {/* <button className="mt-5 w-full py-2.5 border border-gold-500/50 text-gold-600 text-sm font-medium tracking-wider rounded hover:bg-gold-500 hover:text-charcoal-900 transition-all duration-200 uppercase">
          Enquire Now
        </button> */}
      </div>
    </div>
  );
}
