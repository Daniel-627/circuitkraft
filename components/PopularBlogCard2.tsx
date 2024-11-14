'use client'
// components/PopularBlogCard2.tsx
import { useEffect, useState } from "react";
import { fetchPopularPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function PopularBlogCard2() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const popularPosts = await fetchPopularPosts(2, 1); // Start from 2nd item and get 2 posts
      setPosts(popularPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4">
        <p>No additional popular posts available.</p>
      </div>
    );
  }

  return (
    <div className="mt-2">
      {posts.map((post) => (
        <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-2 px-6  cursor-pointer">
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-36 object-cover rounded-lg"
              />
            )}
            <div className="mt-4">
              <h2 className="text-base font-semibold">{post.title}</h2>
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
