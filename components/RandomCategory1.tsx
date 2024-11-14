// components/RandomBlogPostWidget.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchRandomBlogPost } from "@/lib/api";
import { Post } from "@/types/blog";

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
    <Link href={`/blog/${post.slug.current}`} passHref>
      <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        {post.mainImage && (
          <div
            className="h-40 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${post.mainImage.asset.url})` }}
          />
        )}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-gray-600 mt-2">{post.description || "No description available."}</p>
          <p className="text-sm text-gray-500 mt-4">
            {post.author && `By ${post.author.name}`} -{" "}
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
