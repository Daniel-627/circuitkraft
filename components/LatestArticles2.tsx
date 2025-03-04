'use client'
// components/LatestArticle1.tsx
import { useEffect, useState } from "react";
import { fetchLatestPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function LatestArticles2() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const latestPosts = await fetchLatestPosts(3, 9);
      setPosts(latestPosts);
    }
    fetchPosts();
  }, []);

  if (!posts || posts.length === 0) {
    return (
      <div className="p-4">
        <p>No additional posts available.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-2 md:grid-cols-3 border-b-2 dark:border-gray-700">
      {posts.map((post) => (
        <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-2 m-2 cursor-pointer flex flex-row items-center space-x-2 border-t-2 dark:border-gray-700">
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="h-16 w-16 object-cover rounded-lg"
              />
            )}
            <div>
              <h2 className="text-sm font-medium dark:text-white">{post.title}</h2>
              <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
