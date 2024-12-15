'use client'
// components/EditorsPick2.tsx
import { useEffect, useState } from "react";
import { fetchEditorPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

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
          <div className="p-4 cursor-pointer flex flex-row items-center space-x-2">
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
            )}
            <div className="mt-1 flex flex-col">
              <h2 className="text-base font-medium">{post.title}</h2>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
