'use client'
// components/FeaturedBlogList.tsx
import { useEffect, useState } from "react";
import { fetchNewsPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function FeaturedBlogList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const newsPosts = await fetchNewsPosts(0, 4); // Start from 2nd item and get 2 posts
      setPosts(newsPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <p>No additional posts available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-4 cursor-pointer">
            <div className="mt-1">
              <h2 className="text-xl font-semibold">{post.title}</h2>
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
