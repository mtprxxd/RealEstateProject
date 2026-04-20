import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';

const passwordRules = [
  { label: 'At least 8 characters', test: p => p.length >= 8 },
  { label: 'One uppercase letter', test: p => /[A-Z]/.test(p) },
  { label: 'One number', test: p => /[0-9]/.test(p) },
];

export default function SignupPage() {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', password: '', confirm: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.password || !form.confirm) {
      setError('Please fill in all fields.'); return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.'); return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.'); return;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      setError('Please enter a valid 10-digit phone number.'); return;
    }
    setLoading(true);
    setTimeout(() => {
      const result = register({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });
      if (result.success) {
        setSuccess(true);
        setTimeout(() => navigate('/'), 1500);
      } else {
        setError(result.message);
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: '"Jost", sans-serif' }}>
      {/* Left Panel */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=90"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent" />
        <div className="absolute top-10 left-10">
          <Logo variant="light" size="sm" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="space-y-4">
            {[
              'Access to exclusive luxury listings',
              'Personalised property recommendations',
              'Priority consultation with our experts',
              'Market insights & investment reports',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                  <CheckCircle size={12} className="text-charcoal-900" />
                </div>
                <p className="text-white/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 overflow-y-auto" style={{ background: '#fdfaf5' }}>
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-10 flex justify-center">
            <Logo variant="dark" size="md" />
          </div>

          {success ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gold-50 border-2 border-gold-300 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={36} className="text-gold-500" />
              </div>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700 }} className="text-charcoal-900 mb-2">
                Welcome to AV Realty!
              </h2>
              <p className="text-charcoal-400 text-sm">Your account has been created. Redirecting you now…</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2
                  className="text-charcoal-900 mb-2"
                  style={{ fontFamily: '"Playfair Display", serif', fontSize: 32, fontWeight: 700 }}
                >
                  Create Account
                </h2>
                <p className="text-charcoal-400 text-sm">Join India's most exclusive property network.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Rajesh Kumar"
                    className="w-full px-4 py-3.5 border border-charcoal-200 rounded-lg text-sm text-charcoal-800 placeholder-charcoal-300 bg-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3.5 border border-charcoal-200 rounded-lg text-sm text-charcoal-800 placeholder-charcoal-300 bg-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Phone Number</label>
                  <div className="flex">
                    <span className="px-3 py-3.5 bg-charcoal-100 border border-r-0 border-charcoal-200 rounded-l-lg text-sm text-charcoal-500">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      maxLength={10}
                      className="flex-1 px-4 py-3.5 border border-charcoal-200 rounded-r-lg text-sm text-charcoal-800 placeholder-charcoal-300 bg-white focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/10 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPwd ? 'text' : 'password'}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
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
                  {/* Password strength */}
                  {form.password && (
                    <div className="mt-2 space-y-1">
                      {passwordRules.map((rule, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${rule.test(form.password) ? 'bg-green-500' : 'bg-charcoal-200'}`} />
                          <span className={`text-xs ${rule.test(form.password) ? 'text-green-600' : 'text-charcoal-400'}`}>
                            {rule.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xs font-medium text-charcoal-700 tracking-wider uppercase mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className={`w-full px-4 py-3.5 border rounded-lg text-sm text-charcoal-800 placeholder-charcoal-300 bg-white focus:outline-none focus:ring-2 transition-all ${
                      form.confirm && form.confirm !== form.password
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-400/10'
                        : 'border-charcoal-200 focus:border-gold-400 focus:ring-gold-400/10'
                    }`}
                  />
                  {form.confirm && form.confirm !== form.password && (
                    <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                  )}
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                    <AlertCircle size={15} />
                    {error}
                  </div>
                )}

                {/* Terms */}
                <p className="text-charcoal-400 text-xs leading-relaxed">
                  By creating an account, you agree to our{' '}
                  <a href="/" className="text-gold-500 hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="/" className="text-gold-500 hover:underline">Privacy Policy</a>.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-charcoal-900 font-semibold py-4 rounded-lg transition-all duration-200 text-sm tracking-wider uppercase"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin" />
                  ) : (
                    <>
                      Create Account
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-charcoal-400 text-sm mt-8">
                Already have an account?{' '}
                <Link to="/login" className="text-gold-500 hover:text-gold-600 font-medium transition-colors">
                  Sign In
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
