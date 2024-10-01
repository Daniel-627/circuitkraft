'use client';

import { blogPosts } from '@/data/blogs';
import PostWidget from '@/components/PostWidget';

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="col-span-3">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>

        {/* Display all blog posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-4 rounded-xl">
          {blogPosts.map(post => (
            <div key={post.id} className="rounded-lg space-y-2">
              <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-400">{post.author.name}</p>
                <p className="text-gray-400 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</p>
              </div>
              <div className="mt-4">
                <a href={`/blog/${post.slug}`} className="text-blue-500">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Widget on the right, with sticky behavior */}
      <div className="hidden md:block col-span-1">
        <div className="sticky top-4">
          <PostWidget />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
