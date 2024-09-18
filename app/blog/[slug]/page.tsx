// app/blog/[slug]/page.tsx
import { BlogPost } from '../../../types/blogs';
import { notFound } from 'next/navigation';

async function fetchPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const res = await fetch(`/api/posts`);
  const posts = await res.json();
  return posts.find((post: BlogPost) => post.slug === slug);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <article>
        <img src={post.featuredImage} alt={post.title} className="w-full h-64 object-cover mb-4"/>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.publishedAt.toDateString()}</p>
        <div className="prose">
          {/* Use a markdown parser or any HTML rendering if `content` is in HTML format */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  );
}
