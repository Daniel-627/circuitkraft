'use client'
// components/PopularBlogCards.tsx
import { useEffect, useState } from "react";
import { fetchPopularPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function PopularBlogCards() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const popularPosts = await fetchPopularPosts(3, 2); // Start from 2nd item and get 2 posts
      setPosts(popularPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 ">
        <p>No additional popular posts available.</p>
      </div>
    );
  }

  return (
    <div className="flex md:flex-col">
      {posts.map((post) => (
        <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-2  cursor-pointer">
            <div className="mt-1">
              <p className="text-xs text-gray-500 mt-2">{post.latestCategory}</p>
              <h2 className="text-base font-medium">{post.title}</h2>
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
      ))}
    </div>
  );
}
