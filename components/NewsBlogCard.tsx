'use client'
// components/NewsBlogCard.tsx
import { useEffect, useState } from "react";
import { fetchMostRecentNewsPost } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function NewsBlogCard() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    // Fetch the most recent post in the "Popular" category
    async function fetchPost() {
      const NewsPost = await fetchMostRecentNewsPost();
      setPost(NewsPost);
    }
    fetchPost();
  }, []);

  // Handle the case where no post is found
  if (!post) {
    return (
      <div className="p-4 ">
        <p>No News posts available.</p>
      </div>
    );
  }

  return (
    <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} passHref>
      <div className="p-4  cursor-pointer">
        {post.mainImage && (
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-xs text-gray-500 mt-4">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
