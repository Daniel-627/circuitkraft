'use client'
// components/LatestArticle1.tsx
import { useEffect, useState } from "react";
import { fetchLatestPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function LatestArticles2() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const latestPosts = await fetchLatestPosts(3, 9); // Start from 2nd item and get 2 posts
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
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
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
              <p className="text-gray-600 mt-2">
                {post.description || "No description available"}
              </p>
              <p className="text-xs text-gray-500 mt-4">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}