"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchRandomBlogPost } from "@/lib/api";
import { Post } from "@/types/blog";
import { urlFor } from "@/sanity/lib/image";

export default function RandomCategory1() {
  const [post, setPost] = useState<Post | null>(null);

  const fetchAndSetPost = async () => {
    try {
      const randomPost = await fetchRandomBlogPost();
      setPost(randomPost);
      console.log("Fetched random post:", randomPost); // Log to check if post is set correctly
    } catch (error) {
      console.error("Failed to fetch a random blog post:", error);
    }
  };

  useEffect(() => {
    fetchAndSetPost();

    const interval = setInterval(() => {
      fetchAndSetPost();
    }, 60000); // Revalidate every 1 minute

    return () => clearInterval(interval);
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <Link href={`/blog/${post.slug.current }`} passHref key={post._id}>
          <div
            className="relative h-72 bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
            style={{ backgroundImage: `url(${urlFor(post.mainImage).url()})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 z-10 text-white">
              <p className="text-sm text-blue-500">{post.latestCategory}</p>
              <h2 className="text-lg font-medium mt-2 hover:underline">
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
