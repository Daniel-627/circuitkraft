// app/components/PostWidget.tsx
'use client'

import { useEffect, useState } from 'react';
import { blogPosts } from '../data/blogs'; // Adjust the path based on your structure

const getCategories = () => {
  return Array.from(new Set(blogPosts.flatMap(post => post.categories)));
};

const getLatestPostsByCategory = (category: string) => {
  return blogPosts
    .filter(post => post.categories.includes(category) && post.isPublished)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, 3);
};

const PostWidget = () => {
  const categories = getCategories();
  const [category, setCategory] = useState(categories[0]); // Start with the first category
  const [latestPosts, setLatestPosts] = useState(getLatestPostsByCategory(category));

  useEffect(() => {
    const interval = setInterval(() => {
      const newCategory = categories[Math.floor(Math.random() * categories.length)];
      setCategory(newCategory);
      setLatestPosts(getLatestPostsByCategory(newCategory));
    }, 5 * 60 * 1000); // Revalidate every 5 minutes

    return () => clearInterval(interval);
  }, [categories]);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-2">Latest in {category}</h2>
      <ul>
        {latestPosts.map(post => (
          <li key={post.id} className="mb-2">
            <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
              {post.title}
            </a>
            <p className="text-sm text-gray-600">{new Date(post.publishedAt).toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostWidget;
