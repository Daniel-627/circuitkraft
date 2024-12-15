'use client'
// components/LatestArticle1.tsx
import { useEffect, useState } from "react";
import { fetchLatestPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function LatestArticles1() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const latestPosts = await fetchLatestPosts(0, 3); // Start from 2nd item and get 2 posts
      setPosts(latestPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 ">
        <p>No additional  posts available.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-1 md:grid-cols-3 border-x-2">
      {posts.map((post) => (
        <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-4  cursor-pointer">
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="w-full h-56 object-cover rounded-lg"
              />
            )}
            <div className="mt-4">
              <p className="text-sm text-blue-500">{post.latestCategory}</p>
              <h2 className="text-base font-medium">{post.title}</h2>
              <p className="text-xs text-gray-400 mt-4">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}