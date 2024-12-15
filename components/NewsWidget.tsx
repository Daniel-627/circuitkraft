'use client'
// components/FeaturedBlogList.tsx
import { useEffect, useState } from "react";
import { fetchNewsPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function NewsWidget() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const newsPosts = await fetchNewsPosts(0, 4); // Fetch 4 posts starting from the first item
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
      {posts.map((post, index) => (
        <Link href={`/blog/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-4 cursor-pointer border-b-2">
            <div className="mt-1">
              <div className='flex flex-row'>
                <h1 className="text-2xl font-medium">0{index + 1}.</h1>
                <h2 className="text-base font-medium">
                   {post.title} {/* Display the number before the title */}
                </h2>
              </div>
              <div className="flex flex-row justify-between">
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
