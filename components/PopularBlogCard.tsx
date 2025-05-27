'use client';

import { useEffect, useState } from "react";
import { fetchMostRecentPopularPost } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function PopularBlogCard() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchPost() {
      const popularPost = await fetchMostRecentPopularPost();
      setPost(popularPost);
    }
    fetchPost();
  }, []);

  if (!post) {
    return (
      <div className="p-4">
        <p className="text-gray-800 dark:text-gray-300">No popular posts available.</p>
      </div>
    );
  }

  return (
    <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} passHref>
      <div className="p-4 cursor-pointer">
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        )}
        <div className="mt-4">
          {post.recentCategory?.slug?.current && (
            <Link
              href={`/categories/${post.recentCategory.slug.current}`}
              className="text-xs text-blue-500 dark:text-green-500 mt-2 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {post.recentCategory.title}
            </Link>
          )}

          <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:underline">
            {post.title}
          </h2>

          <div className="flex flex-col md:flex-row justify-between">
            {post.author && post.authorSlug ? (
              <Link
                href={`/authors/${post.authorSlug}`}
                className="text-xs text-gray-600 dark:text-gray-400 mt-2 hover:underline"
                onClick={(e) => e.stopPropagation()}
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
    </Link>
  );
}

export const revalidate = 60;
