'use client'
// components/PopularBlogCard.tsx
import { useEffect, useState } from "react";
import { fetchMostRecentPopularPost } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function PopularBlogCard() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    // Fetch the most recent post in the "Popular" category
    async function fetchPost() {
      const popularPost = await fetchMostRecentPopularPost();
      setPost(popularPost);
    }
    fetchPost();
  }, []);

  // Handle the case where no post is found
  if (!post) {
    return (
      <div className="p-4">
        <p>No popular posts available.</p>
      </div>
    );
  }

  return (
    <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} passHref>
      <div className="p-4 cursor-pointer">
        {post.mainImage && (
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg" // Increased height to h-80
          />
        )}
        <div className="mt-4">
          <p className="text-xs text-gray-500 mt-2">{post.latestCategory}</p>
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <div className="flex flex-row">
                <p className="text-xs text-gray-600 mt-2">
                  {post.author || "Author"}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  .{new Date(post.publishedAt).toLocaleDateString()}
                </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
