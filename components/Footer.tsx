// app/components/Footer.tsx
import React from 'react';
import { blogPosts } from '@/data/blogs'; // Import your blog posts
import { BlogPost } from '@/types/blog'; // Import your BlogPost type

const Footer = () => {
  // Function to get a random category
  const getRandomCategory = () => {
    const categories = Array.from(new Set(blogPosts.flatMap(post => post.categories)));
    return categories[Math.floor(Math.random() * categories.length)];
  };

  // Function to get the latest two blog posts
  const getLatestPosts = (): BlogPost[] => {
    return blogPosts
      .filter(post => post.isPublished)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 2);
  };

  const latestPosts = getLatestPosts();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column */}
        <div className="space-y-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-12" /> {/* Update with your logo path */}
          <p className="text-gray-400">Your description goes here. Briefly describe your blog or website.</p>
          <p>Email: <a href="mailto:your-email@example.com" className="text-blue-400">your-email@example.com</a></p>
          <p>Phone: <span className="text-gray-400">+123 456 7890</span></p>
        </div>

        {/* Second Column - Random Category */}
        <div>
          <h3 className="font-bold text-lg mb-2">Random Category</h3>
          <p className="text-gray-400">{getRandomCategory()}</p>
        </div>

        {/* Third Column - Latest Posts */}
        <div>
          <h3 className="font-bold text-lg mb-2">Latest Posts</h3>
          <ul className="space-y-2">
            {latestPosts.map(post => (
              <li key={post.id}>
                <a href={`/blog/${post.slug}`} className="text-blue-400 hover:underline">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
