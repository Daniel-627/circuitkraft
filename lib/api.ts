import { client } from '@/sanity/lib/client';

import { Category, Post, Author } from '@/types/blog'



// Fetch all posts
export const fetchAllPosts = async (): Promise<Post[]> => {
  const query = 
  `*[_type == "post"]{
    _id,
    title,
    description,
    "slug": slug.current,
    content
  }`;

  const posts = await client.fetch(query);
  return posts;
};

// lib/api.ts

// Fetch a single post by slug
export const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,  // Fetching the image URL
    body  // Fetch the body content
  }`;

  const post = await client.fetch(query, { slug });
  return post;
};


// lib/api.ts

// Fetch all categories from Sanity
export const fetchAllCategories = async (): Promise<Category[]> => {
  const query = 
  `*[_type == "category"]{
    _id,
    title,
    "slug": slug.current
  }`;

  const categories = await client.fetch(query);
  return categories;
};

// Fetch all posts in a specific category using the category slug
// lib/api.ts
export async function fetchPostsByCategorySlug(categorySlug: string): Promise<Post[]> {
  const query =`*[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)]{
    _id,
    title,
    slug,
    description,
    publishedAt
  }`;

  const posts = await client.fetch(query, { categorySlug });
  
  // Log the full posts response
  

  return posts;
}


