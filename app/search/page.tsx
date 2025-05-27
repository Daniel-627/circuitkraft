'use client';

import { useEffect, useState } from "react";
import { fetchAllPosts } from "@/lib/api";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function SearchPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const allPosts = await fetchAllPosts();
      setPosts(allPosts);
    };
    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const q = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.description?.toLowerCase().includes(q) ||
      post.latestCategories?.some((cat) => cat.toLowerCase().includes(q))
    );
  });

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-[#192428] text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Search Blog</h1>
      
      <input
        type="text"
        placeholder="Search by title, category or description..."
        className="w-full p-3 mb-6 border rounded-md text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500">No posts matched your search.</p>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPosts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug}`} className="group block">
              <div className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow break-inside-avoid">
                {post.mainImage && urlFor(post.mainImage).url() && (
                  <img
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    className="w-full aspect-[3/4] object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-green-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    {post.description || "No description available"}
                  </p>
                  <div className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                    {post.latestCategories && post.latestCategories.length > 0 ? (
                      <ul className="mb-2 flex flex-wrap gap-2">
                        {post.latestCategories.map((category, index) => (
                          <li
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Uncategorized</p>
                    )}
                    <div className="flex flex-col sm:flex-row justify-between">
                      <p>{post.author || "Unknown"}</p>
                      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
