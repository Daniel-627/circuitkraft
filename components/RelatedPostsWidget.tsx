'use client'

import { blogPosts } from '@/data/blogs'; // Adjust the import path based on your project structure
import { BlogPost } from 'c:/Users/n/Desktop/circuitkraft/types/blog'; // Import BlogPost type
import { useEffect, useState } from 'react';

interface RelatedPostsWidgetProps {
  currentPost: BlogPost;
}

const getRelatedPosts = (currentPost: BlogPost): BlogPost[] => {
  return blogPosts
    .filter(post =>
      post.id !== currentPost.id && // Exclude the current post
      (post.categories.some(category => currentPost.categories.includes(category)) || // Check if any categories match
        post.tags.some(tag => currentPost.tags.includes(tag))) // Check if any tags match
    )
    .slice(0, 3); // Limit to 3 related posts
};

const RelatedPostsWidget: React.FC<RelatedPostsWidgetProps> = ({ currentPost }) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setRelatedPosts(getRelatedPosts(currentPost));
  }, [currentPost]);

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">Related Posts</h2>
      {relatedPosts.length > 0 ? (
        <ul>
          {relatedPosts.map(post => (
            <li key={post.id} className="mb-4">
              <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                <img src={post.featuredImage} alt={post.title} className="w-full h-24 object-cover rounded-lg mb-2" />
                <p className="font-semibold">{post.title}</p>
                <p className="text-sm text-gray-600">{new Date(post.publishedAt).toDateString()}</p>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No related posts found.</p>
      )}
    </div>
  );
};

export default RelatedPostsWidget;
