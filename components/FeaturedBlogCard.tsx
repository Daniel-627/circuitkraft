'use client'
// components/FeaturedBlogCard.tsx
import { useEffect, useState } from "react";
import { fetchMostRecentFeaturedPost } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

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
      <div className="p-4">
        <p>No featured posts available.</p>
      </div>
    );
  }

  return (
    <Link href={`/blog/${post.slug.current}`} passHref>
      <div
        className="relative h-96 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${urlFor(post.mainImage).url() })`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        {/* Content */}
        <div className="absolute bottom-0 w-full p-6 z-10 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
          <p className="text-sm text-blue-500">{post.latestCategory}</p>
          <h2 className="text-2xl font-medium mt-2">{post.title}</h2>
          <div className="flex flex-row space-x-2 mt-4">
            <p className="text-sm text-gray-300">{post.author || "Author"}</p>
            <span className="text-gray-400">•</span>
            <p className="text-sm text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
