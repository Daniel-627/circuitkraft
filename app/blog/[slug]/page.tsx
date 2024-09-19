// app/blog/[slug]/page.tsx
import { blogPosts } from '../../../data/blogs';
import { BlogPost } from '../../../types/blog';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: { slug: string };
}

function findPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

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
    </div>
  );
}

// Fetch static paths for all blog posts
export async function getStaticPaths() {
  const paths = blogPosts.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

// Fetch the specific blog post statically
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
}
