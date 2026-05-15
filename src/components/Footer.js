import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Share2, ExternalLink, Unlink } from 'lucide-react';
import Lord from '../components/khatu_shyam.jpg';

export default function Footer() {
  return (
    <footer style={{ background: '#0f0c0a', fontFamily: '"Jost", sans-serif' }}>
      {/* Top CTA Strip */}
      <div style={{ background: 'linear-gradient(90deg, #a06c10, #c8901a, #e6aa28, #c8901a, #a06c10)' }} className="py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-charcoal-900 font-semibold tracking-wide" style={{ fontFamily: '"Playfair Display", serif', fontSize: 18 }}>
              Ready to Find Your Dream Property?
            </p>
            <p className="text-charcoal-800 text-sm opacity-80">Let Ashwini Vashisht guide you through every step.</p>
          </div>
          <Link
            to="/contact"
            className="bg-charcoal-900 text-gold-400 px-8 py-3 rounded text-sm font-medium tracking-widest uppercase hover:bg-charcoal-800 transition-colors whitespace-nowrap"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src = {Lord} alt = '' variant="light" size="sm"className="h-36 sm:h-44 md:h-48 w-auto rounded-lg object-cover" />
          <p className="mt-5 text-white/50 text-sm leading-relaxed">
            India's most trusted luxury real estate consultancy. Decades of expertise in premium residential and commercial properties across India's finest addresses.
          </p>
          <div className="flex gap-4 mt-6">
            {[Globe, Share2, ExternalLink, Unlink].map((Icon, i) => (
              <a
                key={i}
                href="/"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/40 transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', to: '/' },
              { label: 'Properties', to: '/properties' },
              { label: 'About Us', to: '/about' },
              { label: 'Our Services', to: '/services' },
              { label: 'Contact', to: '/contact' },
            ].map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/50 hover:text-gold-400 text-sm transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-6">Services</h4>
          <ul className="space-y-3">
            {[
              'Luxury Residential',
              'Commercial Spaces',
              'Property Investment',
              'Legal Advisory',
              'Interior Consultation',
              'NRI Services',
            ].map(s => (
              <li key={s}>
                <span className="text-white/50 text-sm tracking-wide">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold-400 text-xs font-medium tracking-widest uppercase mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-gold-500 mt-0.5 shrink-0" />
              <span className="text-white/50 text-sm leading-relaxed">
                Sec-7, Faridabad,<br />Haryana 121006
              </span>
            </li>
            <li className="flex items-center gap-3 ">
              <Phone size={15} className="text-gold-500 shrink-0" />
              <span className="text-white/50 text-sm">+91 87508 39802 </span>
            </li >
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-gold-500 shrink-0" />
              <span className="text-white/50 text-sm">Vashisht.ashwani@gmail.com</span>
            </li>
          </ul>
          <div className="mt-6 p-4 rounded border border-gold-500/15 bg-white/3">
            <p className="text-white/30 text-xs tracking-wider uppercase mb-1">Office Hours</p>
            <p className="text-white/60 text-sm">Mon – Sat: 9:30 AM – 7:00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs tracking-wide">
            © {new Date().getFullYear()} KARYA Real Estate. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="/" className="text-white/25 hover:text-gold-500/60 text-xs tracking-wide transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
