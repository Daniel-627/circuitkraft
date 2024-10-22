// app/categories/[category]/page.tsx
import { fetchPostsByCategory, fetchCategories } from "@/lib/api";
import { Post } from "@/types/blog";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  // Fetch posts for the given category slug
  const posts: Post[] = await fetchPostsByCategory(category);

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">No posts found for category: "{category}"</h1>
        <p>It seems there are no posts in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts in "{category}"</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post._id}>
            <a href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
              {post.title}
            </a>
            <p className="text-gray-600">{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
