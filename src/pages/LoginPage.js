import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const result = login({ email: form.email, password: form.password });
      if (result.success) {
        navigate('/');
      } else {
        setError(result.message);
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ fontFamily: '"Jost", sans-serif' }}
    >
      {/* Left Panel — Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=90"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <Logo variant="light" size="md" />
          <p
            className="text-white/80 mt-8 text-2xl leading-snug"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 28 }}
          >
            "Where Every Property<br />Tells a Story of Luxury"
          </p>
          <p className="text-white/40 text-sm mt-3">— Ashwini Vashisht, Founder</p>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 py-10 md:py-12" style={{ background: '#fdfaf5' }}>
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-10 flex justify-center">
            <Logo variant="dark" size="md" />
          </div>

          <div className="mb-10">
            <h2
              className="text-charcoal-900 mb-2"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 5vw, 34px)', fontWeight: 700 }}
            >
              Welcome Back
            </h2>
            <p className="text-charcoal-400 text-sm">Sign in to access your exclusive property portfolio.</p>
          </div>

          {/* Demo credentials hint */}
          <div className="mb-6 p-4 rounded-xl bg-gold-50 border border-gold-200/60 flex items-start gap-3">
            <CheckCircle size={15} className="text-gold-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-charcoal-700 text-xs font-medium mb-0.5">Demo Account</p>
              <p className="text-charcoal-500 text-xs">Email: <span className="font-mono font-medium">demo@avrealty.in</span></p>
              <p className="text-charcoal-500 text-xs">Password: <span className="font-mono font-medium">Demo@123</span></p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full px-4 py-3.5 border border-charcoal-200 rounded-lg text-sm text-charcoal-800 placeholder-charcoal-300 bg-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase">
                  Password
                </label>
                <button type="button" className="text-xs text-gold-500 hover:text-gold-600 transition-colors">
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3.5 pr-12 border border-charcoal-200 rounded-lg text-sm text-charcoal-800 placeholder-charcoal-300 bg-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(s => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-600"
                >
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                <AlertCircle size={15} />
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-charcoal-900 font-semibold py-4 rounded-lg transition-all duration-200 text-sm tracking-wider uppercase mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-charcoal-400 text-sm mt-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-gold-500 hover:text-gold-600 font-medium transition-colors">
              Create Account
            </Link>
          </p>

          {/* Divider */}
          <div className="mt-10 pt-8 border-t border-charcoal-100 text-center">
            <p className="text-charcoal-300 text-xs tracking-wide">
              Protected by industry-standard 256-bit encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
