'use client';
// components/FeaturedBlogList.tsx
import { useEffect, useState } from "react";
import { fetchFeaturedPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function FeaturedBlogList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const featuredPosts = await fetchFeaturedPosts(2, 4); // Start from 2nd item and get 2 posts
      setPosts(featuredPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 bg-gray-100 dark:bg-[#192428] rounded-lg shadow-md text-center">
        <p className="text-gray-700 dark:text-gray-300">
          No additional featured posts available.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-3 cursor-pointer border-t-2 border-gray-300 dark:border-gray-700 mx-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <div className="mt-1">
              <p className="text-xs text-blue-500 dark:text-green-500 mt-2">
                {post.latestCategory}
              </p>
              <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                {post.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
