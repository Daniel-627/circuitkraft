// app/blog/page.tsx
import { fetchAllPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default async function BlogPage() {
  // Fetch all blog posts from Sanity
  const posts: Post[] = await fetchAllPosts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-gray-700 mt-2">
                    {post.title || "No description available"}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
