'use client'
// components/FeaturedBlogCard.tsx
import { useEffect, useState } from "react";
import { fetchMostRecentFeaturedPost } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function FeaturedBlogCard() {
  const [post, setPost] = useState<Post | null>(null);

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
      <div className="p-4 ">
        <p>No featured posts available.</p>
      </div>
    );
  }

  return (
    <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} passHref>
      <div
        className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-cover bg-center h-80 flex flex-col justify-end text-white"
        style={{
          backgroundImage: post.mainImage ? `url(${post.mainImage.asset.url})` : undefined,
        }}
      >
        <div className="bg-black bg-opacity-50 pt-4 rounded-lg">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-xs mt-4">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

