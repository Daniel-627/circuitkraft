'use client'
// components/NewsBlogCard.tsx
import { useEffect, useState } from "react";
import { fetchMostRecentNewsPost } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useTheme } from "next-themes";

export default function NewsBlogCard() {
  const [post, setPost] = useState<Post | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Fetch the most recent post in the "News" category
    async function fetchPost() {
      const NewsPost = await fetchMostRecentNewsPost();
      setPost(NewsPost);
    }
    fetchPost();
  }, []);

  // Handle the case where no post is found
  if (!post) {
    return (
      <div className="p-4 text-center dark:text-white">
        <p>No News posts available.</p>
      </div>
    );
  }

  return (
    <Link href={`/blog/${post.slug.current}`} passHref>
      <div
        className="relative h-96 bg-cover bg-center rounded-lg shadow-lg cursor-pointer m-2 my-4 transition-transform transform hover:scale-105 duration-300"
        style={{
          backgroundImage: `url(${urlFor(post.mainImage).url()})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white">
          <p className="text-sm text-blue-500">{post.latestCategory}</p>
          <h2 className="text-2xl font-medium mt-2 hover:underline">
            {post.title}
          </h2>
          <div className="flex flex-row items-center space-x-2 mt-4 text-gray-300 text-sm">
            <p>{post.author || "Author"}</p>
            <span className="text-gray-400">•</span>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}