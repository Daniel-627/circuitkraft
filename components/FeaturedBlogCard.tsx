'use client';
// components/FeaturedBlogCard.tsx
import { useEffect, useState } from "react";
import { fetchMostRecentFeaturedPost } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useTheme } from "next-themes";

export default function FeaturedBlogCard() {
  const [post, setPost] = useState<Post | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    async function fetchPost() {
      const featuredPost = await fetchMostRecentFeaturedPost();
      setPost(featuredPost);
    }
    fetchPost();
  }, []);

  // Handle the case where no post is found
  if (!post) {
    return (
      <div className="p-4">
        <p className="text-center text-gray-500 dark:text-gray-400">No featured posts available.</p>
      </div>
    );
  }

  return (
    <Link href={`/blog/${post.slug.current}`} passHref>
      <div
        className="relative h-96 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${urlFor(post.mainImage).url()})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        {/* Content */}
        <div className="absolute bottom-0 w-full p-6 z-10 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
          {post.recentCategory && post.recentCategory.slug?.current && (
            <Link
              href={`/categories/${post.recentCategory.slug.current}`}
              className="text-sm text-blue-500 dark:text-green-400 hover:underline"
            >
              {post.recentCategory.title}
            </Link>
          )}
          <Link href={`/blog/${post.slug.current}`} className="hover:underline">
            <h2 className="text-2xl font-medium mt-2">
              {post.title}
            </h2>
          </Link>
          <div className="flex flex-wrap space-x-2 mt-4 text-sm">
            {post.author && post.authorSlug ? (
              <Link
                href={`/authors/${post.authorSlug}`}
                className="text-gray-300 dark:text-gray-400 hover:underline"
              >
                {post.author}
              </Link>
            ) : (
              <p className="text-gray-300 dark:text-gray-400">Unknown</p>
            )}
            <span className="text-gray-400">•</span>
            <p className="text-gray-400">{new Date(post.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ISR: Revalidate page every 60 seconds
export const revalidate = 60;
