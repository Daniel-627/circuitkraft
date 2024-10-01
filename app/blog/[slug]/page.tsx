

// app/blog/[slug]/page.tsx
import { blogPosts } from '../../../data/blogs';
import { BlogPost } from '../../../types/blog';
import { notFound } from 'next/navigation';
import RelatedPostsWidget from '@/components/RelatedPostsWidget'; // Import the RelatedPostsWidget

interface BlogPostPageProps {
  params: { slug: string };
}

// Find the post based on slug
function findPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Component to display a blog post
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = findPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <article>
        <img src={post.featuredImage} alt={post.title} className="w-full h-64 object-cover mb-4" />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{new Date(post.publishedAt).toDateString()}</p>
        <div className="prose">
          {/* Use a markdown parser or any HTML rendering if `content` is in HTML format */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>

      {/* Related Posts Widget */}
      <RelatedPostsWidget currentPost={post} /> {/* Pass the current post to the widget */}
    </div>
  );
}

// Generates static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}
