'use client';
import { useEffect, useState } from "react";
import { fetchNewsPosts } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useTheme } from "next-themes";

export default function NewsBlogCards() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchPosts() {
      const newsPosts = await fetchNewsPosts(2, 2); // Start from 2nd item and get 2 posts
      setPosts(newsPosts);
    }
    fetchPosts();
  }, []);

  if (!posts || posts.length === 0) {
    return (
      <div className="p-4">
        <p className="text-center text-gray-500 dark:text-gray-400">
          No additional news posts available.
        </p>
      </div>
    );
  }

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 m-2 my-4">
      {posts.map((post) => (
        <div
          key={post._id}
          className="relative h-72 bg-cover bg-center rounded-lg shadow-lg cursor-pointer transition-transform transform duration-300"
          style={{ backgroundImage: `url(${urlFor(post.mainImage).url()})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 z-10 text-white">
            {/* Category link */}
            {post.recentCategory && post.recentCategory.slug?.current && (
              <Link href={`/categories/${post.recentCategory.slug.current}`}>
                <a className="text-sm text-blue-500 hover:underline">
                  {post.recentCategory.title}
                </a>
              </Link>
            )}

            {/* Title link */}
            <Link href={`/blog/${post.slug.current}`}>
              <a className="text-lg font-medium mt-2 hover:underline block">
                {post.title}
              </a>
            </Link>

            {/* Author and date */}
            <div className="flex flex-row items-center space-x-2 mt-4 text-gray-300 text-sm">
              {post.author && post.authorSlug ? (
                <Link href={`/authors/${post.authorSlug}`}>
                  <a>{post.author}</a>
                </Link>
              ) : (
                <p>Author</p>
              )}
              <span className="text-gray-400">•</span>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ISR: Revalidate page every 60 seconds
export const revalidate = 60;
