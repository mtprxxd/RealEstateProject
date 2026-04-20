import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ChatBot from './components/ChatBot';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/properties" element={<Layout><PropertiesPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="*" element={
            <Layout>
              <div className="flex flex-col items-center justify-center min-h-screen text-center px-6" style={{ background: '#f9f5ef' }}>
                <p style={{ fontFamily: '"Playfair Display", serif', fontSize: 120, color: '#c8901a', lineHeight: 1 }}>404</p>
                <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-2xl font-semibold text-charcoal-900 mb-3">Page Not Found</h2>
                <a href="/" className="mt-4 bg-gold-500 text-charcoal-900 font-semibold px-8 py-3 rounded text-sm tracking-wider uppercase">Back to Home</a>
              </div>
            </Layout>
          } />
        </Routes>
         <ChatBot />
      </AuthProvider>
    </BrowserRouter>
  );
}
