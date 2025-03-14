'use client'
// components/PopularBlogCard2.tsx
import { useEffect, useState } from "react";
import { fetchPopularPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

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
      <div className="p-4 text-gray-800 dark:text-gray-200">
        <p>No additional popular posts available.</p>
      </div>
    );
  }

  return (
    <div className="mt-2">
      {posts.map((post) => (
        <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-2 cursor-pointer">
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="w-full h-36 object-cover rounded-lg"
              />
            )}
            <div className="mt-1">
              <p className="text-xs text-blue-500 dark:text-green-400 mt-2">{post.latestCategory}</p>
              <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">{post.title}</h2>
              <div className="flex flex-row justify-between">
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  {post.author || "Author"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}


// ISR: Revalidate page every 60 seconds
export const revalidate = 60;