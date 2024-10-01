'use client';

import { useState } from 'react';
import { blogPosts } from '@/data/blogs';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleSearch = () => {
    if (query.length >= 3) {
      const lowercasedQuery = query.toLowerCase();
      const results = blogPosts.filter(post =>
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery)) ||
        post.categories.some(category => category.toLowerCase().includes(lowercasedQuery))
      );
      setFilteredPosts(results);
    } else {
      setFilteredPosts(blogPosts); // Reset to all posts if query is less than 3 characters
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Blog Posts</h1>
      
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="border p-2 rounded-l w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r flex items-center"
        >
          <FaSearch className="mr-2" /> {/* Add the search icon here */}
          Search
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 bg-white p-4 rounded-xl">
        {filteredPosts.map(post => (
          <div key={post.id} className="rounded-lg space-y-2">
            <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
            <p className='text-gray-600'>{post.excerpt}</p>
            <div className='flex flex-row justify-between items-center'>
              <p className='text-gray-400'>{post.author.name}</p>
              <p className="text-gray-400 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</p>
            </div>
            <div className="mt-4">
              <a href={`/blog/${post.slug}`} className="text-blue-500">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
