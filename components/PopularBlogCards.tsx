'use client';

import { useEffect, useState } from "react";
import { fetchPopularPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function PopularBlogCards() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const popularPosts = await fetchPopularPosts(3, 2);
      setPosts(popularPosts);
    }
    fetchPosts();
  }, []);

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
        <div
          key={post._id}
          className="p-4 border-t-2 dark:border-gray-700 bg-white dark:bg-[#192428] transition duration-300"
        >
          <div className="mt-1 cursor-pointer">
            {/* Category link */}
            {post.recentCategory && post.recentCategory.slug?.current && (
              <Link href={`/categories/${post.recentCategory.slug.current}`}>
                <a className="text-xs text-blue-500 dark:text-green-400 mt-2 hover:underline">
                  {post.recentCategory.title}
                </a>
              </Link>
            )}

            {/* Title link */}
            <Link href={`/blog/${encodeURIComponent(post.slug.current)}`}>
              <a className="text-base font-medium text-gray-800 dark:text-gray-200 block mt-1 hover:underline">
                {post.title}
              </a>
            </Link>

            {/* Author and Date */}
            <div className="flex flex-row justify-between mt-2">
              {post.author && post.authorSlug ? (
                <Link href={`/authors/${post.authorSlug}`}>
                  <a className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    {post.author}
                  </a>
                </Link>
              ) : (
                <p className="text-xs text-gray-600 dark:text-gray-400">Author Unknown</p>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ISR: Revalidate page every 60 seconds
export const revalidate = 60;
