import { client } from '@/sanity/lib/client';

import { Category, Post, Author } from '@/types/blog'

export const fetchCategories = async (): Promise<Category[]> => {
  const query = 
  `*[_type == "category"]{
    _id,
    title,
    "slug": slug.current
  }`
  ;

  const categories = await client.fetch(query);
  return categories;
};

// lib/api.ts
export const fetchPostsByCategory = async (categorySlug: string) => {
  const query = `*[_type == "post" && category->slug.current == $categorySlug]{
    _id,
    title,
    "slug": slug.current,
    content,
    category->{title, "slug": slug.current} // Ensure category data is linked
  }`;

  const posts = await client.fetch(query, { categorySlug });
  return posts;
};



export const fetchAuthors = async (): Promise<Author[]> => {
  const query = `*[_type == "author"]{
    _id,
    name,
    bio,
    "slug": slug.current,
    "image": image.asset->url
  }`;

  const authors = await client.fetch(query);
  return authors;
};

export const fetchPostsByAuthor = async (authorSlug: string): Promise<Post[]> => {
  const query = `*[_type == "post" && author->slug.current == $authorSlug]{
    _id,
    title,
    "slug": slug.current,
    content
  }`;

  const posts = await client.fetch(query, { authorSlug });
  return posts;
};

export const fetchAllPosts = async (): Promise<Post[]> => {
  const query = 
  `*[_type == "post"]{
    _id,
    title,
    description,
    "slug": slug.current,
    content
  }`
  ;

  const posts = await client.fetch(query);
  return posts;
};