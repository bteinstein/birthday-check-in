import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const password = searchParams.get('password');
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const raw = await kv.lrange<string>('checkins', 0, -1);
    const checkIns = raw.map((item) =>
      typeof item === 'string' ? JSON.parse(item) : item
    );

    const header = ['Name', 'Phone', 'Table/Group', 'Message', 'Timestamp'];
    const rows = checkIns.map((g: { name: string; phone?: string; table?: string; message?: string; timestamp: string }) => [
      `"${(g.name || '').replace(/"/g, '""')}"`,
      `"${(g.phone || '').replace(/"/g, '""')}"`,
      `"${(g.table || '').replace(/"/g, '""')}"`,
      `"${(g.message || '').replace(/"/g, '""')}"`,
      `"${g.timestamp}"`,
    ]);

    const csv = [header.join(','), ...rows.map((r) => r.join(','))].join('\n');

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="birthday-checkins.csv"',
      },
    });
  } catch (err) {
    console.error('Export error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
