'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter the admin password.');
      return;
    }
    const params = new URLSearchParams(window.location.search);
    params.set('password', password);
    router.push(`/admin?${params.toString()}`);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(5,71,52,0.08)',
    border: '1px solid rgba(201,168,76,0.35)',
    borderRadius: '3px',
    color: '#054734',
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: '1.05rem',
    outline: 'none',
  };

  return (
    <div
      style={{
        backgroundColor: '#F4F1E6',
        borderRadius: '6px',
        padding: '2.5rem 2rem',
        boxShadow: '0 8px 48px rgba(5,71,52,0.35)',
        border: '1px solid rgba(201,168,76,0.3)',
        width: '100%',
        maxWidth: '24rem',
      }}
    >
      <h2
        style={{
          color: '#054734',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '1.75rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          marginBottom: '0.5rem',
          textAlign: 'center',
        }}
      >
        Admin Access
      </h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          marginBottom: '1.75rem',
        }}
      >
        <div style={{ flex: 1, height: '1px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
        <span style={{ color: '#C9A84C', fontSize: '0.5rem' }}>◆</span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.25rem' }}>
          <label
            htmlFor="admin-password"
            style={{
              display: 'block',
              marginBottom: '0.4rem',
              color: '#054734',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            placeholder="Enter admin password"
            style={inputStyle}
            autoFocus
          />
        </div>

        {error && (
          <p
            style={{
              marginBottom: '1rem',
              color: '#8B1A1A',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '0.95rem',
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.85rem 1rem',
            backgroundColor: '#054734',
            color: '#C9A84C',
            border: '1.5px solid #C9A84C',
            borderRadius: '3px',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
}
