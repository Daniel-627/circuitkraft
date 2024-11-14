'use client'
// components/EditorsPick2.tsx
import { useEffect, useState } from "react";
import { fetchEditorPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function EditorsPick2() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const editorPosts = await fetchEditorPosts(2, 2); // Start from 2nd item and get 2 posts
      setPosts(editorPosts);
    }
    fetchPosts();
  }, []);

  // Handle the case where no posts are found
  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 ">
        <p>No additional  posts available.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} key={post._id} passHref>
          <div className="p-4 cursor-pointer flex flex-row">
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-12 h-12 object-cover rounded-t-lg"
              />
            )}
            <div className="mt-1 flex flex-col">
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
