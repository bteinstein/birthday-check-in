import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center"
      style={{ backgroundColor: '#054734' }}
    >
      {/* Monogram */}
      <div className="mb-8 flex items-center justify-center">
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: '9rem',
            height: '9rem',
            backgroundColor: '#0F6B4F',
            border: '1.5px solid #C9A84C',
            boxShadow: '0 0 40px rgba(201,168,76,0.15)',
          }}
        >
          <span
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '6rem',
              lineHeight: 1,
              color: '#C9A84C',
              fontWeight: 300,
              letterSpacing: '0.02em',
              paddingBottom: '0.25rem',
            }}
          >
            V
          </span>
        </div>
      </div>

      {/* Event Label */}
      <p
        className="mb-2 tracking-[0.25em] uppercase"
        style={{
          color: '#C9A84C',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '0.85rem',
          fontWeight: 500,
          letterSpacing: '0.3em',
        }}
      >
        80th Birthday Celebration
      </p>

      {/* Gold Divider */}
      <div className="gold-divider my-4 w-full max-w-xs mx-auto">
        <span className="gold-divider-diamond">◆</span>
      </div>

      {/* In Honour Of */}
      <p
        className="mb-3 italic"
        style={{
          color: '#B9D6C2',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '1.1rem',
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}
      >
        In honour of
      </p>

      {/* Celebrant Name */}
      <h1
        className="mb-4 leading-tight"
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
          fontWeight: 600,
          color: '#F4F1E6',
          letterSpacing: '0.03em',
          maxWidth: '28rem',
        }}
      >
        Mrs. Victoria Oluyemisi Ogunseinde
      </h1>

      {/* Date */}
      <p
        className="mb-8"
        style={{
          color: '#C9A84C',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '1.25rem',
          fontWeight: 400,
          letterSpacing: '0.12em',
        }}
      >
        June 2, 2026
      </p>

      {/* Gold Divider */}
      <div className="gold-divider mb-10 w-full max-w-xs mx-auto">
        <span className="gold-divider-diamond">◆</span>
      </div>

      {/* Check In Button */}
      <Link
        href="/check-in"
        style={{
          display: 'inline-block',
          padding: '0.85rem 2.8rem',
          border: '1.5px solid #C9A84C',
          color: '#C9A84C',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '1.05rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease',
          borderRadius: '2px',
        }}
        onMouseOver={undefined}
        className="hover:bg-gold hover:text-emerald-deep transition-all duration-300"
      >
        Check In
      </Link>

      {/* Footer note */}
      <p
        className="mt-12"
        style={{
          color: '#7FA68C',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '0.85rem',
          fontWeight: 300,
          letterSpacing: '0.08em',
          fontStyle: 'italic',
        }}
      >
        Please check in upon arrival
      </p>
    </main>
  );
}
