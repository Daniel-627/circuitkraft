// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { blogPosts } from './../../../data/blog';

export async function GET() {
  return NextResponse.json(blogPosts);
}
