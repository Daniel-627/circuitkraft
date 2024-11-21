// app/components/Footer.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { blogPosts } from '@/data/blogs'; // Import your blog posts
import { BlogPost } from '@/types/blog'; // Import your BlogPost type
import logo1 from '@/public/logo1.png';
import  RandomCategory3  from '@/components/RandomCategory3'

const Footer = () => {
  const [randomPosts, setRandomPosts] = useState<BlogPost[]>([]);

  // Function to get two random blog posts from different categories
  const getRandomPosts = () => {
    const publishedPosts = blogPosts.filter(post => post.isPublished);
    const shuffledPosts = publishedPosts.sort(() => 0.5 - Math.random());
    const uniqueCategories: Set<string> = new Set();
    
    const postsFromRandomCategories = shuffledPosts.filter(post => {
      // Ensures unique categories
      if (!post.categories.some(category => uniqueCategories.has(category))) {
        post.categories.forEach(category => uniqueCategories.add(category));
        return true;
      }
      return false;
    });

    return postsFromRandomCategories.slice(0, 2);
  };

  useEffect(() => {
    setRandomPosts(getRandomPosts());
  }, []);

  return (
    <footer className="bg-gray-50 text-gray-800 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column */}
        <div className="space-y-4">
          <img src="/logo1.png" alt="Logo" className="h-12" /> {/* Update with your logo path */}
          <p className="text-gray-400">Your description goes here. Briefly describe your blog or website.</p>
          <p>Email: <a href="mailto:your-email@example.com" className="text-blue-400">your-email@example.com</a></p>
          <p>Phone: <span className="text-gray-400">+123 456 7890</span></p>
        </div>

        {/* Second Column - Blog Posts from Random Categories */}
        <div>
          <RandomCategory3 />
        </div>

        {/* Third Column - Subscription Input */}
        <div>
          <h3 className="font-bold text-lg mb-2">Subscribe to Our Newsletter</h3>
          <form className="flex space-x-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required 
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
