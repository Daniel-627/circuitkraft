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
      <div className="p-4">
        <p>No additional news posts available.</p>
      </div>
    );
  }

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 m-2 my-4">
      {posts.map((post) => (
        <Link href={`/blog/${post.slug.current}`} passHref key={post._id}>
          <div
            className="relative h-72 bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
            style={{ backgroundImage: `url(${post.mainImage.asset.url})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 z-10 text-white">
              <p className="text-sm text-blue-500">{post.latestCategory}</p>
              <h2 className="text-lg font-medium mt-2 hover:underline">
                {post.title}
              </h2>
              <div className="flex flex-row items-center space-x-2 mt-4 text-gray-300 text-sm">
                <p>{post.author || "Author"}</p>
                <span className="text-gray-400">•</span>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
