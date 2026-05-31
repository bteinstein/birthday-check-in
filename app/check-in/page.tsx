'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    table: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your full name to check in.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/check-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push('/success');
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(5, 71, 52, 0.08)',
    border: '1px solid rgba(201,168,76,0.35)',
    borderRadius: '3px',
    color: '#054734',
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: '1.05rem',
    fontWeight: 400,
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.4rem',
    color: '#054734',
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: '0.85rem',
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ backgroundColor: '#054734' }}
    >
      {/* Back link */}
      <div className="w-full max-w-md mb-6">
        <Link
          href="/"
          style={{
            color: '#B9D6C2',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          ← Back
        </Link>
      </div>

      {/* Card */}
      <div
        className="w-full max-w-md"
        style={{
          backgroundColor: '#F4F1E6',
          borderRadius: '6px',
          padding: '2.5rem 2rem',
          boxShadow: '0 8px 48px rgba(5,71,52,0.35)',
          border: '1px solid rgba(201,168,76,0.3)',
        }}
      >
        {/* Card Header */}
        <div className="text-center mb-6">
          <p
            style={{
              color: '#C9A84C',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginBottom: '0.5rem',
            }}
          >
            80th Birthday Celebration
          </p>
          <h1
            style={{
              color: '#054734',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '2rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              lineHeight: 1.2,
            }}
          >
            Guest Check-In
          </h1>

          {/* Gold divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginTop: '1rem',
            }}
          >
            <div style={{ flex: 1, height: '1px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
            <span style={{ color: '#C9A84C', fontSize: '0.5rem' }}>◆</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="name" style={labelStyle}>
              Full Name <span style={{ color: '#C9A84C' }}>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              disabled={isLoading}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="phone" style={labelStyle}>
              Phone Number
              <span
                style={{
                  marginLeft: '0.4rem',
                  color: '#7FA68C',
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  textTransform: 'none',
                  fontStyle: 'italic',
                  fontWeight: 300,
                }}
              >
                (optional)
              </span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. +234 800 000 0000"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
              disabled={isLoading}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="table" style={labelStyle}>
              Table / Group
              <span
                style={{
                  marginLeft: '0.4rem',
                  color: '#7FA68C',
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  textTransform: 'none',
                  fontStyle: 'italic',
                  fontWeight: 300,
                }}
              >
                (optional)
              </span>
            </label>
            <input
              id="table"
              name="table"
              type="text"
              placeholder="e.g. Table 5 or Family"
              value={formData.table}
              onChange={handleChange}
              style={inputStyle}
              disabled={isLoading}
            />
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <label htmlFor="message" style={labelStyle}>
              Birthday Message
              <span
                style={{
                  marginLeft: '0.4rem',
                  color: '#7FA68C',
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  textTransform: 'none',
                  fontStyle: 'italic',
                  fontWeight: 300,
                }}
              >
                (optional)
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share a warm birthday wish..."
              value={formData.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div
              style={{
                marginBottom: '1.25rem',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(200, 50, 50, 0.1)',
                border: '1px solid rgba(200, 50, 50, 0.3)',
                borderRadius: '3px',
                color: '#8B1A1A',
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '0.95rem',
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '0.9rem 1rem',
              backgroundColor: isLoading ? '#7FA68C' : '#054734',
              color: '#C9A84C',
              border: '1.5px solid #C9A84C',
              borderRadius: '3px',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: isLoading ? 0.75 : 1,
            }}
          >
            {isLoading ? 'Checking In...' : 'Check In'}
          </button>
        </form>
      </div>

      {/* Footer */}
      <p
        style={{
          marginTop: '2rem',
          color: '#7FA68C',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '0.85rem',
          fontStyle: 'italic',
          letterSpacing: '0.06em',
          textAlign: 'center',
        }}
      >
        June 2, 2026 · Mrs. Victoria Oluyemisi Ogunseinde
      </p>
    </main>
  );
}
