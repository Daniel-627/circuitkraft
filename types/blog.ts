// types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  author: Author;
  mainCategory: string;
  tags: string[];
  categories: string[];
  publishedAt: Date;
  updatedAt: Date;
  readingTime: string;
  isFeatured: boolean;
  isPublished: boolean;
  views: number;
  likes: number;
  seo: SEO;
  comments: Comment[];
}

export interface Author {
  name: string;
  bio: string;
  profileImage: string;
  socialLinks: SocialLinks;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: Date;
  likes: number;
  replies?: Comment[];
}



// types.ts
export interface Category {
  _id: string; // Add this to ensure the _id is typed correctly
  title: string;
  slug: string;
}

// types/blog.ts

export interface Post {
  _id: string;
  title: string;
  slug: string;
  description?: string;  // Optional, in case not all posts have a description
  publishedAt: string;   // New field for the published date
  mainImage?: string;    // URL of the main image
  body: any;             // Sanity's rich text structure can be of type `any`
  category: Category;
}


export interface Author {
  _id: string;
  name: string;
  slug: string;
  bio: string;
  image: string;
}

