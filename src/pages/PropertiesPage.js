import React, { useState } from 'react';
import { SlidersHorizontal, Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { featuredProperties } from '../utils/data';

const types = ['All', 'Residential', 'Condominiums','Luxury Home', 'Apartments', 'Multiple Storey', 'Builder Floors'];
const cities = ['All Cities', 'Noida','Faridabad', 'Greater faridabad',];

export default function PropertiesPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [search, setSearch] = useState('');

  const allProperties = [
    ...featuredProperties,
    {
      id: 7,
      name: 'RPS Group',
      location: 'Sector-88, Faridabad',
      type: 'Residential',
      area: '2,800 sq ft',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85',
        'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=900&q=85',
      ],
      tag: 'Premium',
      features: ['City View', 'Smart Home', 'Rooftop Deck'],
    },
    {
      id: 8,
      name: 'ERA Landmarks',
      location: 'Sector-76, Faridabad',
      type: 'Heritage Complex',
      beds: null,
      baths: null,
      area: '14,000 sq ft',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=85',
      ],
      tag: 'Heritage',
      features: ['Custom Design','Wide Doorways','Long-Term commitment'],
    },
  ];

  const filtered = allProperties.filter(p => {
    const typeMatch = selectedType === 'All' || p.type === selectedType;
    const cityMatch = selectedCity === 'All Cities' || p.location.includes(selectedCity);
    const searchMatch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    return typeMatch && cityMatch && searchMatch;
  });

  return (
    <div style={{ paddingTop: 88, background: '#f9f5ef', minHeight: '100vh', fontFamily: '"Jost", sans-serif' }}>
      {/* Page Header */}
      <div
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1613 0%, #2a2520 100%)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1600&q=70"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative">
          <p className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-3">Our Portfolio</p>
          <h1
            className="text-white mb-3"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700 }}
          >
            Exceptional Properties
          </h1>
          <p className="text-white/50 text-sm">Discover India's finest luxury real estate</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-charcoal-100/50 p-6">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-60">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-charcoal-200 rounded-lg text-sm text-charcoal-700 focus:outline-none focus:border-gold-400"
              />
            </div>

            {/* City */}
            <select
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              className="px-4 py-2.5 border border-charcoal-200 rounded-lg text-sm text-charcoal-700 focus:outline-none focus:border-gold-400 bg-white"
            >
              {cities.map(c => <option key={c}>{c}</option>)}
            </select>

            {/* Type */}
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="px-4 py-2.5 border border-charcoal-200 rounded-lg text-sm text-charcoal-700 focus:outline-none focus:border-gold-400 bg-white"
            >
              {types.map(t => <option key={t}>{t}</option>)}
            </select>

            <div className="flex items-center gap-2 text-charcoal-400 text-sm">
              <SlidersHorizontal size={15} />
              <span>{filtered.length} Properties</span>
            </div>
          </div>

          {/* Type Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {types.map(t => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`text-xs px-4 py-1.5 rounded-full border transition-all ${
                  selectedType === t
                    ? 'bg-gold-500 border-gold-500 text-charcoal-900 font-semibold'
                    : 'border-charcoal-200 text-charcoal-500 hover:border-gold-400 hover:text-gold-600'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-charcoal-400 text-lg">No properties found matching your criteria.</p>
            <button
              onClick={() => { setSelectedType('All'); setSelectedCity('All Cities'); setSearch(''); }}
              className="mt-4 text-gold-500 text-sm underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
