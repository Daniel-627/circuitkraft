// app/api/getAllData/route.ts
import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET() {
  const data = await client.fetch(`
    {
      "posts": *[_type == "post"] {
        _id,
        title,
        slug {
          current
        },
        description,
        mainImage,
        publishedAt,
        "author": author->name,
        "latestCategories": categories[]->title,
        tags
      },
      "authors": *[_type == "author"] {
        _id,
        name,
        slug,
        bio,
        image
      },
      "categories": *[_type == "category"] {
        _id,
        title,
        slug,
        image {
          asset -> {
            url
          }
        }
      }
    }
  `);

  return NextResponse.json(data);
}
