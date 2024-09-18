// app/blog/page.tsx
import { BlogPost } from './../../types/blogs';
import Link from 'next/link';

async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch('/api/posts');
  return res.json();
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post.id} className="border rounded-lg overflow-hidden">
            <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">{post.publishedAt.toDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
