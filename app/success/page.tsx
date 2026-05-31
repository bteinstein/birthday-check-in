import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center"
      style={{ backgroundColor: '#054734' }}
    >
      {/* Gold Checkmark Ornament */}
      <div
        style={{
          width: '6rem',
          height: '6rem',
          borderRadius: '50%',
          backgroundColor: '#0F6B4F',
          border: '1.5px solid #C9A84C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          boxShadow: '0 0 32px rgba(201,168,76,0.2)',
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18.5L14.5 26L29 11"
            stroke="#C9A84C"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Welcome Message */}
      <h1
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
          fontWeight: 600,
          color: '#F4F1E6',
          letterSpacing: '0.04em',
          lineHeight: 1.25,
          marginBottom: '0.75rem',
          maxWidth: '26rem',
        }}
      >
        Welcome! You're checked in.
      </h1>

      <p
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '1.2rem',
          fontWeight: 300,
          color: '#B9D6C2',
          letterSpacing: '0.06em',
          fontStyle: 'italic',
          marginBottom: '2.5rem',
        }}
      >
        Enjoy the celebration!
      </p>

      {/* Gold Divider */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          width: '100%',
          maxWidth: '20rem',
          marginBottom: '2.5rem',
        }}
      >
        <div style={{ flex: 1, height: '1px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
        <span style={{ color: '#C9A84C', fontSize: '0.5rem' }}>◆</span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
      </div>

      {/* Event Details */}
      <div
        style={{
          backgroundColor: 'rgba(15, 107, 79, 0.4)',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '4px',
          padding: '1.5rem 2rem',
          maxWidth: '22rem',
          width: '100%',
          marginBottom: '3rem',
        }}
      >
        <p
          style={{
            color: '#C9A84C',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: '0.6rem',
          }}
        >
          In honour of
        </p>
        <p
          style={{
            color: '#F4F1E6',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: '0.03em',
            lineHeight: 1.35,
            marginBottom: '0.5rem',
          }}
        >
          Mrs. Victoria Oluyemisi Ogunseinde
        </p>
        <p
          style={{
            color: '#C9A84C',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.1em',
          }}
        >
          June 2, 2026
        </p>
      </div>

      {/* Back to Home */}
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 2.5rem',
          border: '1px solid rgba(201,168,76,0.5)',
          color: '#B9D6C2',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '0.9rem',
          fontWeight: 500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderRadius: '2px',
          transition: 'all 0.3s ease',
        }}
      >
        Return to Home
      </Link>
    </main>
  );
}
