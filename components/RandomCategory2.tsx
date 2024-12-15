// components/RandomCategoryPostsWidget.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchRandomCategoryPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import { urlFor } from "@/sanity/lib/image";

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
      <h3 className="text-xl font-medium mb-4">{category.title}</h3>
      <div className="gap-2 flex flex-col">
        {posts.map((post) => (
          <Link href={`/blog/${encodeURIComponent(post.slug.current )}`} key={post._id} passHref>
          <div className="p-2 m-2 cursor-pointer flex flex-row items-center space-x-2 border-t-2">
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className=" h-16 w-16 object-cover rounded-lg"
              />
            )}
            <div className="">
              <h2 className="text-sm font-medium">{post.title}</h2>              
              <p className="text-xs text-gray-500 mt-1">
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
