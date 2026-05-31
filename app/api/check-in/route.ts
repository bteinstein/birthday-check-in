import { redis } from '@/lib/redis';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, table, message } = body;

    if (!name || !String(name).trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    const checkIn = {
      name: String(name).trim(),
      phone: phone ? String(phone).trim() : '',
      table: table ? String(table).trim() : '',
      message: message ? String(message).trim() : '',
      timestamp: new Date().toISOString(),
    };

    await redis.lpush('checkins', JSON.stringify(checkIn));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Check-in error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
