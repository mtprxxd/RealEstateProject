import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Properties', to: '/properties' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate('/');
  };

  const isActive = (to) => location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-charcoal-900/96 backdrop-blur-md border-b border-gold-500/20 py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ fontFamily: '"Jost", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <Logo variant="light" size="sm" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                isActive(link.to)
                  ? 'text-gold-400'
                  : 'text-white/80 hover:text-gold-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 text-white/80 hover:text-gold-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
                  <span className="text-sm font-semibold text-charcoal-900">
                    {user.fullName?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium">{user.fullName?.split(' ')[0]}</span>
                <ChevronDown size={14} />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-charcoal-800 border border-gold-500/20 rounded-lg shadow-2xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-white text-sm font-medium">{user.fullName}</p>
                    <p className="text-white/50 text-xs">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-gold-400 hover:bg-white/5 transition-colors text-sm"
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-white/80 hover:text-gold-400 tracking-wider uppercase transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium bg-gold-500 hover:bg-gold-600 text-charcoal-900 px-5 py-2 rounded tracking-wider uppercase transition-all duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-charcoal-900/98 backdrop-blur-xl border-t border-gold-500/20">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium tracking-widest uppercase py-2 border-b border-white/5 ${
                  isActive(link.to) ? 'text-gold-400' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <button
                onClick={handleLogout}
                className="mt-2 flex items-center gap-2 text-gold-400 text-sm"
              >
                <LogOut size={14} /> Sign Out
              </button>
            ) : (
              <div className="flex gap-3 mt-2">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center border border-gold-500/40 text-white/80 text-sm py-2 rounded tracking-wider"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center bg-gold-500 text-charcoal-900 text-sm py-2 rounded font-medium tracking-wider"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
