'use client'
// components/NewsBlogCards.tsx
import { useEffect, useState } from "react";
import { fetchNewsPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function NewsBlogCards() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const newsPosts = await fetchNewsPosts(2, 2); // Start from 2nd item and get 2 posts
      setPosts(newsPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 ">
        <p>No additional news posts available.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-4 bg-white  cursor-pointer">
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
      ))}
    </div>
  );
}
