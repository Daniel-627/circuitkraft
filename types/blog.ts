// types/blog.ts
export interface Category {
  _id: string; // Add this to ensure the _id is typed correctly
  title: string;
  slug: string;
  image?: {
    asset: {
      url: string;
    };
  };
  mainImage?: string;
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
  author: string;
  latestCategory: string;
  latestCategories?: string[];
}


export interface Author {
  _id: string;
  name: string;
  slug: string;
  bio: string;
  image: string;
}

