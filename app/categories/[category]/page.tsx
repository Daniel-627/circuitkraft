// app/categories/[category]/page.tsx
import { fetchPostsByCategorySlug } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  // Fetch posts based on the category slug
  const posts: Post[] = await fetchPostsByCategorySlug(category);

  // Handle case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto p-4 bg-white dark:bg-[#192428] text-black dark:text-white text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">No Posts Found</h1>
        <p className="text-lg">There are no posts under this category at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-[#192428] text-black dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {category.charAt(0).toUpperCase() + category.slice(1)} Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="w-full">
            <Link href={`/blog/${post.slug.current}`}>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {post.description || "No description available"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Published on: {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
