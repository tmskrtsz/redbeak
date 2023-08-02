import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  const token = process.env.REVALIDATION_TOKEN;

  if (secret !== token) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  const tag = req.nextUrl.searchParams.get('tag');
  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
