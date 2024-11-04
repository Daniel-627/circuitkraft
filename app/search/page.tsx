'use client'

// app/search/page.tsx
import { useState } from "react";
import { fetchPostsBySearchQuery } from "@/lib/api";
import { Post } from "@/types/blog";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    const searchResults: Post[] = await fetchPostsBySearchQuery(query);
    setResults(searchResults);
    setIsSearching(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search</h1>
      <div className="flex items-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, category, author, or tags..."
          className="flex-grow p-2 border border-gray-300 rounded-l-lg"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {isSearching ? (
        <p>Searching...</p>
      ) : (
        <ul className="space-y-4">
          {results.length === 0 ? (
            <p>No results found.</p>
          ) : (
            results.map((post) => (
              <li key={post._id}>
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-700 mt-2">
                      {post.description || "No description available"}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Published on: {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
