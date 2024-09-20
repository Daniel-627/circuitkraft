// app/categories/[category]/page.tsx
import { blogPosts } from '../../../data/blogs';
import { BlogPost } from '../../../types/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category;
  const filteredPosts = blogPosts.filter((post) =>
    post.categories.includes(category)
  );

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Category: {category}</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post: BlogPost) => (
          <div key={post.id} className="border rounded-lg overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">
                {new Date(post.publishedAt).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Generate static paths for each category
export async function generateStaticParams() {
  const categories = Array.from(
    new Set(blogPosts.flatMap((post) => post.categories))
  );

  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}
