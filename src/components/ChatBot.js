import React, { useState, useRef, useEffect } from 'react';
import { featuredProperties } from '../utils/data';

console.log('KEY:', process.env.REACT_APP_GEMINI_API_KEY);

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY

const SYSTEM_CONTEXT = `You are a luxury real estate assistant for KARYA, a premium property agency in India run by Ashwanni Vashisht. Be concise, warm, and professional.

Our featured properties:
${featuredProperties.map(p =>
  `- ${p.name} | ${p.location} | ${p.type} | ${p.beds} beds, ${p.baths} baths | ${p.area} | Features: ${p.features.join(', ')}`
).join('\n')}

Services: Property buying/selling, NRI investment advisory, luxury rental, property management, interior consultation.
Contact: Use the Contact page or call for site visits.
Only answer questions related to real estate, our properties, and services. For unrelated questions, politely redirect.`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Welcome to KARYA! 👋 I'm your personal property advisor. Ask me about our luxury properties, locations, or services.",
      },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Build conversation history for Gemini
      const history = messages
        .filter(m => m.role !== 'assistant' || messages.indexOf(m) !== 0) // skip greeting
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.text }],
        }));

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_CONTEXT }] },
            contents: [
              ...history,
              { role: 'user', parts: [{ text }] },
            ],
            generationConfig: {
              maxOutputTokens: 300,
              temperature: 0.7,
            },
          }),
        }
      );

      const data = await response.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Hi! Are you looking for an apartment, villa, or commercial property?.";

      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', text: 'Something went wrong. Please contact us directly.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #c8901a, #e8a820)' }}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="22" height="22" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round">
            <line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/>
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            background: '#1a1a1a',
            border: '1px solid rgba(200,144,26,0.3)',
            maxHeight: '520px',
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, #c8901a, #e8a820)' }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: 'rgba(0,0,0,0.2)', color: '#1a1a1a' }}
            >
              AV
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: '#1a1a1a', fontFamily: '"Jost", sans-serif' }}>
                AV Realty Advisor
              </p>
              <p className="text-xs" style={{ color: 'rgba(0,0,0,0.6)' }}>
                {loading ? 'Typing…' : 'Online · Typically replies instantly'}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
            style={{ minHeight: 0, maxHeight: '340px' }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="text-sm px-4 py-2.5 rounded-2xl max-w-[80%] leading-relaxed"
                  style={
                    msg.role === 'user'
                      ? {
                          background: 'linear-gradient(135deg, #c8901a, #e8a820)',
                          color: '#1a1a1a',
                          borderBottomRightRadius: 4,
                          fontFamily: '"Jost", sans-serif',
                        }
                      : {
                          background: '#2a2a2a',
                          color: '#e5e5e5',
                          borderBottomLeftRadius: 4,
                          fontFamily: '"Jost", sans-serif',
                          border: '1px solid rgba(200,144,26,0.15)',
                        }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3 rounded-2xl text-sm"
                  style={{
                    background: '#2a2a2a',
                    border: '1px solid rgba(200,144,26,0.15)',
                    borderBottomLeftRadius: 4,
                  }}
                >
                  <span style={{ color: '#c8901a' }}>●</span>
                  <span style={{ color: '#c8901a', opacity: 0.6 }}> ● ●</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="px-4 py-3 flex items-center gap-2"
            style={{ borderTop: '1px solid rgba(200,144,26,0.2)', background: '#111' }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about properties…"
              className="flex-1 text-sm bg-transparent outline-none"
              style={{ color: '#e5e5e5', fontFamily: '"Jost", sans-serif' }}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity"
              style={{
                background: 'linear-gradient(135deg, #c8901a, #e8a820)',
                opacity: !input.trim() || loading ? 0.4 : 1,
              }}
            >
              <svg width="14" height="14" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}