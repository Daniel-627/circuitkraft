'use client'
// components/EditorsPick1.tsx
import { useEffect, useState } from "react";
import { fetchMostRecentEditorPost } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import EditorsPick2 from "./EditorsPick2";

export default function EditorsPick1() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    // Fetch the most recent post in the "Popular" category
    async function fetchPost() {
      const editorPost = await fetchMostRecentEditorPost();
      setPost(editorPost);
    }
    fetchPost();
  }, []);

  // Handle the case where no post is found
  if (!post) {
    return (
      <div className="p-4">
        <p>No posts available.</p>
      </div>
    );
  }

  return (
    <div
      className="relative h-96 bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
      style={{
        backgroundImage: `url(${post.mainImage.asset.url})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white">
        <p className="text-sm text-gray-300">{post.latestCategory}</p>
        <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} passHref>
          <h2 className="text-2xl font-bold mt-2 hover:underline">
            {post.title}
          </h2>
        </Link>
        <div className="flex flex-row items-center space-x-2 mt-4 text-gray-300 text-sm">
          <p>{post.author || "Author"}</p>
          <span className="text-gray-400">•</span>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
        {/* Nested EditorsPick2 */}
        <div className=" bottom-0 left-0 w-full">
          <EditorsPick2 />
        </div>
      </div>
    </div>
  );
}
