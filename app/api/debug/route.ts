import { NextResponse } from 'next/server';

export async function GET() {
  const vars = Object.keys(process.env)
    .filter((k) => k.includes('REDIS') || k.includes('KV') || k.includes('STORAGE') || k.includes('UPSTASH'))
    .reduce((acc: Record<string, string>, k) => {
      acc[k] = process.env[k] ? '✓ set' : '✗ missing';
      return acc;
    }, {});

  return NextResponse.json(vars);
}
