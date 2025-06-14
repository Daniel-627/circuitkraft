'use client';
// components/LatestArticles1.tsx
import { useEffect, useState } from "react";
import { fetchLatestPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function LatestArticles1() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const latestPosts = await fetchLatestPosts(0, 3); // Fetch 3 posts
      setPosts(latestPosts);
    }
    fetchPosts();
  }, []);

  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 bg-gray-100 dark:bg-[#192428] rounded-lg shadow-md">
        <p className="text-gray-700 dark:text-gray-300">No additional posts available.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-1 md:grid-cols-3 border-x-2 dark:border-gray-700">
      {posts.map((post) => (
        <div key={post._id} className="p-4 cursor-pointer transition transform hover:scale-105">
          {/* Image Link */}
          {post.mainImage && (
            <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} passHref>
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </Link>
          )}

          {/* Post Content */}
          <div className="mt-4">
            {/* Category (only if available) */}
            {post.recentCategory?.slug?.current && post.recentCategory?.title && (
              <Link
                href={`/categories/${encodeURIComponent(post.recentCategory.slug.current)}`}
                passHref
              >
                <p className="text-sm text-blue-500 dark:text-green-500 hover:underline">
                  {post.recentCategory.title}
                </p>
              </Link>
            )}

            {/* Title Link */}
            <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} passHref>
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 hover:underline">
                {post.title}
              </h2>
            </Link>

            {/* Date */}
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ISR: Revalidate page every 60 seconds
export const revalidate = 60;
