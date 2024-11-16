// components/RandomCategoryPostsWidget.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchRandomCategoryPosts } from "@/lib/api";
import { Post } from "@/types/blog";

export default function RandomCategory2() {
  const [category, setCategory] = useState<{ title: string } | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchAndSetCategoryPosts = async () => {
    try {
      const { category, posts } = await fetchRandomCategoryPosts();
      setCategory(category);
      setPosts(posts);
      console.log("Random category and posts:", category, posts);
    } catch (error) {
      console.error("Failed to fetch category posts:", error);
    }
  };

  useEffect(() => {
    fetchAndSetCategoryPosts();
    
    // Re-fetch every minute
    const interval = setInterval(() => {
      fetchAndSetCategoryPosts();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!category || posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Posts from {category.title}</h3>
      <div className="gap-2 flex flex-col">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id} passHref>
            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              {post.mainImage && (
                <div
                  className="h-40 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${post.mainImage.asset.url})` }}
                />
              )}
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="text-gray-600 mt-2">
                  {post.description || "No description available."}
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  {post.author && `By ${post.author}`} -{" "}
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
