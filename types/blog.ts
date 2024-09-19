// types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  author: Author;
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
