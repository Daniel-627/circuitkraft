'use client'
// components/PopularBlogCards.tsx
import { useEffect, useState } from "react";
import { fetchPopularPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function PopularBlogCards() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const popularPosts = await fetchPopularPosts(3, 2); // Start from 2nd item and get 2 posts
      setPosts(popularPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300">No additional popular posts available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
      {posts.map((post) => (
        <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-4 cursor-pointer border-t-2 dark:border-gray-700 bg-white dark:bg-[#192428] rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="mt-1">
              <p className="text-xs text-blue-500 dark:text-green-400 mt-2">{post.latestCategory}</p>
              <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">{post.title}</h2>
              <div className="flex flex-row justify-between">
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  {post.author || "Author"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}


// ISR: Revalidate page every 60 seconds
export const revalidate = 60;