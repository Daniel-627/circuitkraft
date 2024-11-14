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
      <div className="p-4 ">
        <p>No posts available.</p>
      </div>
    );
  }

  return (
    <div className="p-4 cursor-pointer">
        {post.mainImage && (
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="w-full h-48 object-cover rounded-md"
          />
        )}
        <div className="mt-4 pb-4">
          <Link href={`/trial/${encodeURIComponent(post.slug.current)}`} passHref>
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </Link>
          <p className="text-xs text-gray-500 mt-4">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <div>
          <EditorsPick2 />
        </div>
      </div>
  );
}
