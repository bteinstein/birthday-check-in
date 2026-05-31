import { kv } from '@vercel/kv';
import Link from 'next/link';
import AdminLoginForm from './login-form';

interface CheckIn {
  name: string;
  phone?: string;
  table?: string;
  message?: string;
  timestamp: string;
}

interface AdminPageProps {
  searchParams: { password?: string };
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = searchParams.password;
  const isAuthenticated = adminPassword && providedPassword === adminPassword;

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#054734',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
  };

  if (!isAuthenticated) {
    return (
      <main style={containerStyle}>
        <AdminLoginForm />
      </main>
    );
  }

  let checkIns: CheckIn[] = [];
  try {
    const raw = await kv.lrange<string>('checkins', 0, -1);
    checkIns = raw.map((item) =>
      typeof item === 'string' ? JSON.parse(item) : item
    );
  } catch {
    // KV not configured or empty
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    color: '#C9A84C',
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#054734',
        padding: '2rem 1rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ ...labelStyle, marginBottom: '0.4rem' }}>
            80th Birthday Celebration
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              color: '#F4F1E6',
              fontSize: '2.25rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginBottom: '0.5rem',
            }}
          >
            Guest List
          </h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              justifyContent: 'center',
              marginBottom: '0.75rem',
            }}
          >
            <div style={{ width: '60px', height: '1px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
            <span style={{ color: '#C9A84C', fontSize: '0.5rem' }}>◆</span>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#C9A84C', opacity: 0.5 }} />
          </div>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              color: '#B9D6C2',
              fontSize: '1rem',
              marginBottom: '1.25rem',
            }}
          >
            {checkIns.length} guest{checkIns.length !== 1 ? 's' : ''} checked in
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`/api/admin/export?password=${encodeURIComponent(providedPassword!)}`}
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.5rem',
                backgroundColor: 'transparent',
                color: '#C9A84C',
                border: '1.5px solid #C9A84C',
                borderRadius: '3px',
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Export CSV
            </a>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.5rem',
                color: '#B9D6C2',
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '0.9rem',
                letterSpacing: '0.1em',
                textDecoration: 'none',
              }}
            >
              ← Home
            </Link>
          </div>
        </div>

        {/* Table */}
        {checkIns.length === 0 ? (
          <div
            style={{
              backgroundColor: '#F4F1E6',
              borderRadius: '6px',
              padding: '3rem 2rem',
              textAlign: 'center',
              border: '1px solid rgba(201,168,76,0.3)',
            }}
          >
            <p
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                color: '#7FA68C',
                fontSize: '1.1rem',
                fontStyle: 'italic',
              }}
            >
              No guests have checked in yet.
            </p>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#F4F1E6',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid rgba(201,168,76,0.3)',
              boxShadow: '0 8px 48px rgba(5,71,52,0.35)',
            }}
          >
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#054734' }}>
                    {['#', 'Name', 'Phone', 'Table / Group', 'Message', 'Time'].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: '0.85rem 1rem',
                          textAlign: 'left',
                          ...labelStyle,
                          color: '#C9A84C',
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {checkIns.map((guest, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: '1px solid rgba(201,168,76,0.15)',
                        backgroundColor: i % 2 === 0 ? '#F4F1E6' : 'rgba(185,214,194,0.15)',
                      }}
                    >
                      <td
                        style={{
                          padding: '0.85rem 1rem',
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          color: '#7FA68C',
                          fontSize: '0.9rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {checkIns.length - i}
                      </td>
                      <td
                        style={{
                          padding: '0.85rem 1rem',
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          color: '#054734',
                          fontSize: '1rem',
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {guest.name}
                      </td>
                      <td
                        style={{
                          padding: '0.85rem 1rem',
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          color: '#0F6B4F',
                          fontSize: '0.95rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {guest.phone || '—'}
                      </td>
                      <td
                        style={{
                          padding: '0.85rem 1rem',
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          color: '#0F6B4F',
                          fontSize: '0.95rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {guest.table || '—'}
                      </td>
                      <td
                        style={{
                          padding: '0.85rem 1rem',
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          color: '#054734',
                          fontSize: '0.95rem',
                          maxWidth: '280px',
                          fontStyle: guest.message ? 'italic' : 'normal',
                        }}
                      >
                        {guest.message || '—'}
                      </td>
                      <td
                        style={{
                          padding: '0.85rem 1rem',
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          color: '#7FA68C',
                          fontSize: '0.85rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {new Date(guest.timestamp).toLocaleString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
