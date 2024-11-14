import { client } from '@/sanity/lib/client';

import { Category, Post, Author } from '@/types/blog'



// Fetch all posts
export const fetchAllPosts = async (): Promise<Post[]> => {
  const query = 
  `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "author": author->name,
    "latestCategory": categories[-1]->title,
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
    "author": author->name,
    "latestCategory": categories[-1]->title,
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
    "author": author->name,
    "latestCategory": categories[-1]->title,
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
    "author": author->name,
    "latestCategory": categories[-1]->title,
    description,
    publishedAt
  }`;

  const posts = await client.fetch(query, { categorySlug });
  
  // Log the full posts response
  

  return posts;
}


export async function fetchAllAuthors() {
  // Query all authors with their _id, name, slug, and bio
  const query = `
    *[_type == "author"]{
      _id,
      name,
      "author": author->name,
      "latestCategory": categories[-1]->title,
      "slug": slug.current,
      bio
    }
  `;
  
  const authors = await client.fetch(query);
  return authors;
}

export async function fetchPostsByAuthorSlug(authorSlug: string) {
  // Replace this with your actual query to Sanity
  const query = `*[_type == "post" && author->slug.current == $slug]{
    _id,
    title,
    description,
    "author": author->name,
    "latestCategory": categories[-1]->title,
    publishedAt,
    slug {
      current
    }
  }`;

  const params = { slug: authorSlug };
  const posts = await client.fetch(query, params);
  return posts;
}


export async function fetchPostsBySearchQuery(query: string): Promise<Post[]> {
  const results = await client.fetch(
    `*[_type == "post" && (title match $query || 
      $query in categories[]->title || 
      $query in author->name || 
      $query in tags[])] {
        _id,
        title,
        slug {
          current
        },
        description,
        mainImage,
        publishedAt,
        author->{
          name,
          slug
        },
        categories[]->{
          title,
          slug
        },
        tags
      }`,
    { query: `${query}*` }
  );

  return results;
}

export async function fetchMostRecentPopularPost(): Promise<Post | null> {
  const posts = await client.fetch(
    `*[_type == "post" && "Popular" in categories[]->title] | order(publishedAt desc)[0] {
      _id,
      title,
      slug,
      "author": author->name,
      "latestCategory": categories[-1]->title,
      description,
      mainImage{
        asset->{
          url
        }
      },
      publishedAt,
      categories[]->{
        title
      }
    }`
  );
  return posts ? posts : null;
}

export async function fetchPopularPosts(startIndex = 0, limit = 2): Promise<Post[]> {
  const query = `
    *[_type == "post" && "Popular" in categories[]->title] | order(publishedAt desc) [${startIndex}...${startIndex + limit}] {
      _id,
      title,
      slug,
      mainImage{asset->{url}},
      description,
      publishedAt,
      "author": author->name,
      "latestCategory": categories[-1]->title,
    }
  `;
  const posts = await client.fetch(query);
  console.log("Fetched popular posts:", posts); // Log the posts to debug
  return posts;
}

export async function fetchNewsPosts(startIndex = 0, limit = 2): Promise<Post[]> {
  const query = `
    *[_type == "post" && "News" in categories[]->title] | order(publishedAt desc) [${startIndex}...${startIndex + limit}] {
      _id,
      title,
      slug,
      mainImage{asset->{url}},
      "author": author->name,
      "latestCategory": categories[-1]->title,
      description,
      publishedAt
    }
  `;
  const posts = await client.fetch(query);
  console.log("Fetched news posts:", posts); // Log the posts to debug
  return posts;
}

export async function fetchMostRecentNewsPost(): Promise<Post | null> {
  const posts = await client.fetch(
    `*[_type == "post" && "News" in categories[]->title] | order(publishedAt desc)[0] {
      _id,
      title,
      slug,
      "author": author->name,
      "latestCategory": categories[-1]->title,
      description,
      mainImage{
        asset->{
          url
        }
      },
      publishedAt,
      categories[]->{
        title
      }
    }`
  );
  return posts ? posts : null;
}

export async function fetchMostRecentFeaturedPost(): Promise<Post | null> {
  const posts = await client.fetch(
    `*[_type == "post" && "Featured" in categories[]->title] | order(publishedAt desc)[0] {
      _id,
      title,
      slug,
      description,
      "author": author->name,
      "latestCategory": categories[-1]->title,
      mainImage{
        asset->{
          url
        }
      },
      publishedAt,
      categories[]->{
        title
      }
    }`
  );
  return posts ? posts : null;
}

export async function fetchFeaturedPosts(startIndex = 0, limit = 10): Promise<Post[]> {
  const query = `
    *[_type == "post" && "Featured" in categories[]->title] | order(publishedAt desc) [${startIndex}...${startIndex + limit}] {
      _id,
      title,
      slug,
      mainImage{asset->{url}},
      description,
      "author": author->name,
      "latestCategory": categories[-1]->title,
      publishedAt
    }
  `;
  const posts = await client.fetch(query);
  console.log("Fetched Featured posts:", posts); // Log the posts to debug
  return posts;
}

export async function fetchMostRecentEditorPost(): Promise<Post | null> {
  const posts = await client.fetch(
    `*[_type == "post" && "Editor" in categories[]->title] | order(publishedAt desc)[0] {
      _id,
      title,
      slug,
      description,
      "author": author->name,
      "latestCategory": categories[-1]->title,
      mainImage{
        asset->{
          url
        }
      },
      publishedAt,
      categories[]->{
        title
      }
    }`
  );
  return posts ? posts : null;
}

export async function fetchEditorPosts(startIndex = 0, limit = 10): Promise<Post[]> {
  const query = `
    *[_type == "post" && "Editor" in categories[]->title] | order(publishedAt desc) [${startIndex}...${startIndex + limit}] {
      _id,
      title,
      slug,
      mainImage{asset->{url}},
      description,
      "author": author->name,
      "latestCategory": categories[-1]->title,
      publishedAt
    }
  `;
  const posts = await client.fetch(query);
  console.log("Fetched Editor posts:", posts); // Log the posts to debug
  return posts;
}

export async function fetchLatestPosts(startIndex = 0, limit = 20): Promise<Post[]> {
  const query = `
    *[_type == "post"] | order(publishedAt desc) [${startIndex}...${startIndex + limit}] {
      _id,
      title,
      slug,
      mainImage{asset->{url}},
      description,
      "author": author->name,
      "latestCategory": categories[-1]->title,
      publishedAt
    }
  `;
  const posts = await client.fetch(query);
  console.log("Fetched Latest posts:", posts); // Log the posts to debug
  return posts;
}

export async function fetchRandomBlogPost() {
  const query = `*[_type == "post"] | order(_createdAt desc) [0...10] {_id, title, slug, description, mainImage, publishedAt, "author": author->name, "latestCategory": categories[-1]->title,}`;
  
  try {
    const posts = await client.fetch(query);
    console.log("Fetched posts:", posts);  // Log to check if posts are being fetched
    if (posts.length === 0) throw new Error("No posts found");

    // Randomly select a post
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    console.log("Randomly selected post:", randomPost); // Log to check the selected post
    return randomPost;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}