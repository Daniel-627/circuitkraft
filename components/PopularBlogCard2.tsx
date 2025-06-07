'use client';

// components/PopularBlogCard2.tsx
import { useEffect, useState } from "react";
import { fetchPopularPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function PopularBlogCard2() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const popularPosts = await fetchPopularPosts(2, 1); // Start from 2nd item and get 1 post
      setPosts(popularPosts);
    }
    fetchPosts();
  }, []);

  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 text-gray-800 dark:text-gray-200">
        <p>No additional popular posts available.</p>
      </div>
    );
  }

  return (
    <div className="mt-2">
      {posts.map((post) => (
        <div key={post._id} className="p-2 cursor-pointer">
          {post.mainImage && (
            <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} passHref>
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="w-full h-36 object-cover rounded-lg"
              />
            </Link>
          )}
          <div className="mt-1">
            {post.recentCategory && post.recentCategory.slug?.current && (
              <Link
                href={`/categories/${post.recentCategory.slug.current}`}
                className="text-xs text-blue-500 dark:text-green-400 mt-2 hover:underline"
              >
                {post.recentCategory.title}
              </Link>
            )}
            <Link href={`/blog/${encodeURIComponent(post.slug.current)}`}>
              <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                {post.title}
              </h2>
            </Link>
            <div className="flex flex-row justify-between">
              {post.author && post.authorSlug ? (
                <Link
                  href={`/authors/${post.authorSlug}`}
                  className="text-xs text-gray-600 dark:text-gray-400 mt-2 hover:underline"
                >
                  {post.author}
                </Link>
              ) : (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Unknown</p>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
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

