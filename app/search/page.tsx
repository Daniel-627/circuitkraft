'use client';

import { useEffect, useState, useRef } from "react";
import { fetchAllPosts } from "@/lib/api";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/blog";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function SearchPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchAllPosts().then(setPosts);
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;
    const q = query.toLowerCase();
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(q) ||
      post.description?.toLowerCase().includes(q) ||
      post.latestCategories?.some((cat) => cat.toLowerCase().includes(q))
    );
    setFilteredPosts(results);
    setSearchPerformed(true);
    inputRef.current?.blur(); // Dismiss mobile keyboard
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#192428] text-black dark:text-white p-4">
      <div
        className={`flex flex-col items-center ${
          searchPerformed ? "mb-8" : "justify-center min-h-screen"
        } transition-all duration-300`}
      >
        <div className="w-full max-w-xl flex border rounded-md overflow-hidden">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-3 text-sm sm:text-base text-black dark:text-white bg-white dark:bg-[#1e2b30] outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 flex items-center justify-center"
            aria-label="Search"
          >
            <FaSearch className="w-4 h-4" />
          </button>
        </div>
      </div>

      {searchPerformed && (
        <>
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
        </>
      )}
    </div>
  );
}
