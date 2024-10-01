// app/categories/[category]/page.tsx
import { blogPosts } from '@/data/blogs';
import { notFound } from 'next/navigation';
import Link from 'next/link'

interface CategoryPageProps {
  params: { category: string };
}

// Find posts by category
const findPostsByCategory = (category: string) => {
  return blogPosts.filter(post => post.categories.includes(category));
};

// Component to display the category page
export default function CategoryPage({ params }: CategoryPageProps) {
  const posts = findPostsByCategory(params.category);

  if (posts.length === 0) {
    notFound(); // Handle no posts found for the category
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts in {params.category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="rounded-lg space-y-2">
            <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <div className="mt-4">
              <Link href={`/blog/${post.slug}`} className="text-blue-500">Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Generates static paths for all categories (optional)
export async function generateStaticParams() {
  const categories = Array.from(new Set(blogPosts.flatMap(post => post.categories)));
  return categories.map(category => ({ category }));
}
