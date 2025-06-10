'use client';
// components/EditorsPick1.tsx
import { useEffect, useState } from "react";
import { fetchMostRecentEditorPost } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import EditorsPick2 from "./EditorsPick2";
import { urlFor } from "@/sanity/lib/image";

export default function EditorsPick1() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchPost() {
      const editorPost = await fetchMostRecentEditorPost();
      setPost(editorPost);
    }
    fetchPost();
  }, []);

  if (!post) {
    return (
      <div className="p-4 bg-gray-100 dark:bg-[#192428] rounded-lg shadow-md text-center">
        <p className="text-gray-700 dark:text-gray-300">No posts available.</p>
      </div>
    );
  }

  return (
    <div
      className="relative h-96 sm:h-[400px] bg-cover bg-center rounded-lg shadow-lg cursor-pointer transition-all duration-300"
      style={{
        backgroundImage: `url(${urlFor(post.mainImage).url()})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
        {/* Category Link */}
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

        {/* Post Title Link */}
        <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} passHref>
          <h2 className="text-2xl font-medium mt-2 hover:underline transition">
            {post.title}
          </h2>
        </Link>

        {/* Author and Date */}
        <div className="flex items-center space-x-2 mt-4 text-gray-300 dark:text-gray-400 text-sm">
          {post.author && (
            <Link
              href={`/authors/${post.authorSlug}`}
              passHref
              className="hover:underline"
            >
              {post.author}
            </Link>
          )}
          <span className="text-gray-400">•</span>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>

        {/* EditorsPick2 Component */}
        <div className="border-t border-gray-500 dark:border-gray-700 mt-6 hidden lg:block">
          <EditorsPick2 />
        </div>
      </div>
    </div>
  );
}

// ISR: Revalidate page every 60 seconds
export const revalidate = 60;
