// app/category/[slug]/page.tsx
import { fetchPostsByCategory, fetchCategories } from "@/lib/api";
import { Category, Post } from '@/types/blog';
interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categories = await fetchCategories();
  const category = categories.find((cat: Category) => cat.slug === params.slug);
  
  if (!category) {
    return <p>Category not found.</p>;
  }

  const posts: Post[] = await fetchPostsByCategory(params.slug);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{category.title}</h1>
      {posts.length === 0 ? (
        <p>No posts found for this category.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id}>
              <a href={`/blog/${post.slug}`} className="text-lg font-semibold hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
